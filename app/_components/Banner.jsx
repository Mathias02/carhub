
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-slate-500 -z-10'>
        <div className='bg-gradient-to-tr from-blue-950 to-purple-300 h-92 relative'>
            <Image src={'/565214.jpg'} alt='banner' width={600} height={300} className='object-cover absolute w-full h-full mix-blend-overlay -z-5' /> 
            <div className='flex flex-col justify-center items-center p-48'>
                <h1 className='text-4xl lg:text-7xl text-left mb-14 font-bold text-white'><span className='text-yellow-950'>The car rental </span>is within your finger tips</h1>
            </div>     
           
        </div>
       
    </div>
  )
}

export default Banner