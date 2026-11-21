
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import ProductCard from './ProductCard'

function Wishlist() {

  const { wishlist, products } = useContext(ProductsContext)

  return (
    <div className='w-full flex flex-col items-center px-[150px]'>
      <div className='flex flex-col items-center pb-[40px]'>
        <h1 className='text-[29px] font-semibold leading-normal font-inter-tight'>Favoritlər</h1>

        <p className='flex items-center'>
          <span className='relative inline-block cursor-pointer group'>
            <Link to={"/"}>
              <span className=' text-[13px] font-medium transition-colors duration-500 delay-100 group-hover:text-[#F0434A]'>
                Bahar Store
              </span>
            </Link>
            <span className='absolute left-0 -bottom-[2px] h-[1px] w-full origin-left scale-x-0 bg-[#F0434A] transition-transform duration-500 delay-100 group-hover:scale-x-100'></span>
          </span>

          <span className='ml-[5px] mr-[17px]'>/</span>

          <span className='text-[#C3C3C3] text-[12px] font-inter-tight cursor-default'>
            Favoritlər
          </span>
        </p>
      </div>
      {wishlist.length>0 &&
      <div className='w-full flex flex-wrap gap-x-[20px] gap-y-[30px] pb-[30px]'>
        {wishlist?.map(x => {
          let card = products.find(element => element.id == x)
          return <ProductCard item={card} />
        })}
      </div>}
      <Link to={"/"}>
        <button className='group w-[295px] h-[255px] flex flex-col items-center justify-center gap-[20px] border-1 border-[#EAE1E1] rounded-[16px] cursor-pointer mb-[100px]'>
          <span className='transition-colors duration-300 group-hover:text-[#F0434A]'>
            <svg width="37" height="37" viewBox="0 0 36 36" fill="none">
              <path d="M18 2V34M2 18H34" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>

          <span className='text-[15px] font-medium font-inter-tight transition-colors duration-300 group-hover:text-[#F0434A]'>
            MƏHSULLARA KEÇİD EDİN
          </span>

        </button>
      </Link>

    </div>
  )
}

export default Wishlist
