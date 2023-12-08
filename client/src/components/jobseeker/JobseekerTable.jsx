import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { jobseekerData } from '../../assets/data';

export default function JobseekerTable() {
    return (
        <div className='w-full'>
            <div className='font-semibold text-2xl px-2 py-4'>Job Seeker</div>
            <div style={{ height: "60vh", width: '100%' }}>
                <DataGrid
                    rows={jobseekerData.rows}
                    columns={jobseekerData.columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>

    );
}
