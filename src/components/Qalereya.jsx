import React from 'react'
import G1 from '../assets/G1.png'
import G2 from '../assets/G2.png'
import G3 from '../assets/G3.png'
import G4 from '../assets/G4.png'
import G5 from '../assets/G5.png'
import G6 from '../assets/G6.png'
import G7 from '../assets/G7.png'
import G8 from '../assets/G8.png'
import G9 from '../assets/G9.png'
import G10 from '../assets/G10.png'
import G11 from '../assets/G11.png'
import G12 from '../assets/G12.png'

const Gallery = () => {
  return (
    <section className='w-[100%] h-[1580px] bg-[#161616] flex flex-col items-center pt-[40px] gap-[48px]'>

      <h1 className='text-[32px] text-white font-bold'>Qalereya</h1>

      <main className='w-[100%] h-[1343px] px-[250px] flex justify-center gap-[20px]'>

        {/* 1-ci  */}
        <div className="col-1 w-[300px] h-[1280px] flex flex-col gap-[65px]">
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G2} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G7} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G9} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
        </div>

       
        <div className="col-2 w-[300px] h-[1280px] flex flex-col gap-[65px] mt-[63px]">
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G1} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G6} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G10} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
        </div>

        {/* 3-cü  */}
        <div className="col-3 w-[300px] h-[1280px] flex flex-col gap-[65px]">
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G3} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G5} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G11} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
        </div>

      
        <div className="col-4 w-[300px] h-[1280px] flex flex-col gap-[65px] mt-[63px]">
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G4} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G8} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
          <div className="card w-[300px] h-[360px] rounded-3xl overflow-hidden">
            <img src={G12} alt="" className='w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer' />
          </div>
        </div>

      </main>
    </section>
  )
}

export default Gallery