import React from 'react'

import Moviecard from '../component/Moviecard'
import { dummydata } from '../Data/data'
import Blurcircle from '../component/Blurcircle'

const Movie = () => {
  return dummydata.length>0 ? (
    <div className=' relative pt-37 pb-20 min-h-screen px-4'>
      <Blurcircle top='150px' left='0%'/>
      <Blurcircle bottom='250px' right='30px'/>
      <h1 className='lg:text-2xl font-semibold lg:ml-7 mb-9 max-md:mb-6 max-md:px-10'> NOW SHOWING</h1>
      <div>
        <Moviecard/>
      </div>
    </div>
  ):(
    <div className='pt-30 px-10 min-h-screen flex items-center justify-center '>
       <h1 className='text-3xl'>No Movies avialabel</h1>
    </div>
  )
}

export default Movie