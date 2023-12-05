import { Copyright, Globe } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1C1D1F] text-white space-y-14 h-58 p-4 mt-10' >
        <div className='flex  justify-between '>
            <div className='flex ml-14 p-4 space-x-24'>
                <div className='list-none space-y-1 text-sm font-light'>
                    <li>Udemy Business</li>
                    <li>Teach on Udemy</li>
                    <li>Get the app</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </div>
                <div className='list-none space-y-1 text-sm font-light'>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Help and support</li>
                    <li>Affiliate</li>
                    <li>Investor</li>
                </div>
                <div className='list-none space-y-1 text-sm font-light'>
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>Cookies setting</li>
                    <li>SiteMap</li>
                    <li>Accessibility statement</li>
                </div>
            </div>
            <div className='mr-8 h-10 mt-6 flex space-x-1 items-center border border-white  px-5 py-2'>
            <Globe />
                <p className='text-lg'>
                English

                </p>
                </div>
        </div>
        <div className='flex items-center justify-between ml-16 '>
            <div className='text-2xl font-bold'>Udemy</div>
            <div className='mr-8 text-xs flex items-center'> 
            <Copyright size={16}  />
            <p>
            2024 Udemy. inc.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Footer