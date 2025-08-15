import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummydata } from '../Data/data'
import Blurcircle from '../component/Blurcircle'
import toast, { Toaster } from 'react-hot-toast'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const SeatLayout = () => {
const handleProceed = () => {
  if (!selectedtime) {
    toast.error("Please select a time before booking.");
    return;
  }

  const bookingData = {
     movieId: show.movie.id, // yaha se le rahe hain
    movieName: show.movie.name, 
    date: new Date().toLocaleDateString(), // static or actual show date
    time: selectedtime,
    seats: selectedseat,
    total: selectedseat.length * 150, // Example price
  };

  localStorage.setItem("currentBooking", JSON.stringify(bookingData));
  navigate("/my-booking");
};
  const sampleDates = {
    Avalabeltimes: ["10:00 AM", "1:00 PM", "6:00 PM"]
  }

  const { id } = useParams()
  const [selectedseat, setSelectedseat] = useState([])
  const [selectedtime, setSelectedtime] = useState(null)
  const [show, setShow] = useState(null)
  const navigate = useNavigate()

  const getshow = async () => {
    const foundShow = dummydata.find(show => show.id === Number(id))
    if (foundShow) {
      setShow({
        movie: foundShow,
        datetime: sampleDates
      })
    }
  }

  // Toggle seat selection
  const toggleSeat = (seatId) => {
    setSelectedseat((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    )
  }

  // Generate seat rows
  const renderseats = (rowLabel, count = 9) => {
    return (
      <div key={rowLabel} className="flex gap-2 mb-2 justify-center sm:justify-start">
        <span className="w-6 font-semibold hidden sm:inline">{rowLabel}</span>
        {Array.from({ length: count }).map((_, idx) => {
          const seatId = `${rowLabel}${idx + 1}`
          const isSelected = selectedseat.includes(seatId)
          return (
            <button
              key={seatId}
              onClick={() => {
                if (!selectedtime) {
                  toast.error("Please select a time first")
                  return
                }
                toggleSeat(seatId)
              }}
              className={`flex items-center justify-center rounded border transition
                w-8 h-8 text-xs sm:w-10 sm:h-10 sm:text-sm
                ${!selectedtime
                  ? 'bg-gray-300 text-gray-500'
                  : isSelected
                  ? 'bg-primary text-white'
                  : 'bg-white text-black hover:bg-gray-200'
                }
              `}
            >
              {idx + 1}
            </button>
          )
        })}
      </div>
    )
  }

  useEffect(() => {
    getshow()
  }, [id])

  return show ? (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-16 mt-20 lg:px-40 py-6 md:py-10 gap-6">
      <Toaster position="top-center" />
      
      {/* Left side: Available times */}
      <div className="w-full md:w-60 bg-primary/10 border-primary/20 rounded-lg py-6 md:top-30 md:sticky">
        {Object.entries(show.datetime).map(([date, times]) => (
          <div key={date} className="mb-4">
            <p className="px-5 font-medium">{date}</p>
            <div className="flex flex-wrap gap-2 px-5 mt-1">
              {times.map((time, idx) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded border text-sm sm:text-base
                    ${selectedtime === time ? 'bg-primary text-white' : 'bg-white text-black'}
                  `}
                  onClick={() => {
                    setSelectedtime(time)
                    setSelectedseat([]) // reset seats when time changes
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right side: Seat layout */}
      <div className="relative flex-1 flex flex-col items-center">
        <Blurcircle top="-100px" left="-100px" />
        <Blurcircle bottom="0px" right="0px" />
        <h1 className="text-lg sm:text-2xl font-bold mb-6">Select your seat</h1>

        {/* SCREEN INDICATOR */}
        <div className="w-full flex justify-center mb-6">
          <div className="bg-gray-300 h-4 w-3/4 sm:w-2/3 rounded-t-lg shadow-md relative">
            <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-600 text-xs sm:text-sm font-medium">
              SCREEN THIS WAY
            </p>
          </div>
        </div>

        {/* Seats */}
        <div className="bg-primary/5 p-4 sm:p-6 rounded-lg overflow-x-auto">
          {renderseats("A")}
          {renderseats("B")}
          {renderseats("C")}
          {renderseats("D")}
          {renderseats("E")}
        </div>

        {selectedseat.length > 0 && (
          <p className="mt-4 font-medium text-sm sm:text-base">
            Selected Seats: {selectedseat.join(", ")}
          </p>
        )}
        {
          selectedseat.length >0 &&(
                      <button onClick={handleProceed} className='py-3 px-2 bg-primary rounded-md flex flex-row mt-10'>Proceed to checkout <ArrowRight/></button>
          )
        }
      </div>
      
      
    </div>
    
  ) : (
    <h1>Loading...</h1>
  )
}

export default SeatLayout
