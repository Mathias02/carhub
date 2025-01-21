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
                    <Link className={`${'path==/?text-primary:'}`} href={'/'}>Home</Link>
                </li>
                <li>
                    <Link className='text-primary cursor-pointer' href={'/testimonials'}>testimonials</Link>
                </li>
                <li>
                    <Link className='text-primary cursor-pointer' href={'/about'}>about</Link>
                </li>
                <li>
                    <Link className='text-primary cursor-pointer' href={'/contact'}>contact</Link>
                </li>
            </ul>
            <Image src={'/hamburger.png'} width={20} height={20} alt='logo' className='md:hidden text-2xl w-6 cursor-pointer' />
        </div>
    </div>
  )
}

export default Header