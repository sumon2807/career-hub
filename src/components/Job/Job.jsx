import React from 'react';

const Job = ({job}) => {
    const {companyLogo,companyName,jobTitle,address,jobType,salaryRange}=job
    return (
        <div className='flex border-2 rounded-xl p-4 m-2'>
            <div className="p-4 grid justify-center items-center bg-gray-300 rounded">
                <img src={companyLogo} alt="" />
            </div>
                <div className='grid grid-cols-2 justify-items-center'>
                <div className='p-4'>
                    <h1 className='font-bold text-slate-800'>{jobTitle}</h1>
                    <h4 className='font-semibold text-slate-800'>{companyName}</h4>
                    <div className='flex'>
                        <button className='border-2 px-2 rounded text-base text-slate-500'>{jobType}</button>
                        <button className='border-2 px-2 rounded text-base text-slate-500 ml-2'>{jobType}</button>
                    </div>
                    <p className='text-base text-slate-500'>Address: {address}</p>
                    <p className='text-base text-slate-500'>Salary: {salaryRange}</p>
                </div>
                <div className='mt-12'>
                    <button className='btn-primary'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;