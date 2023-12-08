import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import CustomMenu from './CustomMenu';
import { useMediaQuery } from '@mui/material';

const Header = () => {
    const isSm = useMediaQuery('(min-width:600px)');
    const location = useLocation();
    const [tab, setTab] = useState(location.pathname.split("/")[1] === "" ? "home" : location.pathname.split("/")[1]);
    useEffect(() => {
        setTab(location.pathname.split("/")[1] === "" ? "home" : location.pathname.split("/")[1]);
    }, [location]);
    return (
        <div className='fixed top-0 w-full bg-gradient-to-r from-[#000000] from-50% to-[#990033] to-100% h-[15vh] text-white flex'>
            <div className='text-3xl h-[100%] flex flex-col justify-center px-3'>
                <Link to="home" className='select-none'>
                    <span className='bg-red-600 py-3 px-1 rounded-full'>Job</span>
                    <span>Portal</span>
                </Link>
            </div>
            {
                isSm ?
                    (<div className='w-2/3 flex items-end text-xl justify-center'>
                        <div className='w-full sm:w-[90%] lg:w-[70%] flex items-end text-xl justify-between'>
                            <Link to="home">
                                <div className={`${tab === "home" ? "border-b-4 border-red-600 px-2 rounded-t-xl text-red-600" : "bg-none text-white"} font-semibold cursor-pointer select-none`}
                                >
                                    Home
                                </div>
                            </Link>
                            <Link to="company">
                                <div className={`${tab === "company" ? "border-b-4 border-red-600 px-2 rounded-t-xl text-red-600" : "bg-none text-white"} font-semibold cursor-pointer select-none`}
                                >
                                    Company
                                </div>
                            </Link>
                            <Link to="jobseeker">
                                <div className={`${tab === "jobseeker" ? "border-b-4 border-red-600 px-2 rounded-t-xl text-red-600" : "bg-none text-white"} font-semibold cursor-pointer select-none`}
                                >
                                    Job Seeker
                                </div>
                            </Link>
                        </div>
                    </div>) :
                    (<div className='w-full flex justify-end items-center'>
                        <CustomMenu />
                    </div>)
            }

        </div>
    )
}

export default Header