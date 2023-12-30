"use client"
import { createContractObject } from '@/app/Contract/ContractDetails';
import DetailedProduct from '@/components/DetailedProduct';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react'

export interface IParams {
    id: string;
}
const page = ({ params }: { params: IParams }) => {


    return (
        <div>
            <Navbar />
            <DetailedProduct param={params.id} />
            <Footer />
        </div>
    )
}

export default page
