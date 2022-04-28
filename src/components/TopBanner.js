import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide_0 from '../assets/slide-0.jpg';
import Slide_1 from '../assets/slide-1.jpg';
import Slide_2 from '../assets/slide-2.jpg';



const TopBanner = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={Slide_0}
                        className="block w-full"
                        alt=""
                    />
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={Slide_1}
                        className="block w-full"
                        alt=""
                    />
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={Slide_2}
                        className="block w-full"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBanner;

