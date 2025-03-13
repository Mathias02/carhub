"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {

const path = usePathname()

  return (
    <div className=''>
        <div className='flex justify-around p-5 items-center'>
            <div className='mr-8 font-semibold text-2xl text-primary'>CarRental</div>
            <ul className='hidden md:flex gap-4 ml-5'>
                <li>
                    <Link className={`${path==='/'?'bg-purple-900 p-2 px-6 rounded-sm':''} text-gray-400`} href={'/'}>Home</Link>
                </li>
                <li>
                    <Link className={`${path==='/product'?'bg-purple-900 p-2 px-6 rounded-sm':''} text-gray-400`} href={'/product'}>Product</Link>
                </li>
                <li>
                    <Link className={`${path==='/testimonials'?'bg-purple-900 p-2 px-6 rounded-sm':''} text-gray-400`} href={'/testimonials'}>testimonials</Link>
                </li>
                <li>
                    <Link className={`${path==='/about'?'bg-purple-900 p-2 px-6 rounded-sm':''} text-gray-400`} href={'/about'}>about</Link>
                </li>
                <li>
                    <Link className={`${path==='/contact'?'bg-purple-900 p-2 px-6 rounded-sm':''} text-gray-400`} href={'/contact'}>contact</Link>
                </li>
            </ul>
            <Image src={'/hamburger.png'} width={20} height={20} alt='logo' className='md:hidden text-2xl w-6 cursor-pointer' />
        </div>
    </div>
  )
}

export default Header