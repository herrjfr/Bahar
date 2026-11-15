import React, { useRef, useState } from 'react'

function HeroCtg() {
  const sliderRef = useRef(null)
  const viewportRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(0)

  const startX = useRef(0)
  const startPosition = useRef(0)

  const [hover, setHover] = useState(null)

  const handleMouseDown = (e) => {
    setIsDragging(true)

    startX.current = e.clientX
    startPosition.current = position

    e.preventDefault()
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return

    const walk = e.clientX - startX.current

    setPosition(startPosition.current + walk)
  }

  const handleMouseUp = () => {
    if (!isDragging) return

    setIsDragging(false)

    const viewport = viewportRef.current
    const slider = sliderRef.current

    const maxTranslate = Math.min(
      0,
      viewport.clientWidth - slider.scrollWidth
    )

    setPosition(prev => Math.max(maxTranslate, Math.min(0, prev)))
  }

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
    <section className='w-[100%] py-[50px] px-[150px]'>
      <div
        ref={viewportRef}
        className='w-[100%] overflow-hidden'>
        <div
          ref={sliderRef}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          style={{
            transform: `translateX(${position}px)`,
            transition: isDragging ? 'none' : 'transform 300ms ease'
          }}
          className='flex gap-x-[10px] select-none'>
          {categories.map(x => {
            return <div key={x.id}
              onMouseEnter={() => setHover(x.id)}
              onMouseLeave={() => setHover(null)}
              className='w-[150px] shrink-0 flex flex-col items-center gap-y-[15px] cursor-pointer'>
              <div
              style={hover==x.id?{border: "solid gray 1px"}:{}} 
              className='w-[150px] h-[150px] rounded-[50%] border-1 border-[#FFDFE2] flex items-center justify-center'>
                <div className='w-[130px] h-[130px] rounded-[50%] overflow-hidden'>
                  <img
                    style={hover==x.id? {scale: "1.05"}:{}}
                    draggable={false}
                    className='w-[130px] h-[130px] rounded-[50%] transition-all duration-400'
                    src={x.img} />
                </div>
              </div>
              <p
                style={hover == x.id ? { color: "red" } : {}}
                className='text-[17px] font-[600] text-center transition-all duration-500'>{x.Name}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroCtg