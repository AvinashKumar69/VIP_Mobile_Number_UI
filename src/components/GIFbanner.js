import React from 'react';
import GIFbannerImage from '../assets/GIF-banner.gif';


const GIFbanner = () => {
    return (
        <div className='h-auto mt-5'
            style={{ width: '100%' }}
        >
            <img className='' src={GIFbannerImage} />
        </div>
    )
}

export default GIFbanner;