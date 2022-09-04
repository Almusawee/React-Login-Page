import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import {faFacebook, FaLinkedinIn, FaGoogle} from 'react-icons/fa'


function App() {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200'>
      <div  className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 '>
        <SignIn  />
        <SignUp  />
      </div>
      </div> 
      </div> 
    );
  }

export default App
