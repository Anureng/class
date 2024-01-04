"use client"
import { createContractObject } from '@/app/Contract/ContractDetails'
import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
import React, { ChangeEvent, useState } from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { fireStore } from '../../firebase.config';
import { doc, setDoc } from 'firebase/firestore';


const CreateProduct = () => {

    const [nameData, setNameData] = useState('')
    const [descriptionData, setDescriptionData] = useState('')
    const [categoryData, setCategoryData] = useState('')
    const [priceData, setPriceData] = useState(0)
    const [imageData, setImageData] = useState('')
    const [videoData, setVideoData] = useState('')
    const [idCount, setIdCount] = useState(0)

    const handleUploadImage = (result: CldUploadWidgetResults) => {
        const info = result.info as object;
        if ("public_id" in info && "secure_url" in info) {
            setImageData(info.secure_url as string)
        }
        console.log(imageData);

    }

    const handleUploadVideo = (result: CldUploadWidgetResults) => {
        const info = result.info as object;
        if ("public_id" in info && "secure_url" in info) {
            setVideoData(info.secure_url as string)
        }
    }

    const addData = async () => {
        try {
            const contract = await createContractObject()
            const data = await contract.CreatePlaylist(nameData, descriptionData, categoryData, priceData, [imageData], [videoData])
            console.log(data);
            setIdCount(idCount + 1)
            if (data) {
                try {
                    await setDoc(doc(fireStore, "Teacher", `${idCount}`), {
                        name: nameData,
                        description: descriptionData,
                        category: categoryData
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

    const convertData = (event: ChangeEvent<HTMLInputElement>) => {
        const getValue = event.target.value;
        const convert = parseFloat(getValue);
        setPriceData(convert)
    }
    return (
        <div className='space-x-10'>
            {/* <div>
                <input type="text" value={nameData} onChange={(e) => setNameData(e.target.value)} placeholder='enter name' />
                <input type="text" placeholder='enter description' value={descriptionData} onChange={(e) => setDescriptionData(e.target.value)} />
                <input type="text" placeholder='enter ' value={categoryData} onChange={(e) => setCategoryData(e.target.value)} />
                <input type="text" placeholder='price' value={priceData} onChange={convertData} />
                <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadImage} >
                    Click to upload Image
                </CldUploadButton>
                <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadVideo} >
                    Click to upload Image
                </CldUploadButton>
                <button onClick={addData}>Click to Add</button>
            </div> */}

            <main className="w-screen  flex items-center justify-center p-8 mt-6">
                <Card className="w-3/4 md:w-1/2 lg:w-1/3 h-auto p-6 bg-white rounded-lg shadow-lg">
                    <CardHeader className="flex flex-row space-y-0 items-start gap-2">
                        <CardTitle className="text-2xl font-semibold text-gray-800">Add New Product</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-auto">
                        {/* <form className="grid gap-4 md:gap-6"> */}
                        <div className="grid gap-2 mb-4">
                            <Label className="text-base font-medium text-gray-600" htmlFor="name">
                                Name
                            </Label>
                            <Input className="p-3 rounded-md border-gray-300" id="name" placeholder="Product Name" value={nameData} onChange={(e) => setNameData(e.target.value)} type="text" />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <Label className="text-base font-medium text-gray-600" htmlFor="description">
                                Description
                            </Label>
                            <Textarea className="p-3 rounded-md border-gray-300" id="description" value={descriptionData} onChange={(e) => setDescriptionData(e.target.value)} placeholder="Product Description" />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <Label className="text-base font-medium text-gray-600" htmlFor="category">
                                Category
                            </Label>
                            <Input className="p-3 rounded-md border-gray-300" value={categoryData} onChange={(e) => setCategoryData(e.target.value)} id="price" placeholder="Product Category" type="Category" />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <Label className="text-base font-medium text-gray-600" htmlFor="price">
                                Price
                            </Label>
                            <Input className="p-3 rounded-md border-gray-300" value={priceData} onChange={convertData} id="price" placeholder="Product Price" type="number" />
                        </div>
                        <div className="grid gap-2 mb-4">
                            <Label className="text-base font-medium text-gray-600" htmlFor="image">
                                Image
                            </Label>
                            <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadImage} >
                                Click to upload Image
                            </CldUploadButton>

                        </div>
                        <div className="grid gap-2 mb-4">
                            <Label className="text-base font-medium text-gray-600" htmlFor="video">
                                Cover Image
                            </Label>
                            <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadVideo} >
                                Click to upload Image
                            </CldUploadButton>
                        </div>
                        <Button onClick={addData} className="bg-blue-500 text-white p-3 rounded-md shadow-md" size="lg">
                            Add Product
                        </Button>
                        {/* </form> */}
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default CreateProduct
