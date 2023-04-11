import React from 'react';

const Category = ({category}) => {
    const {title, icon, totalJobs}=category;
    return (
        <div className='border-2 p-10 rounded-xl bg-cyan-50 lg:text-left md:text-left text-center m-4'>
            <img src={icon} alt="" className='bg-cyan-100 p-2 rounded-lg mx-auto my-auto lg:mx-0 md:my-0 md:mx-0 lg:my-0' />   
            <h4 className='mt-8 text-xl font-extrabold text-slate-800'>{title}</h4>
            <p className='text-lg font-medium text-slate-600 mt-2'>{totalJobs} Jobs Available</p>
        </div>
                
    );
};

export default Category;

