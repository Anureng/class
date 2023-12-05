import Image from 'next/image'
import React from 'react'

const TrustedOver = () => {
  return (
    <div>
        <div className='bg-[#F7F9FA] flex flex-col justify-center items-center p-20 mt-24'>
            <p className='mb-4'>Trusted by over 15,000 companies and millions of learners around the world</p>
            <div className='flex gap-20'>
            <Image src="/att.svg" alt='nothing' width={100} height={100}/>
            <Image src="/cisco.svg" alt='nothing' width={50} height={50}/>
            <Image src="/citi.svg" alt='nothing' width={50} height={50}/>
            <Image src="/ericsson.svg" alt='nothing' width={50} height={50}/>
            <Image src="/hewlett_packard_enterprise.svg" alt='nothing' width={50} height={50}/>
            <Image src="/procter_gamble.svg" alt='nothing' width={50} height={50}/>
            <Image src="/samsung.svg" alt='nothing' width={50} height={50}/>
            <Image src="/volkswagen ww Logo.svg" alt='nothing' width={50} height={50}/>
            </div>
        </div>
    </div>
  )
}

export default TrustedOver