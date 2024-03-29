import React, { useState } from 'react';
import Logo from '../../assets/fportal.webp';
import '../Header/Headers.css';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useEffect } from 'react';






const Headers = () => {

    const [menuIcon, setMenuIcon] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);



    const handleMenuClick = () => {
        setMenuIcon(prevState => !prevState);
        setMenuVisible(prevState => !prevState);
    };


    return (
        <header className='w-full bg-black py-2'>
            <div className='container mx-auto'>

                <div className="menu flex items-center justify-between">
                    <div onClick={handleMenuClick} className='hamburgerMenu'>
                        {menuIcon ? <FiMenu /> : <IoMdClose />}
                    </div>
                    <Link to={'/home'}>
                        <div className='logo'>
                            <img className='w-48' src={Logo} alt="" />
                        </div>
                    </Link>
                    <ul className={`flex ${menuVisible ? 'show' : 'hide'}`}>
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
                        <li className='inputBox'>
                            <div className='flex items-center bg-white rounded-3xl pl-7 overflow-hidden'>
                                <IoSearchSharp className='icon' />
                                <input className='w-24 pl-2' type="text" placeholder='Axtarış' />
                            </div>
                        </li>
                    </ul>
                    <div className='profile text-white w-9 h-9 bg-white rounded-full'>

                    </div>
                </div>
            </div>
        </header>

    );
};

export default Headers;