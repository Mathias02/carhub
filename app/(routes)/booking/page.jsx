import Link from 'next/link';
import React from 'react'

const page = () => {


const details = {
  fname: '',
  lname: '',
  email: '',
  dateFrom: '',
  dateTo: '',
  licenceNumber: '',
  checkMale: '',
  checkFemale: '',
  comments: ''
}


  return (
<div>
  <div className='max-w-screen-lg bg-white lg:h-screen mx-auto rounded-lg px-6 text-center sm:mb-12'>
    <div className='grid lg:grid-cols-2 mx-auto gap-3 items-center lg:py-12 mb-6'>
     
      <div className='px-auto py-3 lg:py-3 px-10 border'>
        <h1 className='py-2 text-xl text-primary'>Provide your details before booking</h1>
        <div>
          <form className='py-4'>
            <div>
                <label htmlFor="fname" className="focus:outline my-2 block text-xs font-medium text-gray-700 text-left">First Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="name"
                  className="px-3 mt-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
            </div>
            <div>
                <label htmlFor="lname" className="my-2 block text-xs text-left font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  placeholder="last name"
                  className=" px-3 mt-3 mb-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
            </div>
            <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 text-left">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@rhcp.com"
                  className="px-3 mt-3 mb-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
            </div>
            <div>
                <label htmlFor="licenceNumber" className="block text-xs font-medium text-gray-700 text-left">Driver's licence number or Passport number</label>
                <input
                  type="number"
                  name="licenceNumber"
                  placeholder="21542"
                  className="px-3 mt-3 mb-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
            </div>
             <div className='flex gap-6 justify-around'>
                <div className='mb-3'>
                  <label htmlFor="checkMale" className="block text-xs font-medium text-gray-700">From</label>
                  <input
                      type="date"
                      name="dateFrom"
                      className="mt-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
                </div>
                <div>
                    <label htmlFor="checkMale" className="block text-xs font-medium text-gray-700">To</label>
                    <input
                      type="date"
                      name="dateTo"
                      className="mt-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
                </div>
             </div>
             <div className='flex justify-start gap-5'>
                <div>
                  <label htmlFor="checkMale" className="block text-xs font-medium text-gray-700">Male</label>
                  <input
                    type="checkbox"
                    name="checkFale"
                    className="mt-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
                </div>
                <div>
                  <label htmlFor="checkFemale" className="block text-xs font-medium text-gray-700">Female</label>
                  <input
                    type="checkbox"
                    name="checkFemale"
                    className="mt-3 w-full rounded-md border-gray-200 shadow-sm sm:text-sm py-2" />
                </div>
             </div>
             <div>
                <label htmlFor="comments" className="mt-2 mb-2 block text-sm font-medium text-gray-700 text-left">Comments</label>
                 <textarea
                    id="OrderNotes"
                    name="comments"
                    className="mt-2 px-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                    rows="4"
                    placeholder="Enter any additional order notes...">
                 </textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Link href={'/payment'} className='px-11 text-white bg-primary border py-3 hover:bg-purple-950
     hover:text-blue-400 rounded-lg'>Submit
     </Link>
  </div>
</div>
  
  )
}

export default page