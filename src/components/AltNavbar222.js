import React, { useState } from 'react';
import '../styles/AltNavbar222.css';


const AltNavbar222 = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        console.log('hjsgcms', mobileMenu);
    }

    return (
        <>
            <div className='flex flex-row items-center justify-between h-24 px-20 sm:px-5 xs:px-2 xs:h-12'
                style={{ background: 'linear-gradient(to right, #33ccff, #ff99cc)' }}
            >

                <div className='text-4xl font-bold sm:text-3xl sm:font-semibold xs:text-2xl'>
                    Alternate Navbar
                </div>

                <div className='space-x-4 text-xl font-medium altnav-items sm:text-lg'>
                    <a className='border-b-2 border-orange-600 py-2' href='#'>Home</a>
                    <a className='border-b-2 border-orange-600 py-2' href='#'>Services</a>
                    <a className='border-b-2 border-orange-600 py-2' href='#'>About Us</a>
                    <a className='border-b-2 border-orange-600 py-2' href='#'>Contact Us</a>
                    <a className='border-b-2 border-orange-600 py-2' href='#'>Login</a>
                </div>

                <div className={mobileMenu ? 'hidden' : 'mobile-nav-items flex flex-col items-center top-12 right-0 rounded-lg absolute bg-gray-300 w-full'}
                    style={{ background: 'linear-gradient(to right, #33ccff, #ff99cc)' }}
                >
                    <a className='py-2 block' href='#'>Home</a>
                    <a className='py-2 block' href='#'>Services</a>
                    <a className='py-2 block' href='#'>About Us</a>
                    <a className='py-2 block' href='#'>Contact Us</a>
                    <a className='py-2 block' href='#'>Login</a>
                </div>

                <button className='hamburger-menu' type='button'
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list h-10 w-10" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

            </div>
        </>
    )
}

export default AltNavbar222;