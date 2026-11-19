import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'swiper/css'
import P1 from '../assets/P1.png'
import P2 from '../assets/P2.png'
import P3 from '../assets/P3.png'
import P4 from '../assets/P4.png'
import P5 from '../assets/P5.png'
import P6 from '../assets/P6.png'
import P7 from '../assets/P7.png'
import P8 from '../assets/P8.png'

const images = [P1, P2, P3, P4, P5, P6, P7, P8]

function Hero() {
  const swiperRef = useRef(null)

  return (
    <section className='w-full px-[150] h-[100%]'>
      <div className='relative w-[81%] h-[100%] mx-auto flex items-center justify-center  overflow-hidden'>
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          rewind={true}
          slidesPerView={1}
          speed={900}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {images.map((P, i) => (
            <SwiperSlide key={i}>
              <div className='w-full aspect-[17/7] overflow-hidden'>
                <img
                  src={P}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* sol  */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className='absolute left-3 top-1/2 -translate-y-1/2 z-10 w-13 h-13 rounded-full bg-white/40 hover:bg-white flex items-center justify-center cursor-pointer shadow'
        >
          <ArrowLeft className='w-4 h-4 text-gray-900' />
        </button>

        {/* sağ  */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className='absolute right-3 top-1/2 -translate-y-1/2 z-10 w-13 h-13 rounded-full bg-white/40 hover:bg-white flex items-center justify-center cursor-pointer '
        >
          <ArrowRight className='w-4 h-4 text-gray-900' />
        </button>
      </div>
    </section>
  )
}

export default Hero