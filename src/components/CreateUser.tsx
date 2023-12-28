"use client"
import { createContractObject } from '@/app/Contract/ContractDetails'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Navbar from './Navbar'

const CreateUser = () => {

  const [studentData, setStudentData] = useState<any>("")
  // const [teacherData, setTeacherData] = useState()
  const [nameData, setNameData] = useState("")
  console.log(nameData);
  console.log(studentData);

  const { address, isConnecting, isDisconnected } = useAccount()
  const handleClickData = async () => {
    const contract = await createContractObject()
    const data = await contract.createUser(address, nameData, studentData)
    console.log(data);
  }

  const handleViewData = async () => {
    try {
      const contract = await createContractObject()
      const data = await contract.getUser()
      console.log(data);
    } catch (error) {
      toast.error(`Error ${error}`)
    }
    // Update the document title using the browser API
  }

  useEffect(() => {
    // Update the document title using the browser API
    handleViewData()
  });
  const handleValueChange = (value: any) => {
    setStudentData(parseInt(value, 10));
  };
  return (
    <div className='  mt-40 flex item-center  justify-center  space-x-32'>
      <div className='flex  gap-x-28'>
        <Image src="/login.jpg" width={400} height={100} alt='Loading...' />
        {/* <button onClick={handleClickData}>click button</button>s */}
        <Card className="w-[450px] bg-white h-[350px] rounded-xl shadow-xl" >
          <CardHeader>
            <CardTitle>Create User</CardTitle>
            <CardDescription>Enter name and choose Student or teacher.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Name</Label>
                  <Input type="email" id="email" placeholder="Email" className='rounded-xl   border border-gray-300 shadow-lg' value={nameData} onChange={(e) => setNameData(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select onValueChange={handleValueChange}
                    value={studentData}>
                    <SelectTrigger className='rounded-xl   border border-gray-300 shadow-lg' >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className='bg-white' >
                      <SelectItem className='text-black' value={"2"} >Student</SelectItem>
                      <SelectItem className='text-black' value={"1"}>Teacher</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <Button >Cancel</Button> */}
            <Button className='rounded-xl   border bg-black text-white border-gray-300 shadow-lg' variant="outline" onClick={handleClickData}>click button</Button>
          </CardFooter>
          <ToastContainer />
        </Card>
      </div>
    </div>
  )
}

export default CreateUser