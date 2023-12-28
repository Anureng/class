"use client"
import { createContractObject } from '@/app/Contract/ContractDetails';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
interface DetailData {
    param: string;
}
const BuyedProduct = ({ param }: DetailData) => {

    const [contractData, setContractData] = useState([])


    const getDataFromContract = async () => {
        const contractInstance = await createContractObject()
        const data = await contractInstance.getPlaylist(param)
        // console.log(data);
        setContractData(data)
    }





    useEffect(() => {
        getDataFromContract()
    })
    return (
        <div>
            <div className=' h-fit flex flex-col gap-y-6 justify-center items-center p-8  '>
                <div className='flex flex-col gap-y-6'>
                    <div>
                        {
                            contractData[5] && <Image src={String(contractData[5])} alt="Loading..." width={650} height={650} />
                        }
                    </div>
                    <div>
                        {
                            contractData[4] && <Image src={String(contractData[4])} alt="Loading..." width={650} height={650} />
                        }
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-8' >
                    <label htmlFor="" className='text-3xl font-semibold'>Name</label>
                    <h1 className=' font-light'>{contractData[0]}</h1>
                    <label htmlFor="" className='text-3xl font-semibold'>Description</label>
                    <p className='font-light'>{contractData[1]}</p>

                    {/* <label htmlFor="Price" className='text-2xl font-bold'>Price  </label> */}
                    {/* <p className='text-xl font-semi-bold'>${Number(contractData[3])}</p> */}

                    <label htmlFor="Author" className='text-2xl font-bold'>Author  </label>
                    <p className='font-light'>{contractData[2]}</p>

                    {/* <div>
                        <p className='text-2xl font-bold'>Type</p>
                        <p className='font-light'>{savedData?.type}</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold'>Category</p>
                        <p className='font-light'>{savedData?.category}</p>
                    </div> */}
                    {/* <button onClick={clickToBuy} className='border border-black w-fit px-8 rounded-lg bg-black text-white h-8'>Add to cart</button> */}
                </div>
            </div>
        </div>

    )
}

export default BuyedProduct
