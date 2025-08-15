import React from 'react'
import { dummydata } from '../Data/data'
import { StarIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Moviecard = () => {
    const navigate=useNavigate()
  return (
    <div className= 'grid grid-cols-1  items-center xl:grid-cols-3 xl:gap-10 xl:my-auto md:grid-cols-1 max-md: space-y-7 p-3 bg-black/10 rounded-2xl hover:translate-y-1 transition duration-300 w-full min-h-screen max-md:mx-auto'>
     {
        dummydata.map((movie)=>{
          return(
            <div key={movie.id}>
           <img src={movie.image} alt="" className=" rounded-lg h-full w-full object-cover cursor-pointer"/>
            <h1 className='pt-5 text-gray-200 font-bold'>{movie.title}</h1>
            <p className='text-gray-400'>{movie.genre}</p>
           <div className='flex items-center justify-between mt-3'>
            <button className='px-3 py-2 bg-rose-500 cursor-pointer font-medium text-xs' onClick={()=>navigate(`/movies/${movie.id}`)}>
                BooK now
            </button>
           <div className='flex flex-row items-center space-x-1'>
              <StarIcon className='fill-amber-600 '/>
             <p>{movie.rating}</p>
           </div>
           </div>
          </div>
          )
        })
     }
    </div>
  )
}

export default Moviecard