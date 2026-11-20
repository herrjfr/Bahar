import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { TiStarburst } from "react-icons/ti";
import { TbAwardFilled } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import {useProducts} from "../context/ProductsData"

const Products = () => {

  const { products } = useProducts();

  const [bestSeller, setBestSeller] = useState([])
  const [newPrd, setNewPrd] = useState([])
  const [discount, setDiscount] = useState([])

  const [newHover,setNewHover] = useState(false)
  const [bestHover,setBestHover] = useState(false)
  const [discHover,setDiscHover] = useState(false)
  
  const [select,setSelect] = useState(2)



  useEffect(() => {
    setBestSeller(products.filter(x => x.is_best_seller && x.name.length>30).slice(0, 16))
    setNewPrd(products.filter(x => x.is_new && x.name.length>30).slice(0, 16))
    setDiscount(products.filter(x => x.disc_percent && x.name.length>30).slice(0, 16))
  }, [])



  return (
    <section className='px-[150px] pt-[90px] flex flex-col items-center'>
      <div className='flex w-[440px] justify-between items-center text-[20px] font-[600] text-[gray]/50 pb-[20px]'>
        <div
        onClick={()=>setSelect(1)}
        className='flex gap-x-[8px] items-center hover:text-black/70 cursor-pointer'>
          <TiStarburst 
          style={select==1?{color:"red"}:{}}
          className='text-[30px] transition-all duration-400'/>
          <p 
          style={select==1?{fontSize:"25px",color:"black"}:{}}
          className='transition-all duration-400'>
          Yeni
          </p>
        </div>
        
        <span className='w-[2px] bg-[gray]/50 h-[20px]'></span>

        <div 
        onClick={()=>setSelect(2)}
        className='flex gap-x-[8px] items-center hover:text-black/70 cursor-pointer'>
          <TbAwardFilled 
          style={select==2?{color:"red"}:{}}
          className='text-[30px] transition-all duration-400'/>
          <p 
          style={select==2?{fontSize:"25px",color:"black"}:{}}
          className='transition-all duration-400'>
          Bestseller
        </p>
        </div>
        
        <span className='w-[2px] bg-[gray]/50 h-[20px]'></span>

        <div 
        onClick={()=>setSelect(3)}
        className='flex gap-x-[8px] items-center hover:text-black/70 cursor-pointer'>
          <CiDiscount1 
          style={select==3?{color:"red"}:{}}
          className='text-[30px] transition-all duration-400'/>
          <p 
          style={select==3?{fontSize:"25px",color:"black"}:{}}
          className='transition-all duration-400'>
          Endirim
        </p>
        </div>
        
      </div>
      <div className='Cards flex justify-between flex-wrap gap-y-[20px]'>
        {select==1 && newPrd.map(x=>{
          return <ProductCard key={x.id} item={x}/>
        })}
        {select==2 && bestSeller.map(x=>{
          return <ProductCard key={x.id} item={x}/>
        })}
        {select==3 && discount.map(x=>{
          return <ProductCard key={x.id} item={x}/>
        })}
      </div>
      <button className='mt-[55px] mb-[30px] px-[40px] py-[10px] rounded-[10px] bg-black text-white text-[16px] font-[500] cursor-pointer hover:bg-black/70 transition-all duration-500'>Hamısını göstər</button>
    </section>
  )
}

export default Products
