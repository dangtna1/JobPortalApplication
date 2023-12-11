import { Button, Chip, Divider, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { confirmAlert } from 'react-confirm-alert';
import { deleteJob } from '../../assets/api';
import { updateJobList } from '../../store/jobSlice';
import { useDispatch } from 'react-redux';

const JobProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [job, setJob] = useState(location.state);
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const handleDelete = (id) => {
        console.log("id:", id)
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        const jobList = await deleteJob(id)
                        dispatch(updateJobList(jobList));
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }

    return (
        <div className='w-full flex flex-col items-center gap-5 '>
            <div className='w-[95%] sm:w-[60%] border shadow-lg p-8 text-xl rounded-lg '>
                <p className=' '>{job.title}</p>

                <Divider style={{ marginTop: "8px" }} />
                <div className='flex items-center gap-2 p-2'>
                    <BusinessIcon />
                    <span>{job.companyName}</span>
                </div>
                <div className='flex items-center gap-2 p-2'>
                    <AttachMoneyIcon />
                    <span>{formatter.format(job.salary)}</span>
                </div>
                <div className='flex gap-2 p-2'>
                {
                    job.jobSkills.map((skill, index) => (
                        <Chip key={index} label={skill.name} variant="outlined" style={{ cursor: "pointer" }} />
                    ))
                }
                </div>
                
            </div>
            <div className='w-[95%] sm:w-[60%] border shadow-lg p-8 text-xl rounded-lg '>
                <p className=' '>Responsibilities</p>
                <Divider style={{ marginTop: "8px" }} />
                <p>{job.responsibilities}</p>
            </div>
            <div className='w-[95%] sm:w-[60%] border shadow-lg p-8 text-xl rounded-lg'>
                <p className=' '>Requirement</p>
                <Divider style={{ marginTop: "8px" }} />
                <p>{job.requirement}</p>
            </div>

            <div className='w-[95%] sm:w-[60%] border shadow-lg p-8 text-xl rounded-lg '>
                <p className=' '>Company</p>
                <Divider style={{ marginTop: "8px" }} />
                <ul >
                    <li className='customli'>
                        Industry: {job.industry}
                    </li>
                    <li className='customli'>
                        Description: {job.description}
                    </li>
                    <li className='customli'>
                        Website: {job.website_url}
                    </li>
                </ul>
            </div>

            <div className='w-[95%] sm:w-[60%] border shadow-lg p-8 text-xl rounded-lg '>
                <p className=' '>Skills</p>
                <Divider style={{ marginTop: "8px" }} />
                <ul >
                {
                    job.jobSkills.map((skill, index) => (
                        <li className='customli' key={index}>
                            <span>Có kinh nghiệm về</span>
                            <span className='font-bold font-sans'>{` ${skill.name.toUpperCase()} `}</span>
                            <span>từ</span>
                            <span>{` ${skill.duration} năm trở lên`}</span>
                        </li>
                    ))
                }
            </ul>
            </div>
            <div className='w-[95%] sm:w-[60%] border shadow-lg p-8 text-xl rounded-lg '>
                <p>Location</p>
                <Divider style={{ marginTop: "8px" }} />
                <p>{job.address}</p>
            </div>
            <Stack gap={1} sx={{width:"60%"}}>
                <Button variant="contained" >Apply</Button>
                <Button variant="contained">Save</Button>
            </Stack>
        </div>
    )
}

export default JobProfile