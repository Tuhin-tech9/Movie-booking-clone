import React, { useEffect, useState } from "react";
import { dummydata } from "../Data/data";
import { useNavigate } from "react-router-dom";

const Mybbokin = () => {
  const navigate=useNavigate()
  const currency = import.meta.env.VITE_CURRECNCY;
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem("currentBooking");
    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));
    }
  }, []);

  if (!booking) {
    return <p className="mt-20 text-center">No current bookings.</p>;
  }

  // Find movie details from dummydata
  const movieDetails = dummydata.find(
    (m) => m.name === booking.movie || m.id === booking.movieId
  );

  return (
    <div className="mt-20 max-w-lg mx-auto text-white pt-20 p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">My Booking</h1>
      
      <p>🎬 Movie: {movieDetails ? movieDetails.name : booking.movie}</p>
      <p>⏳ Duration: {movieDetails ? movieDetails.duration : "N/A"}</p>
      <p>📅 Date: {booking.date}</p>
      <p>🕒 Time: {booking.time}</p>
      <p>💺 Seats: {booking.seats.join(", ")}</p>
      <p>
        💰 Total: {currency} {booking.total}
      </p>
      <button onClick={()=>navigate("/payment")} className="mt-10 rounded-full py-3 px-2 bg-primary">Payment</button>
    </div>
  );
};

export default Mybbokin;
