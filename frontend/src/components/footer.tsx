import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-auto'>
            <div className='flex md:flex-row flex-col items-center justify-between md:mx-20 mx-4 py-8 gap-4'>
                <div>
                    <h1 className='font-bold text-[1.2rem] md:text-left text-center text-gray-900'>Resume Senpai</h1>
                    <p className='text-center md:text-left md:text-sm text-[0.8rem] text-gray-600'>&copy; {new Date().getFullYear()} Resume Senpai. All Rights Reserved.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <ul className='flex sm:gap-8 md:text-[1rem] text-[0.8rem] md:gap-6 gap-4'>
                        <li className='cursor-pointer text-gray-600 hover:text-gray-900 transition-colors'>Product</li>
                        <li className='cursor-pointer text-gray-600 hover:text-gray-900 transition-colors'>Pricing</li>
                        <li className='cursor-pointer text-gray-600 hover:text-gray-900 transition-colors'>Resources</li>
                        <li className='cursor-pointer text-gray-600 hover:text-gray-900 transition-colors'>Contact Us</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
