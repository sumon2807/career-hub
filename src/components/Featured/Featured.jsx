import React, { useContext } from 'react';
import { FeaturedContext } from '../../App';
import Feature from '../Feature/Feature';

const Featured = () => {
    const features=useContext(FeaturedContext)
    console.log(features)
    return (
        <div className='container mx-auto'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-extrabold mt-32'>Featured Jobs</h1>
                <p className='font-medium text-base text-slate-600 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                {
                    features.map(feature=> <Feature
                    key={feature.id}
                    feature={feature}
                    ></Feature>)
                }
            </div>
                <button className='btn-primary mt-8'>See All Jobs</button>
        </div>
    );
};

export default Featured;