import React, { useState } from 'react';
import '../styles/AlternateNavbar.css';
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';


const AlternateNavbar = () => {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const toggleNavbar = () => {
        setOpenMobileMenu(!openMobileMenu)
    }



    return (
        <>
            <nav className='bg-white text-black h-24 w-full flex flex-row items-center justify-between px-20 sm:px-5 xs:px-5 drop-shadow-2xl'>

                <div className=''>
                    <a href='/'>
                        <img className='h-20' src={Logo} />
                    </a>
                </div>

                <div className='desktop-view'>
                    <ul className='flex flex-row space-x-4 sm:space-x-2'>
                        <li className='text-lg font-medium border-t-2 border-b-2 border-orange-600 xyzabc-desktop-items'>
                            <a className='' href='#'>HOME</a>
                        </li>
                        <li className='text-lg font-medium border-t-2 border-b-2 border-orange-600 xyzabc-desktop-items'>
                            <a className='' href='#'>VIP NUMBERS</a>
                        </li>
                        <li className='text-lg font-medium border-t-2 border-b-2 border-orange-600 xyzabc-desktop-items'>
                            <a className='' href='#'>SOLD OUT</a>
                        </li>
                        <li className='text-lg font-medium border-t-2 border-b-2 border-orange-600 xyzabc-desktop-items'>
                            <a className='' href='#'>ABOUT US</a>
                        </li>
                        <li className='text-lg font-medium border-t-2 border-b-2 border-orange-600 xyzabc-desktop-items'>
                            <a className='' href='#'>GALLERY</a>
                        </li>
                        <li className='text-lg font-medium border-t-2 border-b-2 border-orange-600 xyzabc-desktop-items'>
                            <NavLink to='/contactus'>
                                <a className=''>CONTACT US</a>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={openMobileMenu ? 'mobile-view w-full bg-white rounded-lg divide-y divide-gray-100' : 'hidden'}>
                    <ul className='flex flex-col space-y-2 items-center'>
                        <li className='text-lg font-medium w-full text-center'>
                            <a className='block rounded-lg' href='#'>HOME</a>
                        </li>
                        <li className='text-lg font-medium w-full text-center'>
                            <a className='block rounded-lg' href='#'>VIP NUMBERS</a>
                        </li>
                        <li className='text-lg font-medium w-full text-center'>
                            <a className='block rounded-lg' href='#'>SOLD OUT</a>
                        </li>
                        <li className='text-lg font-medium w-full text-center'>
                            <a className='block rounded-lg' href='#'>ABOUT US</a>
                        </li>
                        <li className='text-lg font-medium w-full text-center'>
                            <a className='block rounded-lg' href='#'>GALLERY</a>
                        </li>
                        <li className='text-lg font-medium w-full text-center'>
                            <NavLink to='/contactus'>
                                <a className='block rounded-lg'>CONTACT US</a>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <button className='hamburger-menu-icon' type='button'
                    onClick={toggleNavbar}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list h-10 w-10" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

            </nav>
        </>
    )
}

export default AlternateNavbar;