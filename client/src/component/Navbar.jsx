import { SignInButton,  UserButton, useUser } from '@clerk/clerk-react'
import { MenuIcon, SearchIcon, TicketIcon, TicketPlus, TvMinimalPlay, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isopen, setopen] = useState(false)
  const {user}=useUser()
 
  const navigate=useNavigate()
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-7 '>
      <div className='flex flex-row items-center space-x-2'>
        <div className='bg-white/10 px-2 py-2 rounded-full'>
         
            <TvMinimalPlay  />
      

        </div>
        <h1 className='text-2xl uppercase tracking-[1px] '>CINEVERSE</h1>
      </div>
    <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 min-md:py-6 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isopen?"max-md:w-full":"max-md:w-0"}`}>
        <XIcon className='md:hidden  absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={()=>setopen(false)}/>
        <Link onClick={()=>{scrollTo(0,0); setopen(false)}} to={'/'}>Home</Link>
        <Link onClick={()=>{scrollTo(0,0); setopen(false)}} to={'/movies'}>Movies</Link>
        <Link onClick={()=>{scrollTo(0,0); setopen(false)}} to={'/'}>Theaters</Link>
        <Link onClick={()=>{scrollTo(0,0); setopen(false)}} to={'/'}>Relases</Link>
        <Link onClick={()=>{scrollTo(0,0); setopen(false)}} to={'/favorite'}>Favorite</Link>
      </div>
      <div>
        <SearchIcon className='max-md:ml-4  w-8 h-6 max-md:hidden' />
      </div>
     {/* {
  !user ? (
    <button
      onClick={openSignin} // <-- fix here
      className='px-3 py-3 bg-red-500 rounded-md font-medium active:bg-rose-800 cursor-pointer max-md:px-2 max-md:py-2  max-md:mr-[-30px]  max-md:rounded-full'
    >
      Login
    </button>
  ) : (
    <UserButton/>
  )
} */}
   {
    !user?(<SignInButton />):(
     <UserButton>
  <UserButton.MenuItems>
    <UserButton.Action label='my bookings' labelIcon={<TicketPlus width={15}/>} onClick={()=>navigate("/my-booking")}/>
  </UserButton.MenuItems>
</UserButton>
    )
   }
      <MenuIcon className='max-md:ml-4 w-8 h-8 md:hidden cursor-pointer' onClick={()=> setopen(true)} />
    </div>
  )
}

export default Navbar