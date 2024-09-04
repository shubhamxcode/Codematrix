import React from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Fotter from './components/Footer/Fotter'
import { Outlet } from 'react-router'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Fotter/>
    </>
  )
}

export default Layout