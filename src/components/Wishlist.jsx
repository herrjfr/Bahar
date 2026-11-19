
import React from 'react'

function Wishlist() {
  return (
    <div className='w-full flex flex-col items-center gap-[40px] h-[510px]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[29px] font-semibold leading-normal font-inter-tight'>Favoritlər</h1>

        <p className='flex items-center'>
          <span className='relative inline-block cursor-pointer group'>
            <span className=' text-[13px] font-medium transition-colors duration-500 delay-100 group-hover:text-[#F0434A]'>
              Bahar Store
            </span>
            <span className='absolute left-0 -bottom-[2px] h-[1px] w-full origin-left scale-x-0 bg-[#F0434A] transition-transform duration-500 delay-100 group-hover:scale-x-100'></span>
          </span>

          <span className='ml-[5px] mr-[17px]'>/</span>

          <span className='text-[#C3C3C3] text-[12px] font-inter-tight cursor-default'>
            Favoritlər
          </span>
        </p>
      </div>
      <button className='group w-[295px] h-[255px] flex flex-col items-center justify-center gap-[20px] border-1 border-[#EAE1E1] rounded-[16px] cursor-pointer'>
        <span className='transition-colors duration-300 group-hover:text-[#F0434A]'>
          <svg width="37" height="37" viewBox="0 0 36 36" fill="none">
            <path d="M18 2V34M2 18H34" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>

        <span className='text-[15px] font-medium font-inter-tight transition-colors duration-300 group-hover:text-[#F0434A]'>
          MƏHSULLARA KEÇİD EDİN
        </span>

      </button>
    </div>
  )
}

export default Wishlist
