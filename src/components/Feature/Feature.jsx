import React from 'react';

const Feature = ({feature}) => {
    const {address, companyLogo, companyName, jobType, location, salaryRange, jobTitle}=feature
    return (
        <div className='border-2 p-10 rounded-lg'>
            <img src={companyLogo} alt="" />
            <h1 className='mt-4 text-2xl font-extrabold text-slate-600'>{jobTitle}</h1>
            <h4 className='text-xl font-semibold text-slate-600'>{companyName}</h4>
            <button className='text-cyan-600 border border-cyan-600 p-2 rounded-lg my-2'>{jobType}</button>
            <div className='flex gap-4'>
                <p className='text-xl font-semibold text-slate-600'>Location: {location}</p>
                <p className='text-xl font-semibold text-slate-600'>Salary: {salaryRange}</p>
            </div>
            <button className='btn-primary mt-5'>View Details</button>
        </div>
    );
};

export default Feature;

