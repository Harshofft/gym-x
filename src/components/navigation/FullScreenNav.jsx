import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../context/NavContext'
import { NavbarColorContext } from '../context/NavContext'
import { useNavigate } from 'react-router-dom'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const navigate = useNavigate()

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }
    
    const handleNavigation = (path) => {
        setNavOpen(false);
        navigate(path);
    };

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-3 p-2 items-start">
                    <div className=''>
                        <div className='lg:w-29 w-24'>
                           <div className="lg:w-49 w-24">
                            <h1 className='text-4xl font-[lausanne500] uppercase text-white'>Gym Buddy</h1>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-20 h-16 w-21 lg:w-26 relative cursor-pointer '>
                        <div className='lg:h-36 h-28 lg:w-0.5 w-0.5 -rotate-45 origin-top absolute transition-all bg-white hover:bg-[#D3FD50]'></div>
                        <div className='lg:h-36 h-28 lg:w-0.5 w-0.5 right-0 rotate-45 origin-top absolute transition-all bg-white hover:bg-[#D3FD50]'></div>
                    </div>
                </div>
                <div className='py-8'>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[lausanne500] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Projets</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] ' onClick={() => handleNavigation("/project")}>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[lausanne500] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-5 pt-3 uppercase'>Agence</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] '  onClick={() => handleNavigation("/agence")}>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-t-1 border-white'>
                        <h1 className='font-[lausanne500] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-5 pt-3 uppercase'>Contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50] '  onClick={() => handleNavigation("/contact")}>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top relative border-y-1 border-white'>
                        <h1 className='font-[lausanne500] text-5xl lg:text-[8vw] text-center lg:leading-[0.8] lg:pt-5 pt-3 uppercase'>Blogs</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'  onClick={() => handleNavigation("/blogs")}>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[lausanne500] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase'>Pour Tout voir</h2>
                                <img className='lg:h-22 h-10 rounded-full shrink-0 lg:w-60 w-30 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav