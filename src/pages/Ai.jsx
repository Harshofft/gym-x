import React, { useEffect } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'
import GeminiImageText from '../components/models/main'

const Project = () => {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    return () => lenis.destroy()
  }, [])

  
  return (
    <div className='p-3'>
      <GeminiImageText/>
    </div>
  )
}

export default Project
