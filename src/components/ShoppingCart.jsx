
import React from 'react'
import { Link } from 'react-router-dom'

function ShoppingCart() {
  return (
    <div className='w-full h-[700px]'>
      <div className='w-full h-[500px] flex flex-col justify-between items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-[29px] font-semibold leading-normal font-inter-tight'>Səbət</h1>
          <p>
            <span className='relative inline-block cursor-pointer group'>
              <span className='text-[13px] font-medium transition-colors duration-500 delay-100 group-hover:text-[#F0434A]'>
                Bahar Store
              </span>
              <span className='absolute left-0 -bottom-[2px] h-[1px] w-full origin-left scale-x-0 bg-[#F0434A] transition-transform duration-500 delay-100 group-hover:scale-x-100'></span>
            </span>
            <span className='ml-[5px] mr-[17px]'> / </span>
            <span className='text-[#C3C3C3] text-[12px] font-inter-tight cursor-default'>Səbət</span>
          </p>
        </div>

        <div className='w-full h-[300px] flex flex-col'>


          <div className='flex flex-col items-center gap-5'>
            <svg
              viewBox="0 0 48 48"
              className="w-14 h-14 text-[#F0434A]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M17 16C17 11.5817 20.134 8 24 8C27.866 8 31 11.5817 31 16"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M11 16H37L35.2 37.4C35.085 38.7798 33.9324 39.84 32.548 39.84H15.452C14.0676 39.84 12.915 38.7798 12.8 37.4L11 16Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <circle cx="19.5" cy="25" r="2" fill="currentColor" />
              <circle cx="28.5" cy="25" r="2" fill="currentColor" />
            </svg>
            <div className='flex flex-col items-center gap-[10px]'>
              <h2 className='text-[24px] font-medium font-inter-tight'>Səbətiniz boşdur</h2>
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
        </div>

      </div>
    </div>
  )
}

export default ShoppingCart
