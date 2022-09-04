import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200' />
  </React.StrictMode>
)
