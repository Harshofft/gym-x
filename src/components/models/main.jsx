"use client";
import React, { useState, useRef } from "react";
import {
  FaCloudUploadAlt,
  FaCamera,
  FaPaperPlane,
  FaVideo,
  FaVideoSlash,
  FaTrash,
} from "react-icons/fa";
import Webcam from "react-webcam";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const CameraComponent = ({ setImage, setImagePreview, onImagePresent, darkMode }) => {
  const webcamRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(true);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setImage(imageSrc);
        setImagePreview(imageSrc);
        onImagePresent(true);
      }
    }
  };

  return (
    <div
      className={`flex flex-col items-center gap-3 p-4 border rounded-xl shadow-md w-full md:w-1/3 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <h3 className="text-base font-semibold mb-2">Camera</h3>
      {cameraActive ? (
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-lg w-full max-w-xs h-40 shadow"
        />
      ) : (
        <div
          className={`rounded-lg w-full max-w-xs h-40 flex items-center justify-center shadow text-xs ${
            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"
          }`}
        >
          Camera Off
        </div>
      )}
      <div className="flex gap-2 mt-2">
        <button
          onClick={capture}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow"
        >
          <FaCamera className="text-lg" />
        </button>
        <button
          onClick={() => setCameraActive(!cameraActive)}
          className="bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500 shadow"
        >
          {cameraActive ? <FaVideoSlash className="text-lg" /> : <FaVideo className="text-lg" />}
        </button>
      </div>
    </div>
  );
};

const GeminiImageText = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [cameraImage, setCameraImage] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const fileInputRef = useRef(null);
  const [isImagePresent, setIsImagePresent] = useState(false);
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [darkMode, setDarkMode] = useState(false);

  const defaultPrompts = [
    "Give me nutritional breakdown of this food (calories, protein, carbs, fats).",
    "Suggest if this food is good for muscle gain.",
    "Is this food suitable for a fat-loss diet?",
  ];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setCameraImage(null);
        setIsImagePresent(true);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setIsImagePresent(false);
      setCameraImage(null);
    }
  };

  const handleImagePresent = (isPresent) => {
    setIsImagePresent(isPresent);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setOutput("Generating...");
    setShowOutput(true);
    if (!imagePreview && !cameraImage) {
      setOutput("Please select or capture an image.");
      return;
    }
    try {
      let imageDataUrl = cameraImage || imagePreview;
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const contents = [
        {
          role: "user",
          parts: [
            { text: prompt || defaultPrompts[0] },
            {
              inlineData: {
                mimeType: imageDataUrl.startsWith("data:image/jpeg") ? "image/jpeg" : "image/png",
                data: imageDataUrl.split(",")[1],
              },
            },
          ],
        },
      ];
      const result = await model.generateContentStream({ contents });
      let buffer = [];
      for await (let response of result.stream) {
        buffer.push(response.text());
        setOutput(buffer.join(""));
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div
      className={`relative max-w-3xl mx-auto p-6 mt-8 rounded-xl shadow-lg transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-3 right-3 px-3 py-1 rounded-md shadow transition-colors ${
          darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-black hover:bg-gray-300"
        }`}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {showOutput ? (
        <div
          className={`w-full p-4 rounded-lg shadow mb-4 ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">AI Generated Output</h2>
            <button
              onClick={() => setShowOutput(false)}
              className="bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600"
            >
              Close
            </button>
          </div>
          <div
            className={`max-h-[220px] overflow-y-auto p-2 rounded text-sm ${
              darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-50 text-gray-700"
            }`}
          >
            <ReactMarkdown
              components={{
                ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                p: ({ node, ...props }) => <p className="mb-2" {...props} />,
              }}
            >
              {output}
            </ReactMarkdown>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl mb-4 font-bold text-center">Image Analysis</h1>

          <div className="flex flex-col md:flex-row items-start justify-center gap-4">
            <div
              className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-4 w-full md:w-1/3 shadow-md hover:border-blue-500 cursor-pointer ${
                darkMode ? "bg-gray-800 border-gray-600 text-gray-200" : "bg-white border-gray-400 text-gray-800"
              }`}
              onClick={() => fileInputRef.current?.click()}
            >
              <h3 className="text-base font-semibold mb-2">Upload Image</h3>
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Uploaded"
                    className="rounded-lg w-full max-w-xs h-40 object-cover shadow"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImagePreview(null);
                      setCameraImage(null);
                      setIsImagePresent(false);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              ) : (
                <>
                  <FaCloudUploadAlt
                    className={`text-5xl ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                  />
                  <span className="text-xs font-semibold text-center">Select an Image</span>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            <CameraComponent
              setImage={setCameraImage}
              setImagePreview={setImagePreview}
              onImagePresent={handleImagePresent}
              darkMode={darkMode}
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {defaultPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => setPrompt(p)}
                className="px-3 py-1.5 text-xs rounded-md bg-gray-200 hover:bg-blue-500 hover:text-white transition"
              >
                {p}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-3">
            <input
              type="text"
              name="prompt"
              placeholder="Enter your own prompt..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className={`border rounded-lg px-3 py-2 w-full text-sm ${
                darkMode ? "bg-gray-800 border-gray-600 text-gray-200 placeholder-gray-400" : "bg-white border-gray-300 text-gray-900"
              }`}
            />
            <button
              type="submit"
              className={`bg-blue-600 text-white p-2 rounded-lg flex items-center justify-center w-full mt-3 hover:bg-blue-700 transition-colors text-sm font-semibold ${
                !isImagePresent ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isImagePresent}
            >
              <FaPaperPlane className="mr-2" />
              Generate Analysis
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default GeminiImageText;
