import React, { useState } from 'react';
import Logo from '../../assets/fportal.webp';
import '../Header/Headers.css';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { useEffect } from 'react';




const Headers = () => {

    const [menuIcon, setMenuIcon] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const body = document.body;
        menuVisible ? body.style.overflow = 'hidden' : body.style.overflow = '';
    }, [menuVisible]);

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
                        <Link className='link' to={'/news'}>
                            <li className='menuText'>Xəbərlər</li>
                        </Link>
                        <Link className='link' to={'/transfer'}>
                            <li className='menuText'>Transfer</li>
                        </Link>
                        <Link className='link' to={'/livescore'}>
                            <li className='menuText'>Canlı Hesab</li>
                        </Link>
                        <Link className='link' to={'/other'}>
                            <li className='menuText'>Digər</li>
                        </Link>
                        <li className='inputBox w-[150px]'>
                            <div className='w-full flex items-center bg-white rounded-3xl pl-7 overflow-hidden'>
                                <IoSearchSharp className='icon' />
                                <input className='w-full px-2' type="text" placeholder='Axtarış' />
                            </div>
                        </li>
                        <li className='languageIcon'>
                            <GrLanguage />
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