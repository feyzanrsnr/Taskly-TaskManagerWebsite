import React from 'react'
import NavigationMenu from '../navigation-menu/NavigationMenu'

function Sidebar() {
  return (
    <div className='border-r-[white] border-r-1
      w-[15%] h-[100%] pt-3'>
      <h1 className='text-3xl text-center'>Taskly</h1>
      <NavigationMenu/>
    </div>
  )
}

export default Sidebar