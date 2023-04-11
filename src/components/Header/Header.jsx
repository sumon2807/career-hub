import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen]=useState(false)
    return (
        <div className='flex justify-between items-center py-4 container mx-auto'>
            <div>
                <Link to='/' className='text-3xl font-bold pl-4 lg:p-0 md:p-0'>Job<span className='text-cyan-600'>Finder</span></Link>
            </div>
            <div>
            <div className='md:hidden lg:hidden absolute right-0 pr-4' onClick={()=>setOpen(!open)}>
                <span>{open=== true ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            
            
            </div>
                <ul className={`md:flex lg:flex font-bold mt-2 absolute md:static lg:static duration-500 ${open ? 'top-6' : '-top-48'}`}>
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
                <button className='btn-primary invisible md:visible lg:visible'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;