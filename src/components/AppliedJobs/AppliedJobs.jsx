import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const AppliedJobs = () => {
    useLoaderData();

    const [jobs, setJobs]=useState([])
    useEffect(()=>{
        const previousData=localStorage.getItem('totalApply');
       if(previousData){
        setJobs(JSON.parse(previousData))
       }
    },[])
console.log(jobs)
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between'>
              <img src="/All Images/Vector-1.png" alt="" />
              <img src="/All Images/Vector-1.png" alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold underline text-slate-800'>Applied Jobs</h1>
            </div>
            <div className='my-20 rounded-xl m-4 grid justify-items-center'>
                {
                    jobs.map(job=> <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;