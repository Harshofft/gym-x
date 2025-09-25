import React from 'react'
import BlogCard from '../components/blog/BlogCard'

function Blog() {

  const imageArray = [
      {
        image1: "https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif",
        image2: "https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png"
      }
  ]

  const data = [
    {
      date: "9 mai 2025",
      heading: "Conseil & relation client: un duo qui ne se briefe pas, qui se construit"
    },
    {
      date: "9 mai 2025",
      heading: "Conseil & relation client: un duo qui ne se briefe pas, qui se construit"
    }
  ]

  return (
   <div className='p-3'>
      <div className='-mt-10 increase pt-[30vw]  '>
        <div className='border-t-1 border-black pt-2 flex flex-col'>
        {imageArray.map((elem, index) => (
          <div key={index} className='hero w-full rounded-2xl h-[500px] mb-2 flex gap-2.5'>
            <BlogCard image1={elem.image1} image2={elem.image2} />
          </div>
          
        ))}
        
        </div>
       <div className='flex w-full'>
         {data.map((val, el) => (
              <div key={el} className="blog-info text-black flex flex-col w-full">
                <p className="date">{val.date}</p>
                <h2 className="heading">{val.heading}</h2>
              </div>
            ))}
       </div>
      </div>
    </div>
  )
}

export default Blog
