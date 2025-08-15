import { TvMinimalPlay } from 'lucide-react'
import React from 'react'

const Adminnavbar = () => {
  return (
    
    <div className='pt-7 px-18 h-16 flex items-center justify-between border-b max-md:px-7 border-gray-300'>
       <div className='flex flex-row items-center space-x-2 mb-6'>
        <div className='bg-white/10 px-2 py-2 rounded-full'>
         
            <TvMinimalPlay  />
          
      

        </div>
        <p>CINEVERSE</p>
        </div>
    </div>
  )
}

export default Adminnavbar