import Image from 'next/image'
import React from 'react'

const aboutPage = () => {
  return (
    <div>
        <div className='border h'>
            <Image src={'/985475.jpeg'} width={600} height={200} alt='office' className='object-cover w-full h-72' />
        </div>
    </div>
  )
}

export default aboutPage