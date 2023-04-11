import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const Statistics = () => {
    const data = [
        {
          name: 'A-1',
          marks: 57,
        },
        {
          name: 'A-2',
          marks: 57,
        },
        {
          name: 'A-3',
          marks: 60,
        },
        {
          name: 'A-4',
          marks: 53,
        },
        {
          name: 'A-5',
          marks: 53,
        },
        {
          name: 'A-6',
          marks: 34,
        },
        {
          name: 'A-7',
          marks: 60,
        },
        {
          name: 'A-8',
          marks: 60,
        },
        
      ];

    return (
       <div className=' container mx-auto'>
            <div className='grid grid-cols-1 justify-items-center mt-20'>
                <ComposedChart
                    width={750}
                    height={500}
                    data={data}
                    margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
             >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" barSize={30} fill="#413ea0" />
                <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                </ComposedChart>
            </div>
       </div>
    );
};

export default Statistics;