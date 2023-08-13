import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' flex items-center justify-between p-4 z-[100] absolute w-full'>
      
        <h1 className=' text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
          <Link to="/login">
            <button className=' text-white px-4'>Login</button></Link>
            <Link to="/signin">
            <button className=' text-white bg-red-600 rounded cursor-pointer px-6 py-2'> Sign In</button></Link>
        </div>
      
    </div>
  )
}

export default Navbar
