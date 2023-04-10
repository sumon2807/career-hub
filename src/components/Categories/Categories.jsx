import React from 'react';
import Category from '../Category/Category';

const Categories = ({categoryData}) => {

    return (
        <div>
            <div className='text-center mb-10'>
               <h1 className='text-5xl font-extrabold mt-32'>Job Category List</h1>
              <p className='font-medium text-base text-slate-600 pt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>
            <div className='grid lg:grid-cols-4 gap-6'>
                {
                    categoryData.map(category=> <Category
                    key={category.id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;

















                