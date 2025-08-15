import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummydata } from '../Data/data'
import Blurcircle from '../component/Blurcircle'
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react'
import Dateselect from '../component/Dateselect'
import Moviecard from '../component/Moviecard'

const MovieDeatails = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)
  const dateRef = useRef(null) // <-- step 1: create ref

  const sampleDates = {
    "2025-08-01": {},
    "2025-08-02": {},
    "2025-08-03": {},
    "2025-09-04": {}
  }

  useEffect(() => {
    const found = dummydata.find(movie => movie.id === Number(id))
    setShow(found || null)
  }, [id])

  const scrollToDateSection = () => {
    if (dateRef.current) {
      dateRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto'>
        <img
          src={show.image}
          alt=""
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />

        <div className='relative flex flex-col items-center gap-3 pt-20'>
          <Blurcircle top='-100px' left='-100px' />
          <p className='text-white mr-70 max-md:mr-40'>ENGLISH</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance max-md:mx-auto'>
            {show.title}
          </h1>

          <div className='flex items-center gap-2 mr-75 max-md:mr-40'>
            <StarIcon className='fill-amber-300' />
            <p className='text-white font-medium'>{show.rating}</p>
          </div>

          <p className='flex items-center text-white font-medium mr-50 max-md:mr-10'>{show.genre}</p>
          <p className='mr-76 max-md:mr-40'>{show.duration}</p>

          <div className='grid grid-cols-1 gap-4 mt-4 max-md:mr-35 mr-46'>
            <button
              onClick={() => setIsTrailerOpen(true)}
              className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 rounded-md font-medium cursor-pointer active:scale-95'
            >
              <PlayCircleIcon /> WATCH TRAILER
            </button>

           
            <button
              onClick={scrollToDateSection}
              className='px-7 py-3 bg-rose-500 text-white rounded cursor-pointer'
            >
              BUY TICKETS
            </button>

            <button className='flex items-center gap-2 text-white'>
              <Heart className='w-5 h-5' />
              <p>ADD TO FAVORITE</p>
            </button>
          </div>

          
          <div ref={dateRef}>
            <Dateselect datetime={sampleDates} movieId={show.id} />
          </div>
                 

        
        </div>
      </div>

      {/* Trailer Modal */}
      {isTrailerOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
          <div className='relative w-full max-w-3xl aspect-video'>
            <iframe
              className='w-full h-full rounded-lg'
              src={`https://www.youtube.com/embed/${show.trailerId}?autoplay=1`}
              title="YouTube trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsTrailerOpen(false)}
              className='absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-lg font-bold'
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div>
      <h1>Loading ...</h1>
    </div>
  )
}

export default MovieDeatails
