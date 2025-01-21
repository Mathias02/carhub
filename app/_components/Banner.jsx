
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-slate-500 -z-10'>
        <div className='bg-gradient-to-tr from-blue-950 to-purple-300 h-92 relative'>
            <Image src={'/565214.jpg'} alt='banner' width={600} height={300} className='object-cover absolute w-full h-full mix-blend-overlay -z-5' /> 
            <div className='flex flex-col justify-center items-center p-48'>
                <h1 className='text-4xl lg:text-6xl text-left mb-14 font-bold'><span className='text-white'>The car rental </span>is within your finger tips</h1>
                <Link href={'/product'} className='relative cursor-pointer border bg-primary hover:bg-purple-950 hover:text-blue-400 text-white lg:px-7 py-3 px-6 lg:py-3 rounded-full lg:text-[18px] text-xl'>Get Started</Link>
            </div>     
           
        </div>
       
    </div>
  )
}

export default Banner