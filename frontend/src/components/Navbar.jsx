import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import SearchInput from './SearchInput';
import SideMenu from './SideMenu';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    return (
        <div className='flex p-5 space-x-5'>
            <div className='flex space-x-5'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer' >
                    <AiOutlineMenu size={40} />
                </div>

                <h1 className=' sm:text-3xl lg:text-4xl'>
                    HR <span className='font-bold'>DASHBOARD</span>
                </h1>
            </div>

            <SearchInput />

            {/*overlay*/}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/*side menu*/}
            <SideMenu nav={nav} setNav={setNav} />

        </div>
    )

};


export default Navbar;