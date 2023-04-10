import React, { useContext } from 'react';
import { FeaturedContext } from '../../App';

const Featured = () => {
    const features=useContext(FeaturedContext)
    console.log(features)
    return (
        <div className='container mx-auto'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-extrabold mt-32'>Featured Jobs</h1>
                <p className='font-medium text-base text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>
    );
};

export default Featured;