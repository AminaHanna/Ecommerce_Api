import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="h-[100vh] w-[100%] m-auto">
        <div className="">
            <Header/>
        </div>

        <div className="pt-24">
            <Outlet/>
        </div>

      </div>
    </>
  )
}

export default Layout
