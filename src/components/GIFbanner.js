import React from 'react';
import GIFbannerImage from '../assets/GIF-banner.gif';


const GIFbanner = () => {
    return (
        <div className='mt-5'>
            <div className=''>
                <img className='w-full object-cover' src={GIFbannerImage} />
            </div>
        </div>
    )
}

export default GIFbanner;