import React, { useContext, useRef, useEffect } from 'react'
import { NavbarColorContext, NavbarContext } from '../context/NavContext'
import gsap from 'gsap'

const Navbar = () => {
    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor] = useContext(NavbarColorContext)

    const handleMouseEnter = () => {
        gsap.to(navGreenRef.current, { height: '100%', duration: 0.4, ease: 'power2.out' })
    }

    const handleMouseLeave = () => {
        gsap.to(navGreenRef.current, { height: '0%', duration: 0.4, ease: 'power2.out' })
    }

    return (
        <div className='z-50 flex fixed top-0 w-full items-start justify-between'>
            <div className='lg:p-2.5 '>
               <div className="lg:w-49 w-24">
                <h1 className='text-3xl font-[lausanne500] uppercase text-white'>Fit <br /> Buddy</h1>
                </div>
            </div>

            <div 
                onClick={() => setNavOpen(true)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48 cursor-pointer'
            >
                <div ref={navGreenRef} className='bg-[#D3FD50] absolute top-0 h-0 w-full'></div>
                <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                    <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                    <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
