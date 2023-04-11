import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const {id}=useParams();
    const detailsData=useLoaderData();
    const [data, setData]=useState({});
    const {jobDescription,jobResponsibility,salaryRange,address,phone,email,requirements,experiences,jobTitle}=data
    
    useEffect(()=>{
        if(detailsData){
            const details=detailsData.find(dt=> dt.id==id);
            setData(details)
        }
    },[])

    const [totalData, setTotalData]=useState([])
    const handleApplyButton=(data)=>{
        toster();
        const appliedData=[...totalData, data ];
        setTotalData(appliedData);

        const storedData=localStorage.getItem('totalApply');
        if(storedData){
            appliedData=JSON.parse(storedData);
            console.log(appliedData)
        }else{
            localStorage.setItem('totalApply', JSON.stringify(appliedData));
        }
    }

    const toster=()=>{
        toast.success('Successfully Applied!');
    }
    
    return (
        <div className='container mx-auto'>
            <div className='text-center mt-10 '>
                <h1 className='text-5xl font-extrabold underline text-slate-800'>Job Details</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 mt-20 items-center p-8 lg:p-0 md:p-0 '>
              <div className="job-details ">
                <p className='text-base text-slate-500'><span className='font-bold text-slate-800'>Job Description: </span>{jobDescription}</p>
                <p className='text-base text-slate-500'><span className='font-bold text-slate-800'>Job Responsibility: </span>{jobResponsibility}</p>
                <h5 className='font-bold text-slate-800'>Educational Requirements:</h5>
                <p className='text-base text-slate-500'>{requirements}</p>
                <h5 className='font-bold text-slate-800'>Experiences:</h5>
                <p className='text-base text-slate-500'>{experiences}</p>
              </div>
              <div className="job-info p-7 bg-slate-200 rounded-lg">
                    <h3 className='font-bold text-slate-800 mb-4'>Job Details</h3>
                    <hr className='border-slate-50 mb-2'/>
                    <p className='text-base text-slate-700'><span className='font-semibold'>Salary: </span>{salaryRange}</p>
                    <p className='text-base text-slate-700'><span className='font-semibold'>Job Title: </span>{jobTitle}</p>
                    <h3 className='font-bold text-slate-800 my-4'>Contact Information</h3>
                    <hr className='border-slate-50 mb-2' />
                    <p className='text-base text-slate-700'><span className='font-semibold'>Phone: </span>{phone}</p>
                    <p className='text-base text-slate-700'><span className='font-semibold'>Email: </span>{email}</p>
                    <p className='text-base text-slate-700'><span className='font-semibold'>Address: </span>{address}</p>
                    <button onClick={()=>handleApplyButton(data)} className='btn-primary text-slate-800 mt-4'>Apply Now</button>
                    <ToastContainer 
                    position="top-center"
                    reverseOrder={false}
                    />
              </div>
            </div>
        </div>
    );
};

export default JobDetails;