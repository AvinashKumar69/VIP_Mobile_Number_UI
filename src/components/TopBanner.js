import React from 'react';
import Typewriter from "typewriter-effect";
import TopBannerImage2 from '../assets/TopBannerImage2.jpg';
import { ParticlesContainer } from './ParticlesBackground';




const TopBanner = () => {

    return (
        <>
            {/* <ParticlesContainer /> */}
            <div className='flex flex-row items-center justify-between px-20 py-5 xs:flex-col'>
                <div className='flex flex-col'>
                    <h3 className='text-3xl font-bold text-gray-600'>

                        <Typewriter
                            options={{
                                strings: [
                                    'BOOK YOUR CHOICE NUMBER <br /> EASILY ONLINE WITH',
                                    'FASTEST ACTIVATION <br /> NOW JUST A CLICK AWAY!',
                                    'CHOOSE YOUR VIP NUMBER <br /> GET STARTED WITH...'
                                ],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2000,
                            }}
                        />

                    </h3>
                    <h2 className='text-5xl font-bold text-orange-600'>
                        VIP NUMBER STORE
                    </h2>
                </div>

                <div className=''>
                    <img className='object-cover' src={TopBannerImage2} />
                </div>

            </div>
        </>

    )
}

export default TopBanner;

