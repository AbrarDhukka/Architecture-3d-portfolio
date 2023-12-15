/* eslint-disable no-unused-vars */
import React from 'react'
import Bunglow1Canvas from './canvas/Bunglow1'
import Bunglow2Canvas from './canvas/Bunglow2'

const Projects = () => {
  return (
    <div className='flex flex-wrap w-[1200px] gap-8 justify-between items-center mt-14'>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'><Bunglow1Canvas></Bunglow1Canvas></div>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'><Bunglow2Canvas></Bunglow2Canvas></div>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'></div>
    <div className='w-[46%] h-[550px] bg-slate-200 rounded-3xl'></div>

    </div>
  )
}

export default Projects