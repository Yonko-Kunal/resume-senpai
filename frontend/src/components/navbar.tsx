import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='border-b-1 border-gray-200'>
            <nav className='flex justify-between items-center md:mx-30 mx-8 py-4 '>
                <div className='flex items-center justify-center'>
                    <ul className='flex md:gap-12 md:text-[1rem] text-[0.8rem] gap-6'>
                        <li className='cursor-pointer'>Product</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Resources</li>
                    </ul>
                </div>
                <div>
                    <Button className='cursor-pointer'>Get Started</Button>
                </div>
            </nav>
        </div>



    )
}

export default Navbar