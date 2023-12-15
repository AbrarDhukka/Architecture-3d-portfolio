/* eslint-disable no-unused-vars */
import React from 'react'
import Bunglow1Canvas from './canvas/Bunglow1'
import Bunglow2Canvas from './canvas/Bunglow2'

const Projects = () => {
  return (
    <div className='flex flex-wrap w-[1200px] gap-8 justify-between items-center mt-16'>
    <div className='flex flex-col items-center gap-2 m-auto'>
        <p className="text-gray-800 text-center font-DM-Serif-Display text-5xl font-normal leading-5 tracking-wide" style={{ lineHeight: '125%', letterSpacing: '1px' }}>Follow Our Projects</p>
        <p className="text-gray-700 text-center font-Jost text-lg font-normal leading-6 tracking-tight w-[737px] mb-8" style={{ letterSpacing: '0.22px' }}>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
    </div>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'><Bunglow1Canvas></Bunglow1Canvas></div>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'><Bunglow2Canvas></Bunglow2Canvas></div>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'></div>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'></div>

    </div>
  )
}

export default Projects