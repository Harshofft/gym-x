import React from "react";

function Contact() {
  return (
    <div className=" bg-black h-screen w-full">
      <div className="font-[lausanne300] mt-72 lg:mt-0 pt-4 text-center leading-[8.5vw]">
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase  ">
          Pour
        </div>
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase  ">
          parler de
        </div>
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase  ">
          votre
        </div>
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase ">
          projet
        </div>
      </div>

       <div className='link origin-top relative  rotate-5 mt-10'>
            <div className='moveLinkContact absolute text-black flex top-0 bg-[#D3FD50] hover:bg-white' >
                <div className='moveXContact flex items-center'>
                    <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>bonjour@k72</h2>
                    <img className='lg:h-32 mx-8 h-10 rounded-full shrink-0 lg:w-25 w-30 object-cover' src="https://static.thenounproject.com/png/heart-icon-10659-512.png" alt="" />
                    <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>bonjour@k72</h2>
                    <img className='lg:h-32 mx-8 h-10 rounded-full shrink-0 lg:w-25 w-30 object-cover' src="https://static.thenounproject.com/png/heart-icon-10659-512.png" alt="" />
                </div>
                <div className='moveXContact flex items-center'>
                    <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>bonjour@k72</h2>
                    <img className='lg:h-32 mx-8 h-10 rounded-full shrink-0 lg:w-25 w-30 object-cover' src="https://static.thenounproject.com/png/heart-icon-10659-512.png" alt="" />
                    <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>bonjour@k72</h2>
                    <img className='lg:h-32 mx-8 h-10 rounded-full shrink-0 lg:w-25 w-30 object-cover' src="https://static.thenounproject.com/png/heart-icon-10659-512.png" alt="" />
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Contact;
