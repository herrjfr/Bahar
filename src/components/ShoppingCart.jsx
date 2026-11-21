
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbShoppingBag } from "react-icons/tb";
import { ProductsContext } from '../context/ProductsContext';
import CardForCart from './CardForCart';

function ShoppingCart() {

  const { cart,products } = useContext(ProductsContext)
 
  const qiymet = cart.reduce((sum, element) => {
    const item = products.find(x => x.id == element.id)
    return sum + item.old_price * element.count
  }, 0)

  const endirim = cart.reduce((sum,element)=>{
    const item = products.find(x=>x.id == element.id)
    return sum + (item.old_price - item.price) * element.count
  },0)

  const umumiQiymet = qiymet-endirim

  return (
    <div className='w-full px-[150px]'>
      <div className='w-full flex flex-col justify-between items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[29px] font-semibold leading-normal font-inter-tight'>Səbət</h1>
          <p>
            <span className='relative inline-block cursor-pointer group'>
              <Link to={"/"}>
                <span className='text-[13px] font-medium transition-colors duration-500 delay-100 group-hover:text-[#F0434A]'>
                  Bahar Store
                </span>
              </Link>
              <span className='absolute left-0 -bottom-[2px] h-[1px] w-full origin-left scale-x-0 bg-[#F0434A] transition-transform duration-500 delay-100 group-hover:scale-x-100'></span>
            </span>
            <span className='ml-[5px] mr-[17px]'> / </span>
            <span className='text-[#C3C3C3] text-[12px] font-inter-tight cursor-default'>Səbət</span>
          </p>
        </div>
        {cart.length == 0 &&
          <div className='w-full flex flex-col pb-[180px]'>
            <div className='flex flex-col items-center gap-5'>

              <div className='flex flex-col items-center gap-[10px] pt-[100px] pb-[30px]'>
                <TbShoppingBag className='text-[40px] text-[red]' />
                <h2 className='text-[24px] font-medium font-inter-tight pt-[20px]'>Səbətiniz boşdur</h2>
                <div>
                  <p className='text-[#676767] text-[16px] text-center font-inter-tight'>Səbətinizdə məhsul tapılmadı. Məhsullara baxmaq üçün ana </p>
                  <p className='text-[#676767] text-[16px] text-center font-inter-tight'>səhifəyə keçid edə bilərsiniz</p>
                </div>

              </div>

              <Link to={"/"}>
                <button className='border border-black w-[140px] h-[36px] rounded-[5px] text-[14px] font-medium bg-white text-black cursor-pointer transition-colors duration-500 hover:bg-black hover:text-white'>
                  ANA SƏHİFƏ
                </button>
              </Link>
            </div>
          </div>}
        {cart.length > 0 &&
          <div className='w-full flex flex-col pt-[20px]'>
            <p className='text-[35px] font-[600]'>Səbət</p>
            <div className='flex justify-between'>
              <div className='flex items-center gap-x-[10px]'>
                <p className='text-[14px]'>Məhsullar</p>
                <span className='w-[30px] h-[1px] bg-black mt-[1px]'></span>
                <p className='text-[14px] text-[gray]'>{cart.length} Məhsul</p>
              </div>
              <p className='text-[14px] font-[500] text-black/70'>Artıq qeydiyyatdan keçmisiniz? <Link to={"/login"} className='text-[red] pl-[10px]'>Daxil ol</Link></p>
            </div>
            <div className='Alt w-full flex justify-between items-start pt-[30px] pb-[150px]'>
              <div className='Cards w-[820px] flex flex-col gap-y-[20px]'>
                {cart.map(x=>{
                  const item = products.find(element=>element.id == x.id)
                  return <CardForCart key={x.id} item={item}/>
                })}
              </div>
              <div className='Price w-[360px] bg-[#F4F4F4] rounded-[15px] px-[40px] py-[30px]'>
                <p className='text-[12px] text-black/80 pb-[5px]'>Məhsulun qiyməti</p>
                <p className='text-[20px] font-[600] pb-[18px]'>{qiymet.toFixed(2)} ₼</p>

                <p className='text-[12px] text-black/80 pb-[5px]'>Endirim</p>
                <p className='text-[20px] font-[600] pb-[18px] text-[green]/80'>{endirim.toFixed(2)} ₼</p>

                <p className='text-[12px] text-black/80 pb-[5px]'>Çatdırılma</p>
                <p className='text-[20px] font-[600] pb-[18px]'>Pulsuz</p>

                <a className='underline text-[12px]' href="/">Çatdırılma və geri qaytarma şərtləri</a>

                <div className='flex justify-between pt-[16px] pb-[18px]'>
                  <p className='text-[20px] font-[600] text-[green]/80'>Ümumi</p>
                  <p className='text-[20px] font-[600] text-[green]/80'>{umumiQiymet.toFixed(2)} ₼</p>
                </div>

                <p className='text-[12px] text-black/80 pb-[6px]'>Ad Soyad</p>
                <input type="text"
                className='bg-white w-full h-[45px] rounded-[8px] focus:outline-none text-[12px] font-[600] indent-[20px]'/>

                <p className='text-[12px] text-black/80 pb-[6px] pt-[18px]'>Şəhər</p>
                <select type="text"
                className='bg-white w-full h-[45px] rounded-[8px] focus:outline-none text-[12px] font-[600] indent-[20px]'>
                  <option>Metro 28 May</option>
                </select>

                <p className='text-[12px] text-black/80 pb-[6px] pt-[18px]'>Ünvan</p>
                <input type="text"
                className='bg-white w-full h-[45px] rounded-[8px] focus:outline-none text-[12px] font-[600] indent-[20px]'/>

                <p className='text-[12px] text-black/80 pb-[6px] pt-[18px]'>Nömrə</p>
                <div className='flex gap-x-[2px]'>
                  <div className='h-[45px] w-[90px] bg-white rounded-[8px_0_0_8px] flex justify-center items-center'>
                    <p className='select-none text-[14px] text-black/70 font-[600]'>+994</p>
                  </div>
                  <input type="text"
                  className='bg-white w-full h-[45px] rounded-[0_8px_8px_0] focus:outline-none text-[12px] font-[600] indent-[20px]'/>
                </div>

                <p className='text-[16px] font-[600] text-[green]/70 pt-[30px] pb-[10px]'>Ödəniş metodu</p>
                <div className='flex items-center gap-x-[16px] pb-[10px]'>
                  <input 
                  className="w-[16px] h-[16px] accent-black cursor-pointer"
                  name='payType' type="radio"/>
                  <p className='text-[16px] font-[600]'>Nağd</p>
                </div>
                <div className='flex items-center gap-x-[16px]'>
                  <input 
                  className="w-[16px] h-[16px] accent-black cursor-pointer"
                  name='payType' type="radio"/>
                  <p className='text-[16px] font-[600]'>Onlayn</p>
                </div>
                <button className='py-[10px] bg-black rounded-[8px] text-center w-[100%] cursor-pointer text-white mt-[30px] transition-all duration-500 hover:bg-black/60'>Sifariş et</button>
              </div>
            </div>
          </div>
        }


      </div>
    </div>
  )
}

export default ShoppingCart
