"use client"
import { createContractObject } from '@/app/Contract/ContractDetails';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { doc, setDoc } from 'firebase/firestore';
import { fireStore } from '../../firebase.config';
import { useAccount } from 'wagmi'

interface DetailData {
    param: string;
}
const DetailedProduct = ({ param }: DetailData) => {

    const { address, isConnecting, isDisconnected } = useAccount()

    const [contractData, setContractData] = useState([])
    const [idCount, setIdCount] = useState(0)


    const getDataFromContract = async () => {
        const contractInstance = await createContractObject()
        const data = await contractInstance.allPlaylistData(param)
        // console.log(data);
        setContractData(data)
    }

    const clickToBuy = async () => {
        try {
            const contract = await createContractObject()
            const data = await contract.buyPlaylist(param);
            // console.log(data);
            setIdCount(idCount + 1)
            if (data) {
                try {
                    await setDoc(doc(fireStore, "Student", `${idCount}`), {
                        address: address,
                        productId: param
                    });
                    console.log('Data added to Firestore successfully!');
                } catch (error) {
                    console.error('Error adding data to Firestore: ', error);
                }
            }
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getDataFromContract()
    })
    return (
        <div>
            <div className=' h-fit flex gap-x-16 justify-evenly p-8 '>
                <div>
                    {
                        contractData[5] && <Image src={String(contractData[5])} alt="Loading..." width={650} height={650} />
                    }
                </div>
                <div className='space-y-9'>
                    <h1 className='text-3xl font-semibold'>{contractData[0]}</h1>
                    <p className='font-light'>{contractData[1]}</p>

                    {/* <label htmlFor="Price" className='text-2xl font-bold'>Price  </label> */}
                    <p className='text-xl font-semi-bold'>${Number(contractData[4])}</p>
                    <div className=''>
                        <label htmlFor="Author" className='text-2xl font-bold'>Author  </label>
                        <p className='font-light'>{contractData[2]}</p>
                    </div>
                    {/* <div>
                        <p className='text-2xl font-bold'>Type</p>
                        <p className='font-light'>{savedData?.type}</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold'>Category</p>
                        <p className='font-light'>{savedData?.category}</p>
                    </div> */}
                    <button onClick={clickToBuy} className='border border-black w-fit px-8 rounded-lg bg-black text-white h-8'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default DetailedProduct