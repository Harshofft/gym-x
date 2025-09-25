import React from 'react'

function BlogCard(props) {
  return (
    <>
        <div className='w-1/2 group h-full transition-all relative  overflow-hidden rounded-[52px]'>
        <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            </div>
        </div>
        <div className='w-1/2 group h-full transition-all relative overflow-hidden rounded-[52px]'>
        <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
            </div>
        </div>

    </>
  )
}

export default BlogCard
