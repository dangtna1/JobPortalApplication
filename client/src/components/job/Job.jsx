import { Button, Chip, Divider, Grid, Stack, colors } from '@mui/material'
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deleteJob } from '../../assets/api';
import { useDispatch } from 'react-redux';
import { updateJobList } from '../../store/jobSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


const Job = ({ jobInfo }) => {
    // console.log("jobInfo",jobInfo)
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    const { jobId, address, companyName, deadline, industry, jobSkills, salary, title } = jobInfo;
    return (
        <div className='flex flex-col gap-2 bg-orange-100 p-8 pt-0 rounded-lg m-4 cursor-pointer hover:border border-red-600'>
            <div onClick={()=>{navigate(`detail/${jobId}`,{ state: jobInfo })}}>
                <p className='py-2 text-black text-opacity-40'>{deadline.slice(0, -3)}</p>
                <p className='text-2xl font-bold font-sans'>{title}</p>
                <p>Công ty: {companyName}</p>
                <div>
                    Lĩnh vực: {industry}
                </div>
            </div>

            <Divider />
            <div className='flex items-center gap-2'>
                <BusinessIcon />
                <span>At Office</span>
            </div>
            <div className='flex items-center gap-2'>
                <AttachMoneyIcon />
                <span>{formatter.format(salary)}</span>
            </div>
            <div className='flex items-center gap-2'>
                <PlaceIcon />
                <span>{address}</span>
            </div>
            <div className='flex gap-2'>
                {
                    jobSkills.map((skill, index) => (
                        <Chip key={index} label={skill.name} variant="outlined" style={{ cursor: "pointer" }} />
                    ))
                }
            </div>
            <Divider />
            <ul >
                {
                    jobSkills.map((skill, index) => (
                        <li className='customli' key={index}>
                            <span>Có kinh nghiệm về</span>
                            <span className='font-bold font-sans'>{` ${skill.name.toUpperCase()} `}</span>
                            <span>từ</span>
                            <span>{` ${skill.duration} năm trở lên`}</span>
                        </li>
                    ))
                }
            </ul>
            <Divider />
            <Grid container gap={2} justifyContent="flex-end">
                <DeleteIcon onClick={() => handleDelete(jobId)} />
                <EditIcon onClick={() => { navigate(`edit/${jobId}`, { state: jobInfo }) }} />
            </Grid>
        </div>
    )
}

export default Job