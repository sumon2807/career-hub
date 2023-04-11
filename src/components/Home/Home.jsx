import React from 'react';
import Featured from '../Featured/Featured';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';


const Home = () => {
    const categoryData=useLoaderData();
    return (
        <div>
            <div className='flex lg:flex-row  container mx-auto my-10 items-center flex-col-reverse'>
                <div className="banner-details w-full lg:w-2/5">
                    <h1 className='text-3xl text-center md:text-left lg:text-left md:text-5xl lg:text-6xl font-extrabold text-black pl-4 md:pl-0 lg:pl-0  md:pt-6 lg:pt-20 md:pb-6'>One Step <br /> Closer To Your <br /><span className='text-cyan-600'>Dream Job</span></h1>
                    <p className='text-center md:text-left lg:text-left mb-8 md:mb-8 lg:mb-8 mt-8  md:mt-0 lg:mt-0 text-base text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className='p-4 md:pl-0 lg:pl-0'>
                    <button className='btn-primary w-full lg:w-40 md:w-40'>Get Started</button>
                    </div>
                </div>
                <div className="banner-image w-3/4 mt-10">
                    <img src="/All Images/P3OLGJ1 copy 1.png" className='w-full' alt="" />
                </div>
            </div>
            <Categories
            categoryData={categoryData}
            ></Categories>
            <Featured></Featured>
        </div>
    );
};

export default Home;