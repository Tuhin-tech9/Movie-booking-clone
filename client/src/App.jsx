import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDeatails from './pages/MovieDeatails'
import SeatLayout from './pages/SeatLayout'
import Mybbokin from './pages/Mybbokin'
import Favorite from './pages/Favorite'
import {Toaster} from  'react-hot-toast'
import Footer from './component/Footer'
import Payment from './pages/Payment'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Addshow from './pages/admin/Addshow'
import Listshow from './pages/admin/Listshow'
import Listbooking from './pages/admin/Listbooking'

const App = () => {
  const isAdminroute= useLocation().pathname.startsWith('/admin')
  return (
   <>
   <Toaster/>
   {!isAdminroute &&<Navbar/>}
  
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movie/>}/>
    <Route path='/movies' element={<Movie/>}/>
    <Route path="/movies/:id" element={<MovieDeatails />} />
    <Route path="/movies/:id/:date" element={<SeatLayout />}/>
     <Route path='/my-booking' element={<Mybbokin/>}/>
     <Route path='/favorite' element={<Favorite/>}/>
     <Route path='/payment' element={<Payment/>} />
   <Route path="/admin" element={<Layout />}>
    <Route index element={<Dashboard />} /> 
    <Route path="add-show" element={<Addshow />} />
    <Route path="list-show" element={<Listshow />} />
    <Route path="list-booking" element={<Listbooking />} />
  </Route>
   </Routes>
    {!isAdminroute &&<Footer/>}
   </>
  )
}

export default App