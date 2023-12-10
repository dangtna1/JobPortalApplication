import React, { useEffect, useState } from 'react'
import Job from '../job/Job'
import { Button, Grid } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { fetchJobList } from '../../assets/api'
import { updateJobList } from '../../store/jobSlice'
import Filter from '../utils/Filter'
import FilterModal from '../utils/FilterModal'

const Home = () => {
    let jobList = useSelector((state) => state.job.jobList);
    jobList = [...jobList];
    const [sortType, setSortType] = useState("");
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

    const sortFunction = (type) => {
        if (type === sortType) {
            setSortType("");
            return;
        }

        setSortType(type);
    }

    if (sortType != "") {
        if (!jobList.length) return;
        if (sortType == "asc") {
            jobList.sort(function (a, b) {
                return a.salary - b.salary;
            });
        } else if (sortType == "des") {
            jobList.sort(function (a, b) {
                return b.salary - a.salary;
            });
        }
    }


    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full p-4 z-0'>
                <FilterModal />
                <div className="text-blue-600 px-4 flex items-center gap-2">
                    <p>SORT BY SALARY</p>
                    <Button style={{ border: "1px solid blue", backgroundColor: `${sortType === "asc" ? "blue" : "white"}`, color: `${sortType === "asc" ? "white" : "blue"}` }} onClick={() => sortFunction("asc")}>ascending</Button>
                    <Button style={{ border: "1px solid blue", backgroundColor: `${sortType === "des" ? "blue" : "white"}`, color: `${sortType === "des" ? "white" : "blue"}` }} onClick={() => sortFunction("des")}>descending</Button>
                </div>
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