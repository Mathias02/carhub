
"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Cable, Fuel, Gauge } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



const page = () => {

  const [item,setItem] = useState([]);
  const{productId} = useParams()

  const fetchedDataId = async () => {
    fetch(`http://localhost:3200/api/cars/${productId}`)
    .then((resp) => {
      console.log(resp)
        if(resp.status == 200){
         return resp.json()
        }
        throw new Error("gggggggggggr")
    })
    .then((data) =>{
      setItem(data);
      console.log(productId)
    })
    .catch((error) => {
      alert('unable to get data')
    })
  }
  
  useEffect(() =>{
    fetchedDataId()
  },[])


  return (
    <div>
       <div className='px-auto py-6 lg:py-12 px-10 border flex flex-col items-center'>
            <h1 className='py-3 text-3xl text-primary text-center'>{item.name}</h1>
            <div className='grid md:grid-cols-2'>
                 <Image src={'/cars/'+item.imageFile} width={650} height={400} alt='image' className='w-250 h-200 object-cover' />
                <div>
                    <div className='py-9'>
                      <h2 className='mb-3 text-left text-xl text-primary'>${item.price}/day</h2>
                      <p className='tracking-wide text-left text-[14px]'>{item.description}</p>
                    </div>
                    <div className='flex justify-center gap-16'>
                            <Gauge /> <Cable /> <Fuel /> 
                    </div>
                    <div className='flex justify-center gap-10 items-center px-3 mb-6'>
                        <p>Mileage</p>
                        <p>electric</p>
                        <p>diesel</p>
                    </div>
                </div> 
            </div>
            <Link href={"/booking"} className='py-2 px-6 lg:px-12 lg:py-4 border rounded-lg bg-purple-900 text-white ms:mb-6'>Book me now</Link>
      </div>
    </div>
  )
}

export default page