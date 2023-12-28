"use client"
import { createContractObject } from '@/app/Contract/ContractDetails'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Navbar = () => {

  const [loginData, setLoginData] = useState(0)

  const handleViewData = async () => {
    try {
      const contract = await createContractObject()
      const data = await contract.getUser()
      // console.log(data[2]._hex);
      setLoginData(Number(data[2]._hex))
    } catch (error) {
      toast.error(`Error ${error}`)
    }
    // Update the document title using the browser API
  }

  useEffect(() => {
    handleViewData()
  })
  return (
    <div className='flex  items-center justify-center space-x-8 p-2 shadow-xl '>
      <div className="text-xl">
        <Link href="/">
          Udemy
        </Link>
      </div>
      <div className="text-sm">
        <Link href="/Course">
          Categories
        </Link>
      </div>
      <div className='w-2/5' >
        <div className='border border-black px-1 py-2 flex-grow rounded-2xl flex space-x-2'>
          <Search />
          <input className='border-none outline-none flex flex-grow ' placeholder='Enter categories' />
        </div>
      </div>
      <div className="text-xl"><ConnectButton chainStatus="icon" accountStatus={{
        smallScreen: 'avatar',
        largeScreen: 'avatar',
      }} showBalance={{
        smallScreen: false,
        largeScreen: false,
      }} /></div>
      <div>
        {
          loginData == 0 ? (
            <Link href="/Login">

            </Link>
          ) : (
            <div>{
              loginData === 1 ? (
                <div>
                  <Link href="/Teacher">
                    Profile
                  </Link>
                </div>
              ) : (
                <div>
                  <Link href="/Student">
                    Profile
                  </Link>
                </div>
              )
            }</div>
          )

        }
      </div>
      <div>
        {
          loginData == 0 ? (
            <Link href="/Login">
              Login
            </Link>
          ) : (
            <div>{
              loginData === 1 ? (
                <div>Teacher</div>
              ) : (
                <div>Student</div>
              )
            }</div>
          )

        }

      </div>
    </div>
  )
}

export default Navbar