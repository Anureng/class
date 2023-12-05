import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div >
      <div className='flex items-center justify-center overflow-hidden relative'>
        <Image src="/main_header.jpg" alt='nothing' height={1200} width={1200}/>
        <div className='bg-white w-96 border border-black left-0 top-0 mt-16 p-4 space-y-6 ml-60  absolute '>
        <h1 className='text-4xl font-bold'>Black Friday? Meet bright future.</h1>
        <p>Get our biggest savings of the season and something more: life-changing skills. Courses from ₹389 through Nov 24.</p>
      </div>
      </div>
    </div>
  )
}

export default Header