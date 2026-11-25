import React, { useRef, useState } from 'react'

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import { Link } from 'react-router-dom'

const cards = [
  { id: 1, image: img1, title: 'Üzə Qulluq: Hər Mövsümə Uyğun Məsləhətlər' },
  { id: 2, image: img2, title: 'Saç Baxımı: Sağlam və Parlaq Saçların Sirri' },
  { id: 3, image: img3, title: 'Gözəllik Sirlərinə Toxunun: Gündəlik Baxım Rutinləri' },
  { id: 4, image: img4, title: 'Sağlam Həyat Tərzi: Gözəllik İçdən Gəlir' },
  { id: 5, image: img5, title: 'Dəri tipinə uyğun ideal qulluq necə seçilməlidir?' },
  { id: 6, image: img6, title: 'Günəşdən dəriyə effektiv qoruma üçün TOP-5 vasitə — günəşdən qoruyucu kremlər' },
  { id: 7, image: img7, title: 'Koreya dəriyə qulluq nədir və niyə bu qədər populyardır?' },
  { id: 8, image: img8, title: 'Qadınlar üçün Parfüm Seçimi: Şəxsi Üslubunuza Uyğun Ətir' },
  { id: 9, image: img9, title: 'Hialuron turşusu nədir və dəriyə necə təsir edir?' },
  { id: 10, image: img10, title: 'Qış mövsümündə dərini qurumaqdan necə qorumalı' },
  { id: 11, image: img11, title: 'Seramlər: hansı dəri problemi üçün hansı serum' },
  { id: 12, image: img12, title: 'Gecə baxımı: yatmazdan əvvəl nə etməli?' },
]

function More() {
  const sliderRef = useRef(null)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  const onMouseDown = (e) => {
    setIsDragging(true)
    startX.current = e.pageX
    startScroll.current = sliderRef.current.scrollLeft
  }

  const stopDrag = () => setIsDragging(false)

  const onMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    sliderRef.current.scrollLeft = startScroll.current - (e.pageX - startX.current)
  }

  return (
    <section className="w-full h-[540px] bg-[#1a1a1a] flex items-center overflow-hidden font-[Inter,sans-serif]">
      <main className="w-full justify-center flex">
        {/* Sol hissə */}
        <div className="w-[350px] h-[200px] shrink-0 flex flex-col justify-between gap-18">
          <ul className="flex flex-col text-start">
            <li className="text-[25px] leading-[35px] font-bold text-[#4d4d4d]">BAHAR STORE:</li>
            <li className="text-[25px] leading-[35px] font-bold text-[#4d4d4d]">KEYFİYYƏTLİ</li>
            <li className="text-[25px] leading-[35px] font-bold text-[#4d4d4d]">GÖZƏLLİK</li>
            <li className="text-[25px] leading-[35px] font-bold text-[#4d4d4d]">BAXIM</li>
            <li className="text-[25px] leading-[35px] font-bold text-[#4d4d4d]">MƏHSULLARININ</li>
            <li className="text-[25px] leading-[35px] font-bold text-[#4d4d4d]">TƏK ÜNVANI!</li>
          </ul>
          <Link to="/blogs" className="w-[70px] cursor-pointer">
            <p className="w-[70px] text-[18px] leading-[19px] font-medium text-white  cursor-pointer ">
              Hamısını göstər
            </p>
          </Link>
        </div>
        {/* Sağ  slayd */}
        <div className="w-[880px] h-[326px] flex justify-center items-center">
          <div
            ref={sliderRef}
            onMouseDown={onMouseDown}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={onMouseMove}
            className={`flex gap-[20px] h-full overflow-x-auto select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="group shrink-0 w-[250px] h-[325px] bg-white flex flex-col items-center rounded-[16px] gap-4 overflow-hidden"
              >
                <div className="w-full h-[235px] bg-neutral-200 overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="title w-[85%] h-[90px] flex justify-center items-center">
                  <h3 className="text-[15px] leading-[18px] font-semibold text-[#111]">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  )
}

export default More