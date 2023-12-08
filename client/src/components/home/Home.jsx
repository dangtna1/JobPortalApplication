import React from 'react'
import Job from '../job/Job'
import { Grid } from '@mui/material'

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}><Job /></Grid>
                <Grid item xs={12} md={6}><Job /></Grid>
                <Grid item xs={12} md={6}><Job /></Grid>
                <Grid item xs={12} md={6}><Job /></Grid>
                <Grid item xs={12} md={6}><Job /></Grid>
            </Grid>

        </div>
    )
}

export default Home