import React from 'react'

const Footer = () => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-between md:mx-20 mx-4 py-4 gap-3'>
            <div>
                <h1 className='font-bold text-[1.2rem] md:text-left text-center'>Resume Senpai</h1>
                <p className='text-center md:text-left md:text-1xl text-[0.8rem]'>&copy; {new Date().getFullYear()} Portfolio. All Rights Reserved.</p>
            </div>
            <div className='flex items-center justify-center'>
                <ul className='flex sm:gap-12 md:text-[1rem] text-[0.8rem] md:gap-6 gap-3'>
                    <li className='cursor-pointer'>Product</li>
                    <li className='cursor-pointer'>Pricing</li>
                    <li className='cursor-pointer'>Resources</li>
                    <li className='cursor-pointer'>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
