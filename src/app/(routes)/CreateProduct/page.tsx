import CreateProduct from '@/components/CreateProduct'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <CreateProduct />
            {/* <EditDeleteProduct /> */}
            <Footer />
        </div>
    )
}

export default page
