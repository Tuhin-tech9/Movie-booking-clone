import React, { useState } from 'react'
import Blurcircle from './Blurcircle'
import toast from 'react-hot-toast'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Dateselect = ({ datetime ,movieId}) => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  const bookif = () => {
    if (!selected) return toast('Please select a date')
    navigate(`/movies/${movieId}/${selected}`)  // Fixed URL parameter format
  }

  return (
    <div id="dateselect" className="pt-10 px-4">
      <div className="relative p-6 md:p-8 bg-primary/10 rounded-lg border border-primary/20">
        <Blurcircle top="-100px" left="-100px" />
        <Blurcircle top="100px" right="0px" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Choose Date</p>
            <div className="flex items-center gap-4 mt-4">
              <ChevronLeftIcon width={28} />

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {Object.keys(datetime || {}).map((date) => (
                  <button
                    onClick={() => setSelected(date)}
                    key={date}
                    className={`flex flex-col items-center justify-center h-14 w-14 rounded cursor-pointer text-sm ${
                      selected === date
                        ? 'bg-primary text-white'
                        : 'border border-primary/70'
                    }`}
                  >
                    <span>{new Date(date).getDate()}</span>
                    <span>{new Date(date).toLocaleDateString('en-us', { month: 'short' })}</span>
                  </button>
                ))}
              </div>

              <ChevronRightIcon width={28} />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              className="px-6 py-3 mt-4 md:mt-0 text-white rounded bg-rose-500 hover:bg-rose-600 transition"
              onClick={bookif}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dateselect
