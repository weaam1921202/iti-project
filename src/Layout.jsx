import React from 'react'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Nav />
        <Outlet />
        <Footer />
            
        </>
    )
}

export default Layout
