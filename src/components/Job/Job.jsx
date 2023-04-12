import React from 'react';

const Job = ({job}) => {
    const {companyLogo,companyName,jobTitle,address,jobType,salaryRange}=job
    return (
        <div className='flex border-2 border-red-500'>
            <div className="p-4 grid justify-center items-center">
                <img src={companyLogo} alt="" />
            </div>
            <div className='grid grid-cols-2 justify-between items-center'>
                <div className='p-4'>
                    <h1>{jobTitle}</h1>
                    <h4>{companyName}</h4>
                    <button>{jobType}</button>
                    <div className='flex'>
                        <p>{address}</p>
                        <p>{salaryRange}</p>
                    </div>
                </div>
            <div className='flex justify-end'>
                <button className='btn-primary'>View Details</button>
            </div>
            </div>
        </div>
    );
};

export default Job;