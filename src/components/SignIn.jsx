import React from 'react'
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md'



function SignIn(){
  return (<div className='w-3/5 p-5'>
    <div className='text-left font-bold'><span className='text-green-500'>Company</span> Name</div>
    <div className='py-10'>
      <h2 className='text-2xl font-bold text-green-500 underline underline-offset-8'>Sign in to your account</h2>
      <div className='flex justify-center my-2'>
        <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
          <FaFacebook className='text-sm ' />
        </a>
        <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
          <FaLinkedinIn className='text-sm ' />
        </a>
        <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
          <FaGoogle className='text-sm ' />
        </a>
      </div>
      <p className='text-gray-200 '>or use your email </p>
      <div className='flex flex-col items-center'>
        <div className='bg-gray-200 w-64 p-2 flex items-center mb-3 ' >
          <FaRegEnvelope className='text-gray-400 m-2' />
          <input type="email" name="email" placeholder='' className='bg-gray-200 outline-none flex-1' />
        </div>
        <div className='bg-gray-200 w-64 p-2 flex items-center mb-3' >
          <MdLockOutline className='text-gray-400 m-2' />
          <input type="password" name="password" placeholder='' className='bg-gray-200 outline-none flex-1' />
        </div>
       
        <div className='flex w-64 m-5 justify-between  '>
          <label htmlFor=""  className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1' />Remember me</label>
          <a href="#" className='text-xs '>Forgot Password</a>
          
        </div>
        <a href="#" className='border-2 border-green-500 text-green-500 rounded-full px-12 py-1 inline-block font-semibold hover:bg-green-500 hover:text-white'>Sign In</a>
        <p className='font-mono'>Designed by <strong>Almusawee</strong></p>
      </div>
    </div>
    </div>);
}

export default SignIn