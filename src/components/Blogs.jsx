import React, { useState } from 'react'
import { Clock } from 'lucide-react'

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

const filters = [
  { key: 'all', label: 'Hamısı', width: 'w-[100px]' },
  { key: 'blog', label: 'Blog', width: 'w-[90px]' },
  { key: 'news', label: 'Xəbərlər', width: 'w-[110px]' },
]

const posts = [
  { id: 1, image: img1, category: 'blog', date: '28/01/2026', title: '✨ Clean Girl Makeup: baharstore.az məhsulları ilə trend makiyajı necə etməli' },
  { id: 2, image: img2, category: 'blog', date: '17/12/2025', title: 'Qış dəri baxımı: soyuq havada dəriyə nə lazımdır' },
  { id: 3, image: img3, category: 'news', date: '04/09/2025', title: 'Makiyajın bütün gün davamlı qalmasını necə təmin etməli' },
  { id: 4, image: img4, category: 'other', date: '31/07/2025', title: 'Niyə təbii dezodorant seçməli və niyə məhz Salt of the Earth məsləhət görürük...' },
  { id: 5, image: img5, category: 'other', date: '15/06/2025', title: 'Dəri tipinə uyğun ideal qulluq necə seçilməlidir?' },
  { id: 6, image: img6, category: 'other', date: '02/06/2025', title: 'Günəşdən dəriyə effektiv qoruma üçün TOP-5 vasitə — günəşdən qoruyucu kremlər' },
  { id: 7, image: img7, category: 'other', date: '20/05/2025', title: 'Koreya dəriyə qulluq nədir və niyə bu qədər populyardır?' },
  { id: 8, image: img8, category: 'other', date: '11/05/2025', title: 'Qadınlar üçün Parfüm Seçimi: Şəxsi Üslubunuza Uyğun Ətir' },
  { id: 9, image: img9, category: 'other', date: '25/04/2025', title: 'Hialuron turşusu nədir və dəriyə necə təsir edir?' },
  { id: 10, image: img10, category: 'other', date: '12/04/2025', title: 'Qış mövsümündə dərini qurumaqdan necə qorumalı' },
  { id: 11, image: img11, category: 'other', date: '30/03/2025', title: 'Seramlər: hansı dəri problemi üçün hansı serum' },
  { id: 12, image: img12, category: 'other', date: '14/03/2025', title: 'Gecə baxımı: yatmazdan əvvəl nə etməli?' },
]

function Blog() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? posts : posts.filter((post) => post.category === active)

  return (
    <section className="w-full bg-white flex flex-col items-center gap-[30px] font-[Inter,sans-serif]">
      {/* Baslıq */}
      <div className="w-full h-[90px] flex flex-col items-center justify-center gap-[6px]">
        <h1 className="text-[24px] leading-[28px] font-bold text-[#1a1a1a]">Blog</h1>
        <div className="flex items-center gap-[10px]">
          <span className="text-[12px] font-medium text-black">Bahar Store</span>
          <span className="text-[13px] text-gray-600">/</span>
          <span className="text-[12px] text-gray-400">Blog</span>
        </div>
      </div>

      <main className="w-[1224px] h-[1700px] flex flex-col gap-[25px]">
        <h2 className="text-[30px] leading-[34px] font-bold text-[#1a1a1a] uppercase">Blog</h2>

        {/* Filtrlər */}
        <div className="w-full flex items-end justify-between">
          <div className="flex items-center gap-[17px]">
            {filters.map((item) => (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`${item.width} h-[35px] rounded-full text-[14px] font-medium border ${active === item.key
                  ? 'bg-[#e8000d] border-[#e8000d] text-white'
                  : 'bg-white border-gray-200 text-[#1a1a1a]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="text-[15px] font-medium text-gray-400">{filtered.length} Blog</span>
        </div>

        {/* Kartlar */}
        <div className="w-full flex flex-wrap gap-4.5">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="group w-[292px] h-[440px] bg-[#fafafa] rounded-[12px] overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="w-full h-[320px] overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-full h-[145px] flex items-center justify-center">
                <div className="w-[260px] h-[100px] flex flex-col justify-between">
                  <h3 className="text-[14px] leading-[16px] font-semibold text-black">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-[9px] text-[15px] text-gray-500">
                    <Clock size={15} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  )
}

export default Blog