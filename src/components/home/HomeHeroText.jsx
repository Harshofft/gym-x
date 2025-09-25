import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[lausanne300] mt-72 lg:mt-0 pt-5 text-center">
      <div className="lg:text-[9vw] text-[12vw] flex justify-center items-center uppercase leading-[7vw] mb-[2vw]">
        Your excuses
      </div>
      <div className="lg:text-[9vw] text-[12vw] flex justify-center items-center uppercase leading-[7vw] mb-[2vw]">
        won’t
        <span className="inline-block h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden align-middle mx-[0.5vw]">
          <Video />
        </span>
      lift
      </div>
      <div className="lg:text-[9vw] text-[12vw] flex justify-center items-center uppercase leading-[8vw]">
        the weights.
      </div>
    </div>
  )
}

export default HomeHeroText
