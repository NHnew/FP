import React, { useState } from 'react';
import Logo from '../../assets/fportal.webp';
import '../Header/Headers.css';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { useEffect } from 'react';
import Profile from '../../assets/2Nabi3x4.jpg';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';




const Headers = () => {


    const [menuIcon, setMenuIcon] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        const body = document.body;
        menuVisible ? body.style.overflow = 'hidden' : body.style.overflow = '';
    }, [menuVisible]);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const handleMenuClick = () => {
        setMenuIcon(prevState => !prevState);
        setMenuVisible(prevState => !prevState);
    };


    return (
        <header className='w-full bg-black py-2'>
            <div className='container mx-auto'>
                <div className="menu flex items-center justify-between">
                    <div onClick={handleMenuClick} className='hamburgerMenu'>
                        {menuIcon ? <FiMenu className='openHamburgerMenu' /> : <IoMdClose className='closeHamburgerMenu' />}
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
                        <li className='inputBox'>
                            <div className='subInputBox w-full flex items-center bg-white rounded-3xl pl-7 overflow-hidden'>
                                <IoSearchSharp className='icon' />
                                <input className='w-full px-2 py-1' type="text" placeholder='Axtarış' />
                            </div>
                        </li>
                        <li className='languageIcon'>
                            <GrLanguage />
                        </li>
                    </ul>
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <div className="profile h-8 w-8 rounded-full"></div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-stone-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-fuchsia-700' : '', 'block px-4 py-2 text-sm text-white')}
                                        >
                                            Your Profile
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-fuchsia-700' : '', 'block px-4 py-2 text-sm text-white')}
                                        >
                                            Settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-fuchsia-700' : '', 'block px-4 py-2 text-sm text-white')}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </header>

    );
};

export default Headers;
