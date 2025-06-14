import React from 'react'
import { Sun } from 'lucide-react'
import { Outlet } from 'react-router'
import Main from '../../components/main/Main'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

function MainLayout() {
  return (
    <div className='h-screen p-0 m-0 relative flex '>

      
      <Sidebar/>
      <div className='flex flex-col w-[85%]'>
        <Topbar/>
        <Main/>
      </div>
      
      <Sun className='absolute bottom-3 right-3'/>

    </div>
  )
}

export default MainLayout