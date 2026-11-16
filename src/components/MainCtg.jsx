import React, { useRef, useState } from 'react'

function MainCtg() {

  const ctgs = [
    {
      id: 1,
      Name: "BƏDƏN BAXIMI"
    },
    {
      id: 2,
      Name: "DİŞ FIRÇASI"
    },
    {
      id: 3,
      Name: "QALICI ƏTİRLƏR"
    },
    {
      id: 4,
      Name: "BAZA MAKYAJ"
    },
    {
      id: 5,
      Name: "PAMADALAR"
    },
    {
      id: 6,
      Name: "DODAQ QƏLƏMİ"
    },
    {
      id: 7,
      Name: "KİŞİ DUŞ GELİ"
    },
    {
      id: 8,
      Name: "QADIN CORABLARI"
    },
    {
      id: 9,
      Name: "UZUN QALICI TUŞ"
    },
    {
      id: 10,
      Name: "ÜZ ÜÇÜN KORREKTOR"
    },
  ]

  const [position, setPosition] = useState(0)
  const scrollStart = useRef(0)
  const [down, setDown] = useState(false)
  const downStart = useRef(0)
  const downEnd = useRef(0)

  const ctgRef = useRef(0)
  const viewRef = useRef(0)

  function handleMouseDown(e) {
    setDown(true)
    downStart.current = e.clientX
    scrollStart.current = position
  }
  function handleMouseUp() {
    setDown(false)

    const view = viewRef.current.clientWidth
    const scroll = ctgRef.current.scrollWidth

    const serhed = Math.max(view - scroll, Math.min(0, position))
    setPosition(serhed)
  }
  function handleMouseMove(e) {
    if (!down) return

    downEnd.current = e.clientX

    const start = downStart.current
    const end = downEnd.current
    const move = start - end

    const view = viewRef.current.clientWidth
    const scroll = ctgRef.current.scrollWidth

    const newPos = scrollStart.current - move
    const minPosition = view - scroll

    let finalPos = newPos

    if (newPos > 0) {
      finalPos = newPos / 3
    }
    else if (newPos < minPosition) {
      const over = minPosition - newPos
      finalPos = minPosition - over / 3
    }
    setPosition(finalPos)
  }

  return (
    <section 
    onMouseMove={handleMouseMove} 
    onMouseLeave={handleMouseUp} 
    onMouseUp={handleMouseUp} 
    className='w-[100%] px-[150px] py-[50px]'>
      <div
        ref={viewRef}
        className='w-full overflow-hidden'>
        <div
          ref={ctgRef}
          style={{ transform: `translateX(${position}px)` }}
          
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          className='w-max flex gap-x-[20px]'>
          {ctgs.map(x => {
            return <button
              key={x.id}
              className='shrink-0 bg-[#F2F2F2] text-black text-[12px] font-[600] px-[25px] py-[8px] rounded-[8px] cursor-pointer hover:bg-black hover:text-white transition-all duration-500'>
              {x.Name}
            </button>
          })}
        </div>
      </div>
    </section>
  )
}

export default MainCtg