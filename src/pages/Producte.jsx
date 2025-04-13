import React from 'react'
import { axiosInstance } from '../utils';
import { useLoaderData } from 'react-router-dom';

export const loader = async({params})=>{
    const req = await axiosInstance(`./product/${params.id}`);
    return req.data;
}

function Producte() {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
      Producte
    </div>
  )
}

export default Producte
