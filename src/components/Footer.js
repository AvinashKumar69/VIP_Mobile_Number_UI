import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-black bg-gray-200 font-newFont">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap text-left -mb-10 -mx-4 sm:mx-auto sm:text-center xs:text-center">
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="font-bold text-black tracking-widest text-2xl mb-3">CONTACT US</h2>
                            <nav className="list-none mb-5">
                                <p className=''>
                                    Shop No 23, Old idea point, Main market, Police station Road, Anupgarh Distt. Sri ganganagar Rajasthan 335701
                                    <br />
                                    Email: cs@vipnumberstore.in
                                </p>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="font-bold text-black tracking-widest text-2xl mb-3">SUPPORT</h2>
                            <nav className="list-none mb-5">
                                <li>
                                    <a className="text-black">Contact Us</a>
                                </li>
                                <li>
                                    <a className="text-black">FAQ'S</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="font-bold text-black tracking-widest text-2xl mb-3">WE ACCEPT</h2>
                            <nav className="list-none mb-5">
                                <li>
                                    <a className="text-black">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a className="text-black">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className="text-black">Refund Policy</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-300 flex flex-row sm:flex-col xs:flex-col">
                    <div className="container px-5 py-5 flex flex-row mx-auto items-center justify-between xs:flex-col">
                        <div className="flex justify-center items-end md:justify-start sm:flex-col xs:flex-col">
                            <div className="relative w-64 mr-2">
                                <label for="footer-field" className="leading-7 text-sm">Subscribe to our email updates</label>
                                <input type="text" id="footer-field" name="footer-field" placeholder='abc@example.com' className="w-full bg-gray-200 rounded-lg text-base text-white py-1 px-3" />
                            </div>
                            <button className="text-white py-2 px-6 rounded-full sm:mx-auto sm:mt-1 xs:mx-auto xs:mt-1"
                                style={{ backgroundColor: 'rgb(247 121 1)' }}
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="flex flex-col lg:pr-40 md:pr-40 xs:mt-5">
                            <div className='flex'>
                                <h3 className='text-lg'>
                                    Follow us on
                                </h3>
                            </div>
                            <div className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row sm:items-center sm:justify-center">
                        <p className="text-gray-500 text-sm text-center">
                            © Vip Number Store. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>

            <a className='chat-icon-fixed' href='/' target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chat h-8 w-8 mx-auto" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                </svg>
            </a>
        </>
    )
}

export default Footer;