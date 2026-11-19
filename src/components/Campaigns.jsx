import React from 'react'
import { Link } from 'react-router-dom'
import kampaniyaa1 from '../assets/kampaniyall1.jpg'
import kampaniyaa5 from '../assets/kampaniyaa5.jpg'
import kampaniyaa2 from '../assets/kampaniyall2.jpg'
import kampaniyaa3 from '../assets/kampaniyall3.jpg'
import kampaniyaa4 from '../assets/kampaniyall4.jpg'

function Campaigns() {
  return (
    <>
      <div className='w-[100%] h-[1200px] px-[150px]'>
        <div className="yu w-[100%] h-[1200px] flex flex-col gap-[30px]">
          <div className="bir w-[100%] h-[70px] flex flex-col justify-center items-center">
            <h1 className='text-[30px] font-medium'>Kampaniyalar</h1>
            <div className="y w-[100%] h-[35px] flex justify-between items-center">
              <div className="h w-[50%] h-[25px] flex justify-end items-center"><div className="group relative w-fit py-[0.5]"><Link to="/" className='text-[#19191A] font-medium transition-colors duration-300 group-hover:text-red-600 text-[13px]'>Bahar Store</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
              <span className='w-[50%] h-[25px] flex justify-start items-center text-[13px] text-[#B5B5B5] pt-[3px] pl-[8px] '>/ Kampaniyalar</span>
            </div>
          </div>

          <div className="card w-[100%] h-[1100px] flex justify-between flex-wrap">
            <div className="card1 w-[290px] h-[500px] rounded-t-[15px] bg-[#FAFAFA] flex flex-col gap-[15px]">
              <div className="h-[350px]"><img className='h-[350px] rounded-t-[15px]' src={kampaniyaa1} alt="sekil" /></div>
              <div className="yu h-[150px] flex flex-col gap-[40px] pl-[20px]">
                <h3 className='font-medium'>Yeni ilə özəl endirim!</h3>
                <p className='text-[#4B4B4B]'>əldə yoxdur</p>
              </div>
            </div>

            <div className="card1 w-[290px] h-[500px] rounded-t-[15px] bg-[#FAFAFA] flex flex-col gap-[15px]">
              <div className="h-[350px]"><img className='h-[350px] rounded-t-[15px]' src={kampaniyaa2} alt="sekil" /></div>
              <div className="yu h-[150px] flex flex-col gap-[40px] pl-[20px]">
                <h3 className='font-medium'>8 Marta özəl 10% endirim.</h3>
                <p className='text-[#4B4B4B]'>əldə yoxdur</p>
              </div>
            </div>

            <div className="card1 w-[290px] h-[500px] rounded-t-[15px] bg-[#FAFAFA] flex flex-col gap-[15px]">
              <div className="h-[350px]"><img className='h-[350px] rounded-t-[15px]' src={kampaniyaa3} alt="sekil" /></div>
              <div className="yu h-[150px] flex flex-col gap-[40px] pl-[20px]">
                <h3 className='font-medium'>Black Friday</h3>
                <p className='text-[#4B4B4B]'>əldə yoxdur</p>
              </div>
            </div>

            <div className="card1 w-[290px] h-[500px] rounded-t-[15px] bg-[#FAFAFA] flex flex-col gap-[15px]">
              <div className="h-[350px]"><img className='h-[350px] rounded-t-[15px]' src={kampaniyaa4} alt="sekil" /></div>
              <div className="yu h-[150px] flex flex-col gap-[40px] pl-[20px]">
                <h3 className='font-medium'>6 il sizinlə</h3>
                <p className='text-[#4B4B4B]'>əldə yoxdur</p>
              </div>
            </div>

            <div className="card1 w-[290px] h-[500px] rounded-t-[15px] bg-[#FAFAFA] flex flex-col gap-[15px]">
              <div className="h-[350px]"><img className='h-[350px] rounded-t-[15px]' src={kampaniyaa5} alt="sekil" /></div>
              <div className="yu h-[150px] flex flex-col gap-[40px] pl-[20px]">
                <h3 className='font-medium'>Baku Shopping Festival</h3>
                <p className='text-[#4B4B4B]'>əldə yoxdur</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Campaigns