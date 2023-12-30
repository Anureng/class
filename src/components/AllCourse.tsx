"use client"
import { createContractObject } from '@/app/Contract/ContractDetails'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import { DollarSign } from 'lucide-react'

const AllCourse = () => {
    const [loginData, setLoginData] = useState<any[]>([])

    // const handleViewData = async () => {
    //     try {
    //         const contract = await createContractObject()
    //         const data = await contract.allGetPlaylist()
    //         console.log(data.map((el: any) => {
    //             // for (let i = 0; i < el.length(); i++) {
    //             //     console.log(i);
    //             // }
    //             // console.log(Number(el._hex));
    //         }));
    //         // setLoginData(data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     // Update the document title using the browser API
    // }


    const handleViewDataOfPlaylist = async () => {
        try {
            const contract = await createContractObject()
            const data = await contract.allGetPlaylist()

            // data.map(async (el: any) => {
            // for (let i = 0; i < el.length(); i++) {
            //     console.log(i);
            // }

            // const data = await contract.getPlaylist(Number(el._hex))

            const playlistDetails = await Promise.all(
                data.map(async (el: any) => {
                    const playlistId = Number(el);
                    const playlistData = await contract.allPlaylistData(playlistId);
                    return playlistData;
                })
            );
            // console.log(playlistDetails);
            setLoginData(playlistDetails)
            // console.log(loginData);

            // });

            // const realNumber = parseInt(storeAsString, 16)
            // console.log(Number(data[2]._hex));

        } catch (error) {
            console.log(error);
        }
        // Update the document title using the browser API
    }

    useEffect(() => {
        handleViewDataOfPlaylist()
        // handleViewData()
    })

    // const handleViewDataOfPlaylist = async () => {
    //     try {
    //         const contract = await createContractObject()
    //         const data = await contract.buyPlaylist(3)

    //         // const realNumber = parseInt(storeAsString, 16)
    //         console.log(data);

    //     } catch (error) {
    //         console.log(error);
    //     }
    //     // Update the document title using the browser API
    // }
    return (
        <div className='flex flex-wrap border p-4 gap-4 items-center justify-center'>
            {/* <button onClick={handleViewData}>check</button> */}
            {/* <button onClick={handleViewDataOfPlaylist}>check dat</button> */}
            {
                loginData.map((el) => (
                    <>
                        <Card className="w-[350px]">
                            <Link href={`Course/${String(Number(el[3]))}`}>
                                <CardHeader>
                                    <CardTitle>Create project</CardTitle>
                                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <Image src={String(el[5])} alt='Loading...' height={300} width={300} />
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                {/* <Label htmlFor="name">Name</Label> */}
                                                {el[0]}
                                                {/* <Input id="name" placeholder="Name of your project" /> */}
                                            </div>

                                            <div className="flex flex-col space-y-1.5">
                                                {/* <Label htmlFor="name">Name</Label> */}
                                                {el[1]}
                                                {/* <Input id="name" placeholder="Name of your project" /> */}
                                            </div>


                                            <div className="flex flex-col space-y-1.5">
                                                {/* <Label htmlFor="framework">Framework</Label> */}
                                                {el[2]}
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Click</Button>
                                    <Button>
                                        <DollarSign size={17} />
                                        <div>{Number(el[4])}</div>
                                    </Button>
                                </CardFooter>
                            </Link>
                        </Card>
                        <div></div>
                        <div></div>


                        {/* <div>{el[3]}</div> */}
                        {/* <div>{el[4]}</div> */}
                        {/* <Image src={String(el[4])} alt='Loading...' height={300} width={300} /> */}
                        {/* <div>{el[5]}</div> */}
                        {/* <div>{el[6]}</div> */}
                        {/* <div>{el[0]}</div> */}
                    </>
                ))
            }

            {/* {
                loginData
            } */}
        </div>
    )
}

export default AllCourse
