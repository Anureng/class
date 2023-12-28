"use client"
import { createContractObject } from '@/app/Contract/ContractDetails'
import React, { useState } from 'react'

const CreateProduct = () => {

    const [nameData, setNameData] = useState('')

    const addData = async () => {
        try {
            const contract = await createContractObject()
            const data = await contract.CreatePlaylist("CHecking", "Checking", "NFT", 3, ["https://res.cloudinary.com/dd8ckn2oz/image/upload/v1702480438/products/mm5hhef6wcnyh2wkcqtj.jpg"], ["https://res.cloudinary.com/dd8ckn2oz/image/upload/v1702480438/products/mm5hhef6wcnyh2wkcqtj.jpg"])
            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <input type="text" value={nameData} onChange={(e) => setNameData(e.target.value)} placeholder='enter name' />
            <input type="text" placeholder='enter description' />
            <input type="text" placeholder='enter ' />
            <input type="text" placeholder='price' />
            <input type="text" placeholder='images' />
            <input type="text" placeholder='videos' />

            <button onClick={addData}>Click to Add</button>
        </div>
    )
}

export default CreateProduct
