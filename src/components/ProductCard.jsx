import React, { useState } from 'react'
import { TbAwardFilled } from "react-icons/tb";
import { PiSealPercentFill } from "react-icons/pi";
import { TiStarburst } from "react-icons/ti";
import { IoMdTrendingDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { TbShoppingBagPlus } from "react-icons/tb";

const ProductCard = ({item}) => {

    const [hover,setHover] = useState(false)

    const {barcode,brand,categories,disc_percent,id,
        image,in_stock,is_best_seller,is_new,name,
        old_price,packaging,price,product_code,raiting,
        running_out,slug,volume,volume_unit,weight,weight_unit} = item
    return(
        <div 
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        key={id}
        className='w-[290px] h-[450px] cursor-pointer'>
            <div 
            style={hover?{height:"520px",zIndex:"2",backgroundColor:"white"}:{}}
            className='w-[290px] h-[450px] border-1 border-[gray]/30 rounded-[20px] flex flex-col items-start px-[20px] py-[10px] relative'>
                <div className='forImg self-center w-[250px] h-[250px] rounded-[10px] overflow-hidden flex justify-center items-center relative'>
                    <img
                    draggable={false} 
                    style={hover?{scale:"1.2"}:{}}
                    className='h-[250px] transition-all duration-500' src={image}/>
                    {is_new==1 && 
                    <div className='text-[#1E68B9] bg-[#E4F0FC] flex items-center gap-x-[5px] px-[15px] py-[5px] rounded-[20px] absolute top-0 right-0'>
                        <TiStarburst className='text-[22px]'/>
                        <p className='text-[12px] font-[600]'>Yeni</p>
                    </div>}
                    {in_stock==0 &&
                    <div className='text-[#E77E11] bg-[#F9EBDB] flex items-center gap-x-[5px] px-[15px] py-[5px] rounded-[20px] absolute top-0 left-0'>
                        <IoMdTrendingDown className='text-[26px]'/>
                        <p className='text-[12px] font-[600]'>Stokda yoxdur</p>
                    </div>}
                </div>
                <p className='pt-[10px] text-[14px] font-[600]'>{name.length>45?name.slice(0,45).toUpperCase()+"...":name.toUpperCase()}
                </p>
                <div className='pt-[20px] flex items-center gap-x-[15px]'>
                    {disc_percent>0 &&
                    <p className='bg-[#FEECED] text-[12px] font-[600] text-[#EA0B17] border-1 border-[#EA0B17] px-[12px] py-[6px] rounded-[20px]'>-{disc_percent}%</p>}
                    {disc_percent>0 &&
                    <p className='line-through decoration-[#EA0B17] text-[14px]'>{old_price} ₼</p>}
                    <p className='text-[22px] font-[700]'>{price} ₼</p>
                </div>
                <div className='h-[60px] w-[100%] flex items-end gap-x-[10px]'>
                    {is_best_seller==1 && 
                    <div className='text-[#2D9D3F] bg-[#EBFDEE] flex items-center gap-x-[5px] px-[15px] py-[5px] rounded-[20px]'>
                        <TbAwardFilled className='text-[26px]'/>
                        <p className='text-[12px] font-[600]'>Bestsell...</p>
                    </div>}
                    {disc_percent>0 && 
                    <div className='text-[#EA0B17] bg-[#FCE0E2] flex items-center gap-x-[5px] px-[15px] py-[5px] rounded-[20px]'>
                        <PiSealPercentFill className='text-[26px]'/>
                        <p className='text-[12px] font-[600]'>Endirim</p>
                    </div>}
                </div>
                {hover && 
                    <div className='w-[100%] pt-[30px] flex justify-between'>
                        <button className='w-[65px] h-[50px] rounded-[5px] border-[gray]/50 border-1 flex justify-center items-center cursor-pointer'>
                            <AiOutlineHeart className='text-[25px] text-[gray]'/>
                        </button>
                        <button className='bg-[black] w-[175px] h-[50px] rounded-[5px] text-[white] cursor-pointer flex items-center justify-center gap-x-[10px]'>
                            <TbShoppingBagPlus className='text-[25px] text-[gray]'/>
                            <p className='font-[600] text-[16px]'>Səbətə at</p>
                        </button>
                    </div>}
            </div>
        </div>
    )
    
}

export default ProductCard
