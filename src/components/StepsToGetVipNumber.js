import React from 'react';
import Step1 from '../assets/step1.png';
import Step2 from '../assets/step2.png';
import Step3 from '../assets/step3.png';
import Step4 from '../assets/step4.png';


const StepsToGetVipNumber = () => {
    return (
        <>
            <div className='flex flex-col'>

                <div className='flex flex-row'>

                    <div className='mx-auto my-5'>
                        <h2 className='text-5xl text-center font-bold text-gray-600 xs:text-3xl'>
                            <span style={{ color: 'rgba(242,56,0,1)' }}>QUICK STEPS TO BUY</span><br /> YOUR VIP NUMBER
                        </h2>
                    </div>

                    {/* <div className=''>
                        <iframe className='w-auto h-auto' src="https://www.youtube.com/embed/9kV-wiGKs3Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div> */}

                </div>

                <div className='flex flex-row items-center justify-center xs:flex xs:flex-col'>

                    <div className='flex flex-row'>
                        <div className="mx-3 w-uto h-auto rounded-lg bg-white xyzabc1">
                            <img src={Step1} className='' />
                        </div>

                        <div className="mx-3 w-uto h-auto rounded-lg bg-white xyzabc1">
                            <img src={Step2} className='' />
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className="mx-3 w-uto h-auto rounded-lg bg-white xyzabc1">
                            <img src={Step3} className='' />
                        </div>

                        <div className="mx-3 w-uto h-auto rounded-lg bg-white xyzabc1 step4">
                            <img src={Step4} className='' />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default StepsToGetVipNumber;