import React, { useState } from 'react'
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Signup() {

    const[email, setEmail]=useState('')
    const[password, setpassword]=useState('')
    const[error, seterror]=useState('')

    const {createUser}=UserAuth()

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        seterror('')
        try{
             createUser(email, password);
             navigate("/")
             toast.success("Successfully Signed in ")
        } catch {
            seterror(error);
            console.log(error)
            toast.error(" Try again")
    }
    };
  return (
    <>
    <div className=' w-full h-screen'>
        <img className=' hidden sm:block absolute w-full h-full object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-S-U0RL4LqraNKZ4H_wrM_8sujPDcv_Dy_bu0og2&s' alt='error'/>
        <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen mb-5'></div>
        <div className=' fixed w-full px-4 py-24 z-50'>
            <div className=' max-w-[450px] h-[600px] mx-auto  bg-black/75 text-white'>
                <div className=' max-w-[520px] mx-auto py-16'>
                    <h1 className=' text-3xl font-bold'> Sign In</h1>

                    <form className=' flex flex-col ml-5 mr-5' onSubmit={handleSubmit}>
                        <input  className=' p-3 my-2 bg-gray-700 rounded' type='email'
                        placeholder='Email'
                        autoComplete='email'
                        onChange={(e)=> setEmail(e.target.value)}
                        required/>
                         <input className=' p-3 my-2 bg-gray-700 rounded' type='password'
                        placeholder='password'
                        autoComplete='current-password'
                        onChange={(e)=>{setpassword(e.target.value)}} required/>
                        <button className=' bg-red-600 py-3 my-6 rounded font-bold'> Sign Up</button>

                        <div className=' flex flex-col justify-between items-center text-sm text-gray-600'>
                            <p>
                                <input type="checkbox" className=' mr-2'/>
                                Remember me
                            </p>
                            <p> Need help</p>
                        </div>
                        <p className=''></p>
                    </form>

                </div>
            </div>
        </div>

      
    </div>
    </>
  )
}

export default Signup
