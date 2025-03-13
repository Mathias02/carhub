"use client"

import ListProduct from '@/app/_components/ListProduct';
import React, { useEffect, useState } from 'react';




export default function Home() {

  const[lists, setLists] = useState([]);

  const fetchedData = () => {
        fetch('http://localhost:4000/cars')
          .then((resp) => {
              if(resp.ok){
               return resp.json()
              }

              throw new Error()
          })
          .then((data) =>{
            console.log(data)
            setLists(data)
          })
          .catch((error) => {
            alert('unable to get data')
          })
  }

  useEffect(() =>{
    fetchedData()
  },[])

  return (
    <div>
      <div className='px-5'>
        <h1 className='mb-5 ml-4 text-4xl text-primary'>Types of cars in the hub</h1>
        <div className='p-2 grid md:grid-cols-3 gap-3'>
           {
            lists&&lists.map((list, index) => {
              return(
                <div key={index}>
                  <ListProduct list={list}/>
                </div>
              )
            })
           }
        </div>
      </div>
    </div>
  )
}