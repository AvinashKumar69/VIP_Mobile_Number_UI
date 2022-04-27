import React from 'react';
import numerology from '../assets/numerology1.png';
import luckyNumber from '../assets/luckyNumber2.png';
import areaPincode from '../assets/areaPincode3.png';
import carNumber from '../assets/carNumber4.png';
import bdayNumber from '../assets/bdayNumber5.png';


const CustomizeNumber = () => {
    return (
        <div className='flex flex-row mx-auto items-center justify-center mt-0 bg-gray-100'>

            <div className='flex flex-col'>
                <div className="mx-5 my-5 w-72 h-64 rounded-lg bg-white xyzabc2">
                    <img src={numerology} className='' />
                </div>

                <div className="mx-5 my-5 w-72 h-64 rounded-lg bg-white xyzabc2">
                    <img src={luckyNumber} className='' />
                </div>
            </div>

            <div className='flex flex-col text-center'>
                <div className='mx-5 my-5 w-72 h-64 rounded-lg bg-white flex items-center justify-center xyzabc2'>
                    <h2 className='text-3xl font-bold xs:text-2xl'>
                        <span className='text-5xl font-bold xs:text-3xl'
                            style={{ color: 'rgba(242,56,0,1)' }}>CUSTOMIZE</span><br />
                        YOUR NUMBERS
                    </h2>
                </div>

                <div className="mx-5 my-5 w-72 h-64 rounded-lg bg-white xyzabc2">
                    <img src={areaPincode} className='' />
                </div>
            </div>

            <div className='flex flex-col'>
                <div className="mx-5 my-5 w-72 h-64 rounded-lg bg-white xyzabc2">
                    <img src={carNumber} className='' />
                </div>

                <div className="mx-5 my-5 w-72 h-64 rounded-lg bg-white xyzabc2">
                    <img src={bdayNumber} className='' />
                </div>
            </div>

        </div>
    )
}

export default CustomizeNumber;