import { Divider } from '@mui/material'
import React from 'react'

const CompanyProfile = () => {
    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <div className='w-full bg-gradient-to-r from-[#000000] from-50% to-[#990033] to-100% h-[20vh] text-white flex justify-center'>
                <div className='flex w-10/12 items-center'>
                    <div className=' flex gap-2 '>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png"
                            alt="404" className='h-[10vh]' />
                        <div>
                            <p className=' text-2xl font-sans font-bold'>A Company</p>
                            <p>District 1, Ho Chi Minh</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[95%] sm:w-[80%] border shadow-lg p-8  rounded-lg '>
                <p className='text-xl'>Overview</p>
                <Divider style={{ marginTop: "8px" }} />
                <p>"L.G. Corporation" or simply "LG" refers to the South Korean multinational conglomerate corporation. LG operates various subsidiaries and divisions, including LG Electronics, LG Display, LG Chem, LG Uplus, LG Innotek, LG Hausys, and more.</p>
            </div>
            <div className='w-[95%] sm:w-[80%] border shadow-lg p-8 text-xl rounded-lg '>
                <p>Description</p>
                <Divider style={{ marginTop: "8px" }} />
            </div>
            <div className='w-[95%] sm:w-[80%] border shadow-lg p-8 text-xl rounded-lg '>
                <p>General information</p>
                <Divider style={{ marginTop: "8px" }} />
            </div>
            <div className='w-[95%] sm:w-[80%] border shadow-lg p-8 text-xl rounded-lg '>
                <p>Why you'll love working here</p>
                <Divider style={{ marginTop: "8px" }} />
            </div>
            <div className='w-[95%] sm:w-[80%] border shadow-lg p-8 text-xl rounded-lg '>
                <p>Our People</p>
                <Divider style={{ marginTop: "8px" }} />
            </div>
            <div className='w-[95%] sm:w-[80%] border shadow-lg p-8 text-xl rounded-lg '>
                <p>Location</p>
                <Divider style={{ marginTop: "8px" }} />
            </div>
        </div>
    )
}

export default CompanyProfile