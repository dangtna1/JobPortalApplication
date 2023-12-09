import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <div className="w-full flex mt-[15vh]">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout