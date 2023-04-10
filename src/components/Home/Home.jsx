import React from 'react';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <div className='flex lg:flex-row  container mx-auto my-10 items-center flex-col-reverse'>
                <div className="banner-details w-full lg:w-2/5">
                    <h1 className='text-2xl  lg:text-6xl font-extrabold text-black mt-6 lg:mt-20 mb-6'>One Step <br /> Closer To Your <br /><span className='text-cyan-600'>Dream Job</span></h1>
                    <p className='mb-8 text-base text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started</button>
                </div>
                <div className="banner-image w-3/4 mt-10">
                    <img src="../../../public/All Images/P3OLGJ1 copy 1.png" className='w-full' alt="" />
                </div>
            </div>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;