import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { searchJob } from '../../assets/api'
import { updateJobList } from '../../store/jobSlice'

const Filter = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            job: data.get("keyword"),
            minSalary: data.get("minSalary"),
        });

        try {
            const searchJobList = await searchJob({ keyword: data.get("keyword"), salary: data.get("minSalary") });
            dispatch(updateJobList(searchJobList));
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="keyword"
                label="Vị trí, công ty, lĩnh vực, kỹ năng"
                name="keyword"
                type='text'
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="minSalary"
                label="Lương lớn hơn hoặc bằng"
                type="text"
                id="minSalary"
                defaultValue={0}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Filter
            </Button>
        </Box>
    )
}

export default Filter