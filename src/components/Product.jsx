import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart, incrementAmount,decrementAmount } from '../app/feature/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function Product({product}) {
    const dispatch = useDispatch()
    const {cart} = useSelector((store)=> store.cart)
    const isAdded = cart.find((i)=>i.id==product.id)
    const handleBuy = (e)=>{
        e.preventDefault()
        dispatch(addToCart({
            ...product,
            amount:1
        }))
    }

  return (
    <section className='flex flex-col gap-5'>
    <img src={product.thumbnail}/>
   <Link to={`/producte/${product.id}`}>
    <h2>{product.title}</h2>
    {isAdded && (
        <div className='gap-7 flex'>
            <button class="inline-flex items-center justify-center order-1 h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition-colors rounded cursor-pointer bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent" for="id-c001" onClick={(e)=>{
                e.preventDefault()
                dispatch(incrementAmount(product.id))
            }}>+</button>
            <p className='text-4xl border-2 border-emerald-800 py-1 px-5'>{isAdded.amount}</p>
            <button class="inline-flex items-center justify-center order-1 h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition-colors rounded cursor-pointer bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent" for="id-c001" onClick={(e)=>{
                e.preventDefault()
                dispatch(decrementAmount(product.id))}}
            >-</button>
        </div>
    )}
     {!isAdded && (
        <>
            <button class="inline-flex items-center justify-center order-1 h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition-colors rounded cursor-pointer bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent" for="id-c001" onClick={(e)=>handleBuy(e)}>Buy</button>
        </>
    )}
    
   </Link>
   </section>
  )
}

export default Product
