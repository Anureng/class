import { Search, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  items-center justify-center space-x-8 p-2 shadow-xl '>
      <div className="text-xl">Udemy</div>
      <div className="text-sm"> Categories</div>
      <div className='w-2/5' >
        <div className='border border-black px-1 py-2 flex-grow rounded-2xl flex space-x-2'>
      <Search />
        <input className='border-none outline-none flex flex-grow ' placeholder='Enter categories'/>
        </div>
      </div>
      <div className="text-sm">Teach on Udemy</div>
      <div className="text-xl">Connect Button</div>
      <div className="text-sm">
      <ShoppingCart />
      </div>
    </div>
  )
}

export default Navbar