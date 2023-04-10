import React from 'react';

const Category = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-extrabold mt-32'>Job Category List</h1>
            </div>
            <div className='grid lg:grid-cols-4 gap-6'>
                <div className='border-2 p-10 rounded-xl bg-cyan-50'>
                    <img src="../../../public/Icons/accounts 1.png" alt="" className='bg-cyan-100 p-2 rounded-lg' />   
                    <h4 className='mt-8 text-xl font-extrabold'>Account & Finance</h4>
                    <p className='text-lg font-medium text-slate-600 mt-2'>300 Jobs Available</p>
                </div>
                <div className='border-2 p-10 rounded-xl bg-cyan-50'>
                    <img src="../../../public/Icons/business 1.png" alt="" className='bg-cyan-100 p-2 rounded-lg' />
                    <h4 className='mt-8 text-xl font-extrabold'>Creative Design</h4>
                    <p className='text-lg font-medium text-slate-600 mt-2'>100+ Jobs Available</p>
                </div>
                <div className='border-2 p-10 rounded-xl bg-cyan-50'>
                    <img src="../../../public/Icons/social-media 1.png" alt="" className='bg-cyan-100 p-2 rounded-lg' />
                    <h4 className='mt-8 text-xl font-extrabold'>Marketing & Sales</h4>
                    <p className='text-lg font-medium text-slate-600 mt-2'>150 Jobs Available</p>
                </div>
                <div className='border-2 p-10 rounded-xl bg-cyan-50'>
                    <img src="../../../public/Icons/chip 1.png" alt="" className='bg-cyan-100 p-2 rounded-lg' />
                    <h4 className='mt-8 text-xl font-extrabold'>Engineering Job</h4>
                    <p className='text-lg font-medium text-slate-600 mt-2'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Category;