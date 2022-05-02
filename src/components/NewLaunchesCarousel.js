import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../styles/NewLaunchesCarousel.css';



const NewLaunchesCarousel = () => {

    function SampleArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        variableWidth: true,
        // nextArrow: <SampleArrow />,
        // prevArrow: <SampleArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            }
        ]
    }


    return (
        <>
            <div className='bg-gray-100'>

                <div className='flex flex-row items-center justify-center py-5 space-x-4 xs:flex-col xs:space-y-4 xs:items-center xs:justify-center'>

                    <div className=''>
                        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-black bg-white border-2 border-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center w-60 h-12" type="button">
                            All
                            <svg className="w-4 h-4 ml-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 border-2 border-red-100">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">All</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option-1</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option-2</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className=''>
                        <input className='rounded-lg border-2 border-red-300 w-60 h-12' type='text' name='searchbar' placeholder='Search Numbers...' />
                    </div>

                    <div className=''>
                        <button class="text-white border-0 py-2 px-8 rounded-lg text-lg"
                            style={{ backgroundColor: 'rgb(242, 56, 0)' }}
                        >
                            Search
                        </button>
                    </div>

                </div>




                <div className='flex flex-col items-center mt-5 pt-5 text-3xl font-bold'>
                    <span className='text-5xl' style={{ color: 'rgba(242,56,0,1)' }}>LAUNCHES</span> NEW NUMBERS
                </div>

                <div className='mb-5 mt-2 mx-12'>
                    <Slider {...settings}>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                        <div className='border-2 rounded-lg mt-5 mb-5 xyzabc'>
                            <div className='h-8 text-center bg-gray-100 font-bold'>
                                ₹2950
                            </div>
                            <hr />
                            <div className='text-center font-bold my-2 text-2xl'>
                                AB AB AB Numbers
                            </div>
                            <div className='flex flex-row items-center justify-center mb-2'>
                                <button className='border-0 rounded-full font-semibold py-1 px-2 text-white' type='button'
                                    style={{ backgroundColor: 'rgba(242,56,0,1)' }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default NewLaunchesCarousel;