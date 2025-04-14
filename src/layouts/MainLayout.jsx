import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterDarkTheme from "../components/Footer"

function MainLayout() {
  return (
    <div className='flex items-center justify-center flex-col '>
        <Navbar/>
        <main className='overflow-y-auto mb-20'>
            <Outlet/>
        </main>
        <FooterDarkTheme/>
    </div>
  )
}

export default MainLayout;
