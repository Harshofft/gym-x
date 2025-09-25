import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../context/NavContext'

const DesignNavbar = () => {
  const navGreenRef = useRef(null)
const [navOpen,setNavOpen] = useContext(NavbarContext)
const [navColor, setNavColor] = useContext(NavbarColorContext)
  
  return (   
    <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
            <div className='lg:p-2.5 '>
                <div className='lg:w-29 w-24'>
                    <div className="lg:w-49 w-24">
                <h1 className='text-[50px] font-[lausanne500] uppercase '>Gym Buddy</h1>
                </div>
                </div>
            </div>
             <div className='lg:h-25 h-10 bg-black relative lg:w-[35vw] w-80'></div>
            <div onClick={()=>{
                setNavOpen(true)
            }} onMouseEnter={() => {
                navGreenRef.current.style.height = '100%'
            }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='lg:h-35 h-10 bg-black relative lg:w-[16vw] w-48'>
                   
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                    <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                    <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
  )
}

export default DesignNavbar
