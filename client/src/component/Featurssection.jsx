import React from 'react'
import Blurcircle from './Blurcircle'
import { useNavigate } from 'react-router-dom'
import Moviecard from './Moviecard'

const Featurssection = () => {
    const navigate= useNavigate()
  return (
    <div className=' px-6  md:px-16 lg:px-24 xl:px-34 overflow-hidden'>
        <div className='flex relative items-center justify-between pt-20 pb-10'>
           <Blurcircle top="0" right="0" />
            <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
            <button className='flex items-center gap-2 text-sm text-gray-300'>View All</button>
        </div>
        <div>
          <Moviecard/>
        </div>
        <div className='flex justify-center mt-20'>
            <button onClick={()=> navigate("/movies")} className='text-sm px-10 py-3 bg-white/10 hover:rounded-full cursor-pointer'>Show More</button>
           
        </div>
    </div>
  )
}

export default Featurssection