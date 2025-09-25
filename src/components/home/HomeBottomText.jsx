import React from 'react'
import { Link } from 'react-router-dom'


const HomeBottomText = () => {
  return (
    <div className='font-[lausanne500] gap-2 flex justify-center items-center  font-bold'>
      <div className='border-2 rounded-full px-8 pb-0 hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[5vw] uppercase' to='/project'>Diet</Link>
      </div>
      <div className='border-2 rounded-full px-10 hover:border-[#D3FD50]  hover:text-[#D3FD50]'>
        <Link className='text-[5vw] uppercase' to='/agence'>Workout</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
