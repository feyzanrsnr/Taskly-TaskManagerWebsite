import React from 'react'
import { Sun, Github, Linkedin } from 'lucide-react'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div className='h-screen p-3 m-0 relative'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl'>Taskly</h1>
        <Sun/>
      </div>
      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[70%] bg-[very-dark-blue] shadow-2xl'>
        <Outlet/>
      </div>
      <footer className='flex absolute bottom-3'>
        <Github/>
        <Linkedin/>
      </footer>
      
    </div>
  )
}

export default AuthLayout