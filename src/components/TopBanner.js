import React from 'react';



const TopBanner = () => {
    return (
        // <div id="default-carousel" className="relative" data-carousel="slide">

        //     <div className="overflow-hidden relative h-auto w-auto rounded-lg">

        //         <div className="hidden duration-700 ease-in-out" data-carousel-item='active'>
        //             <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
        //             <img src="https://www.vipnumberstore.in/assets/img/slide-0.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        //         </div>

        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://www.vipnumberstore.in/assets/img/slide-1.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        //         </div>

        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src="https://www.vipnumberstore.in/assets/img/slide-2.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
        //         </div>
        //     </div>
        // </div>





        <div id="carouselTopBannerSlidesOnly" className="carousel slide carousel-fade overflow-hidden" data-bs-ride="carousel">
            <div className="carousel-inner">
                {/* <div className="carousel-item active" data-bs-interval="5000">
                    <img src="https://www.vipnumberstore.in/assets/img/slide-0.jpg" className="d-block w-full" alt="slide1" />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="https://www.vipnumberstore.in/assets/img/slide-1.jpg" className="d-block w-100" alt="slide2" />
                </div> */}
                <div className="carousel-item" data-bs-interval="5000">
                    <img src="https://www.vipnumberstore.in/assets/img/slide-2.jpg" className="d-block w-100" alt="slide3" />
                </div>
            </div>
        </div>
    )
}

export default TopBanner;