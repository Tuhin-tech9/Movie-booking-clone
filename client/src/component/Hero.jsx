import { Calendar1Icon, ClockIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-start justify-center  gap-4 px-6 md:px-16 lg:px-30 bg-[url("/image/hero9.jpg")] bg-cover bg-center h-screen'>
     
     <h1 className='text-5xl md:font-semibold md:text-[70px] max-w-110 md:lesding-18 text-center'>
        BATMAN <br/>VS<br/>
         JOKER
     </h1>
     <div className='flex items-center gap-4 text-gray-300 lg:ml-7'>
        <span>ACTION | SCIFI | THRILLER</span>

     </div>
     <h1 className='ml-9 font-semibold '>NOW IN CINEMA</h1>
     <div className='flex items-center gap-2 ml-7'>
        <Calendar1Icon className='w-8 h-6'/>2025
     </div>
     <div className='flex items-center gap-2 ml-7'>
        <ClockIcon className='w-8 h-6'/>2h 30m
     </div>
     <button onClick={()=>navigate("/movies")} className='px-6 py-3 text-sm bg-white/10 rounded-full cursor-pointer '>
        EXPLORE OTHER MOVIES 
        
     </button>
    </div>
  )
}

export default Hero