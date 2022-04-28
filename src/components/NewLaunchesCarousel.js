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