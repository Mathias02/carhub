import { Cable, Fuel, Gauge} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListProduct = ({list}) => {
  return (
    <div>
        <div className='border text-center flex flex-col'>
            <Image
                alt="abc"
                src={'http://localhost:4000/cars/' + list.imageFile}
                width={150}
                height={100}
                className="h-44 w-96 object-contain sm:h-60 lg:h-82"
            />
            <div className='px-4 mb-2 text-left'>
                <h3 className="text-lg font-bold text-primary sm:text-xl text-left mb-3">{list?.brand}</h3>
                <p className="max-w-sm text-gray-700 text-left">
                    {list?.description}
                </p>
                <p className='mt-2 mb-3'>${list.price}/day</p>
            </div>
            <div className='flex justify-center gap-16'>
                <Gauge /> <Cable /> <Fuel /> 
            </div>
            <div className='flex justify-center gap-10 items-center px-4'>
                <p>Mileage</p>
                <p>electric</p>
                <p>diesel</p>
            </div> 
            <Link href={`/booking/${list.id}`} className='px-5 py-3 bg-primary text-white mt-2 rounded-full hover:bg-purple-950 hover:text-blue-400'>Go ahead rent me</Link>
        </div>
    </div>
  )
}

export default ListProduct