import Image from 'next/image'
import React from 'react'

const Constructor = () => {
  return (
    <div className='flex items-center justify-center space-x-24 mt-20'>
        <Image src="/instructor-1x-v3.jpg" alt='nothing' width={400} height={400}/>
        <div className='w-96 flex flex-col justify-center space-y-4'>
            <p className='text-3xl font-bold text-gray-900'>Become an instructor</p>
            <p className='font-light'>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
            <button className='bg-gray-900 text-white text-lg p-2 w-48'>Start teaching today</button>
        </div>
    </div>
  )
}

export default Constructor