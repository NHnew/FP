import React from 'react';
import Logo from '../../assets/fportal.webp';
import '../Header/Headers.css';
import { IoSearchSharp } from "react-icons/io5";




const Headers = () => {
    return (
        <header className='bg-black py-2'>
            <div className='container mx-auto'>
                <div className="menu flex items-center justify-between">
                    <div className='logo'>
                        <img className='w-48' src={Logo} alt="" />
                    </div>
                    <nav>
                        <ul className='flex'>
                            <li>Xəbərlər</li>
                            <li>Transfer</li>
                            <li>Canlı Hesab</li>
                            <li>Digər</li>
                            <div className='flex items-center bg-white rounded-3xl pl-7'>
                                <IoSearchSharp />
                                <input className='w-24 pl-2' type="text" placeholder='Axtarış' />
                            </div>
                        </ul>
                    </nav>
                    <div className='profile text-white w-10 h-10 bg-white rounded-full'>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Headers;