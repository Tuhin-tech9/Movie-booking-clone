import React from 'react'

const Blurcircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
  return (
    <div
      className='absolute -z-50 h-56 w-56 aspect-square rounded-full bg-blue-500/30 blur-2xl'
      style={{ top, left, right, bottom }}
    ></div>
  )
}

export default Blurcircle