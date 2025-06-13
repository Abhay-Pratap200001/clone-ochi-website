import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl rounded-l-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need zto raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className='w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#c7c75c]'>
        <div className='w-1/2'>
        <h1 className='text-7xl'>Our approach:</h1>
        <button className='flex uppercase px-10 gap-10 p-6 items-center bg-zinc-900 mt-10 rounded-full text-white'>Read More
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-2xl bg-[#bbd460]'></div>
      </div>
    </div>
  )
}

export default About

