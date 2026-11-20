import React, { useEffect, useRef } from 'react'
import {Link} from "react-router-dom"

function Brends() {

  const carouselRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const animationFrameRef = useRef(null)


  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = carouselRef.current

      if (!carousel || isDragging.current) return

      const maxScroll = carousel.scrollWidth - carousel.clientWidth

      if (carousel.scrollLeft >= maxScroll - 2) return

      const startPosition = carousel.scrollLeft
      const nextPosition = Math.min(startPosition + 197, maxScroll)
      const distance = nextPosition - startPosition

      const duration = 1200
      const startTime = performance.now()

      const animateScroll = (currentTime) => {
        if (isDragging.current) return

        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        const ease = 1 - Math.pow(1 - progress, 3)

        carousel.scrollLeft = startPosition + distance * ease

        if (progress < 1) {
          animationFrameRef.current =
            requestAnimationFrame(animateScroll)
        }
      }

      animationFrameRef.current =
        requestAnimationFrame(animateScroll)

    }, 3000)

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])


  const handlePointerDown = (e) => {
    if (e.button !== 0) return

    const carousel = carouselRef.current

    cancelAnimationFrame(animationFrameRef.current)

    isDragging.current = true
    startX.current = e.clientX
    startScrollLeft.current = carousel.scrollLeft

    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current) return

    const carousel = carouselRef.current
    const distance = e.clientX - startX.current

    carousel.scrollLeft = startScrollLeft.current - distance
  }


  const handlePointerUp = () => {
    isDragging.current = false
  }


  const brendler = [
    {
      id: 1,
      name: "i'm from",
      subtitle: "NATURE AS IT IS, IT'S I'M FROM",
      style: "text-[29px] font-serif font-medium text-black",
      subStyle: "text-[6px] text-gray-500 tracking-[0.5px]"
    },
    {
      id: 2,
      name: "INFLUENCE",
      subtitle: "BEAUTY",
      style: "text-[19px] font-black tracking-[-1px] text-black",
      subStyle: "text-[12px] font-semibold tracking-[3px] text-black"
    },
    {
      id: 3,
      name: "NARD",
      style: "text-[34px] font-black tracking-[2px] text-black"
    },
    {
      id: 4,
      name: "JVONE",
      subtitle: "MILANO",
      style: "text-[29px] font-serif font-medium text-[#C09D85]",
      subStyle: "text-[11px] tracking-[4px] text-[#C09D85]"
    },
    {
      id: 5,
      name: "SUNDAY RAIN",
      style: "text-[13px] font-medium tracking-[1px] text-[#E5D9B7]"
    },
    {
      id: 6,
      name: "NAEXY",
      style: "text-[34px] font-bold tracking-[-1px] text-black"
    },
    {
      id: 7,
      name: "BERGAMO",
      style: "text-[16px] font-medium tracking-[2px] text-black"
    },
    { id: 8, name: "GOLDEN ROSE" },
    { id: 9, name: "rom&nd" },
    { id: 10, name: "lovea" },
    { id: 11, name: "Diane Castel" },
    { id: 12, name: "mixsoon" },
    { id: 13, name: "Sanpellegrino" },
    { id: 14, name: "topface" }
  ]


  const renderBrand = (brand) => {
    switch (brand.id) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-center">
            <span className={brand.style}>
              {brand.name}
            </span>
            <span className={brand.subStyle}>
              {brand.subtitle}
            </span>
          </div>
        )

      case 8:
        return (
          <div className="w-[125px] h-[105px] bg-black flex flex-col items-center justify-center text-white">
            <div className="flex items-center text-[30px] font-bold leading-none">
              <span>G</span>
              <span className="-ml-1">R</span>
            </div>
            <span className="text-[12px] font-semibold tracking-[1px] mt-2">
              GOLDEN ROSE
            </span>
            <span className="text-[8px] tracking-[1px] mt-2 italic">
              style & beauty
            </span>
          </div>
        )

      case 9:
        return (
          <span className="text-[32px] font-medium tracking-[-2px] text-black">
            rom&nd
          </span>
        )

      case 10:
        return (
          <div className="w-[100px] h-[100px] bg-[#E6E6E6] flex items-center justify-center">
            <div className="w-[65px] h-[65px] rounded-full bg-white flex items-center justify-center">
              <span className="inline-flex items-center text-[28px] font-semibold text-black">
                <span>lov</span>
                <span className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#FFE400] text-[28px] font-semibold leading-none">
                  ea
                </span>
              </span>
            </div>
          </div>
        )

      case 11:
        return (
          <div className="flex flex-col items-center justify-center text-black">
            <span className="text-[10px] leading-none mb-[-2px]">♛</span>
            <span className="text-[23px] font-serif tracking-[-1px]">
              Diane Castel
            </span>
            <span className="text-[10px] tracking-[5px] mt-1">
              PARIS
            </span>
          </div>
        )

      case 12:
        return (
          <span className="text-[32px] font-medium tracking-[-2px] text-black">
            mixsoon
          </span>
        )

      case 13:
        return (
          <div className="flex flex-col items-center justify-center">
            <span className="text-[23px] font-serif font-bold text-black">
              Sanpellegrino
            </span>
            <div className="w-[155px] h-[2px] bg-black mt-1" />
          </div>
        )

      case 14:
        return (
          <span className="text-[29px] font-bold tracking-[-1px] text-black flex items-center">
            topfac
            <span className="inline-block ml-[10px] -rotate-[35deg] origin-bottom-left">
              e
            </span>
          </span>
        )

      default:
        return (
          <span className={brand.style}>
            {brand.id === 2 ? (
              <span className="inline-flex">
                {brand.name.split("").map((letter, index) => (
                  <span key={index} className="relative inline-block">
                    {letter}
                    {(index === 2 || index === 3 || index === 5) && (
                      <span className="absolute top-[1px] left-0 w-full h-[4px] bg-white" />
                    )}
                  </span>
                ))}
              </span>
            ) : (
              brand.name
            )}
          </span>
        )
    }
  }


  return (
    <div className="pt-[20px] mt-[20px] pb-[40px] bg-[#FAF9F9]">

      <div className=" mx-auto pt-[20px] px-[150px]">

        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[32px] font-semibold text-black">
            Brendlər
          </h1>
          <Link to={"/all-brends"}>
            <span className="text-[18px] font-bold text-[#19191A] cursor-pointer">
              Hamısını göstər
            </span>
          </Link>
        </div>

        <div
          ref={carouselRef}
          className="flex items-center gap-3 overflow-x-auto select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onDragStart={(e) => e.preventDefault()}
        >
          {brendler.map((brand) => (
            <div
              key={brand.id}
              className="w-[185px] h-[130px] rounded-[2px] shrink-0 bg-white border border-[#EEEEEE] flex items-center justify-center overflow-hidden"
            >
              {renderBrand(brand)}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Brends
