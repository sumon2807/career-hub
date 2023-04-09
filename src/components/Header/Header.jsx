import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 container mx-auto'>
            <div>
                <Link to='/' className='text-3xl font-bold'>Job<span className='text-cyan-600'>Finder</span></Link>
            </div>
            <div>
                <ul className='flex font-bold mt-2'>
                    <li className='mx-4'>
                        <NavLink to='/' className={({isActive})=>(isActive ? 'text-cyan-600' : 'default')}>Home</NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/statistics' className={({isActive})=>(isActive ? 'text-cyan-600' : 'default')}>Statistics</NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/appliedjob' className={({isActive})=>(isActive ? 'text-cyan-600' : 'default')}>Applied Job</NavLink>
                    </li>
                    <li className='mx-4'>
                        <NavLink to='/blog' className={({isActive})=>(isActive ? 'text-cyan-600' : 'default')}>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button className='btn-primary'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;