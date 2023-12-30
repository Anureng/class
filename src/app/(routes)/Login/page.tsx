import CreateUser from '@/components/CreateUser'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <CreateUser />
            <Footer />
        </div>
    )
}

export default page
