import CreateProduct from '@/components/CreateProduct'
import EditDeleteProduct from '@/components/EditDeleteProduct'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <CreateProduct />
            {/* <EditDeleteProduct /> */}

        </div>
    )
}

export default page
