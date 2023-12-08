import { Chip, Divider } from '@mui/material'
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';

const Job = () => {
    return (
        <div className='flex flex-col gap-2 bg-orange-100 p-8 pt-0 rounded-lg m-4 cursor-pointer hover:border border-red-600 '>
            <div>
                <p className='py-2 text-black text-opacity-40'>Posted 2 hours ago</p>
                <p className='text-2xl font-bold font-sans'>Backend Developer (C/C++,SQL,C#)</p>
                <a href='/profile/companies/abcdefgh' className='flex gap-2 items-center my-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png"
                        alt="404" className='w-6' />
                    <p>A Company</p>
                </a>

            </div>

            <Divider />
            <div className='flex items-center gap-2'>
                <BusinessIcon />
                <span>At Office</span>
            </div>
            <div className='flex items-center gap-2'>
                <PlaceIcon />
                <span>Ho Chi Minh</span>
            </div>
            <div className='flex gap-2'>
                <Chip label="C++" variant="outlined" style={{ cursor: "pointer" }} />
                <Chip label="C#" variant="outlined" style={{ cursor: "pointer" }} />
                <Chip label="SQL" variant="outlined" style={{ cursor: "pointer" }} />
            </div>
            <Divider />
            <ul >
                <li className='customli'>Mức lương thỏa thuận</li>
                <li className='customli'>Cơ hội thăng tiến</li>
                <li className='customli'>Du lịch hằng năm</li>
            </ul>
        </div>
    )
}

export default Job