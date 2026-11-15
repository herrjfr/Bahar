import React, { useRef, useState } from 'react'

function HeroCtg() {
  const sliderRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)

  const categories = [
    {
      id: 1,
      Name: "Günəşdən qorunma",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/gunesden-qorunma-69f1fbfd4a74c.png"
    },
    {
      id: 2,
      Name: "Hədiyyələr",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/hediyyeler-69ddd225316f9.png"
    },
    {
      id: 3,
      Name: "Makiyaj",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/makiyaj-69f1fd6dd5af7.png"
    },
    {
      id: 4,
      Name: "Üz baxımı",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/uz-baximi-69f1f44fe063d.png"
    },
    {
      id: 5,
      Name: "Parfümeriya",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/parfumeriya-69dcc1e0a6dbb.png"
    },
    {
      id: 6,
      Name: "Saç",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/sac-69dce1e5409de.png"
    },
    {
      id: 7,
      Name: "Gigiyena",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/gigiyena-69dcd948057f0.png"
    },
    {
      id: 8,
      Name: "Uşaqlar üçün",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/usaqlar-ucun-69ddd130a8fcc.png"
    },
    {
      id: 9,
      Name: "Bədən baxımı",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/beden-baximi-694149e776818.png"
    },
    {
      id: 10,
      Name: "Aksesuarlar",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/aksesuarlar-6942449448208.png"
    },
    {
      id: 11,
      Name: "Kişilər üçün",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/kisiler-ucun-69414f5979205.png"
    },
    {
      id: 12,
      Name: "Geyim",
      img: "https://admin475.baharstore.az/storage//uploads/images/category/geyim-68667b8ddbe3d.png"
    },
  ]



  return (
    <section className='w-[100%] px-[150px] mt-[200px]'>
      <div className='w-[100%] overflow-hidden'>
        <div className='flex gap-x-[10px]'>
          {categories.map(x => {
            return <div key={x.id} className='w-[150px] shrink-0 flex flex-col items-center gap-y-[15px] cursor-pointer hover:bg-black/10'>
              <div className='w-[150px] h-[150px] rounded-[50%] border-1 border-[#FFDFE2] flex items-center justify-center'>
                <img className='w-[130px] h-[130px] rounded-[50%]' src={x.img} />
              </div>
              <p className='text-[17px] font-[600] text-center'>{x.Name}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroCtg