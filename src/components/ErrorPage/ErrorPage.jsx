import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status}=useRouteError();
    console.log(error, status)
    return (
        <div className='container mx-auto relative'>
            <div className=' absolute top-48 left-[45%]'>
                <div className='border-8 border-gray-400 rounded-full w-[130px] h-[130px] mx-auto my-auto relative'>
                    <div className=' border-t-8 border-gray-400 rounded-t-full w-[25px] h-[25px] absolute top-6 left-4'></div>
                    <div className=' border-t-8 border-gray-400 rounded-t-full w-[25px] h-[25px] absolute top-6 right-4'></div>
                    <div className=' border-b-8 border-gray-400 w-[30px] h-[30px] absolute top-11 right-10'></div>
                    <div className=' absolute top-32'>
                        <h1 className='text-7xl text-gray-400 font-bold'>404</h1>
                    </div>
                </div>
                    <Link to="/"><button className='btn-primary absolute top-56 w-full'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;