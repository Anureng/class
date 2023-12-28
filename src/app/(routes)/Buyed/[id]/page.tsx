import BuyedProduct from '@/components/BuyedProduct'
import Navbar from '@/components/Navbar'
import React from 'react'

export interface IParams {
    id: string;
}

const page = ({ params }: { params: IParams }) => {
    return (
        <div>
            <Navbar />
            <BuyedProduct param={params.id} />
        </div>
    )
}

export default page
