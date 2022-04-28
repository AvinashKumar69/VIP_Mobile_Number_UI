import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import girlPic from '../assets/girl_image_with_mic.png';
import testimonialPic from '../assets/testimonial_image.jpg';
import '../styles/Testimonial.css';



const Testimonial = () => {
    return (
        <>
            <div className='flex flex-col font-newFont'
                style={{ backgroundColor: 'rgb(247 121 1)' }}
            >

                <div className='flex'>
                    <h2 className='text-6xl font-black text-gray-300 mx-auto mt-5 mb-5 sm:text-5xl xs:text-xl'>
                        what people say about us...
                    </h2>
                </div>

                <div className='flex flex-row'>

                    <Carousel
                        showArrows={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        autoPlay={true}
                        interval={2000}
                    >
                        <div>
                            <img src={testimonialPic} />
                            <div className="myCarousel">
                                <h3>Monica</h3>
                                <h4>Kanpur, India</h4>
                                <p>
                                    I found this site very good value for money. Highly Recommended. You will get N numbers of options and even the prices are Good.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={testimonialPic} />
                            <div className="myCarousel">
                                <h3>Monica</h3>
                                <h4>Kanpur, India</h4>
                                <p>
                                    I found this site very good value for money. Highly Recommended. You will get N numbers of options and eventhe prices are Good.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={testimonialPic} />
                            <div className="myCarousel">
                                <h3>Monica</h3>
                                <h4>Kanpur, India</h4>
                                <p>
                                    I found this site very good value for money. Highly Recommended. You will get N numbers of options and eventhe prices are Good.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={testimonialPic} />
                            <div className="myCarousel">
                                <h3>Monica</h3>
                                <h4>Kanpur, India</h4>
                                <p>
                                    I found this site very good value for money. Highly Recommended. You will get N numbers of options and eventhe prices are Good.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={testimonialPic} />
                            <div className="myCarousel">
                                <h3>Monica</h3>
                                <h4>Kanpur, India</h4>
                                <p>
                                    I found this site very good value for money. Highly Recommended. You will get N numbers of options and eventhe prices are Good.
                                </p>
                            </div>
                        </div>
                    </Carousel>

                    <div className='flex w-full sm:hidden xs:hidden'>
                        <img className='w-full' src={girlPic} />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Testimonial;