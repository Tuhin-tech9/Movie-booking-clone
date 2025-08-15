import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UserIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Blurcircle from '../../component/Blurcircle'
import Moviecard from '../../component/Moviecard'

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$"

  const [dashboarddata, setdashboarddata] = useState({
    totalBookings: 0,
    totalRevnue: 0,
    activeShow: [],
    totalUesr: 0
  })
  const [loading, setloading] = useState(true)

  // Mock data fetch simulation
  useEffect(() => {
    setTimeout(() => {
      setdashboarddata({
        totalBookings: 128,
        totalRevnue: 45230, // in your currency
        activeShow: ["Avengers: Endgame", "Oppenheimer", "Barbie"],
        totalUesr: 356
      })
      setloading(false)
    }, 1000)
  }, [])

  const dashBoardcard = [
    {
      titel: "Total Bookings",
      value: dashboarddata.totalBookings,
      icon: ChartLineIcon
    },
    {
      titel: "Total Revenue",
      value: `${currency}${dashboarddata.totalRevnue.toLocaleString()}`,
      icon: CircleDollarSignIcon
    },
    {
      titel: "Active Show",
      value: dashboarddata.activeShow.length,
      icon: PlayCircleIcon
    },
    {
      titel: "Total User",
      value: dashboarddata.totalUesr,
      icon: UserIcon
    }
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {loading ? (
        <p>Loading dashboard data...</p>
      ) : (
        dashBoardcard.map((card, index) => (
          <div
            key={index}
            className='p-4 bg-white/10  rounded-xl shadow flex items-center gap-4'
          >
            {/* <Blurcircle top='100px' right='-100px'/> */}
            <card.icon size={40} className='text-primary' />
            <div>
              <p className='text-gray-500 text-sm'>{card.titel}</p>
              <p className='text-xl font-bold'>{card.value}</p>
            </div>
          </div>
        ))
      )}
     <p className='mt-10 text-base font-semibold col-span-4'>Active Shows</p>


    </div>
  )
}

export default Dashboard
