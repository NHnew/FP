import React from 'react';
import Logo from '../../assets/fportal.webp';
import '../Header/Headers.css';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Headers = () => {
    return (
        <header className='w-full bg-black py-2'>
            <div className='container mx-auto'>
                <div className="menu flex items-center justify-between">
                    <Link to={'/home'}>
                        <div className='logo'>
                            <img className='w-48' src={Logo} alt="" />
                        </div>
                    </Link>
                    <nav>
                        <ul className='flex'>
                            <Link to={'/news'}>
                                <li>Xəbərlər</li>
                            </Link>
                            <Link to={'/transfer'}>
                                <li>Transfer</li>
                            </Link>
                            <Link to={'/livescore'}>
                                <li>Canlı Hesab</li>
                            </Link>
                            <Link to={'/other'}>
                                <li>Digər</li>
                            </Link>
                            <div className='flex items-center bg-white rounded-3xl pl-7 overflow-hidden'>
                                <IoSearchSharp className='icon' />
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