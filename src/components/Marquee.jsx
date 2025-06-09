import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
   
  return (
    <div className='w-full py-15 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex -gap-10 overflow-hidden whitespace-nowrap'>
        <h1 className='text-[20vw] leading-none font-["Test Founders Grotesk X-Cond Bold"]  
        uppercase pt-6  mb-[2vw] font-semibold'>we are ochi</h1>
        <h1 className='text-[20vw] leading-none font-["Test Founders Grotesk X-Cond Bold"] 
         uppercase pt-6  mb-[2vw] font-semibold'>we are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee

// marque section has completed is is section where is written we are ochi and which is running