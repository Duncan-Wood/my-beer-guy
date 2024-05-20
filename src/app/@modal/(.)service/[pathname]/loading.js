"use client";

import CircularProgress from '@mui/joy/CircularProgress';

export default function Loading() {
    return(
        <div className="flex items-center justify-center align-center bg-white rounded">
            <CircularProgress className="m-4 bg-white rounded"/>
        </div>
    );
}
