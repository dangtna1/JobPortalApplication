import React, { useEffect } from 'react'
import Job from '../job/Job'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { fetchJobList } from '../../assets/api'
import { updateJobList } from '../../store/jobSlice'
import Filter from '../utils/Filter'
import FilterModal from '../utils/FilterModal'

const Home = () => {
    const jobList = useSelector((state) => state.job.jobList);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jobList = await fetchJobList();
                dispatch(updateJobList(jobList));
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full p-4 z-0'>
                <FilterModal />
            </div>

            <Grid container spacing={1}>
                {
                    jobList.length ? jobList.map((job, index) => (
                        <Grid key={index} item xs={12} md={6}><Job jobInfo={job} /></Grid>
                    )) : (
                        <div className='w-full flex justify-center'>Không tìm thấy công việc</div>
                    )
                }
            </Grid>

        </div>
    )
}

export default Home