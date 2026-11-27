
import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"

function Brends() {

  const carouselRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const animationFrameRef = useRef(null)
  const timerRef = useRef(null)
  const resumeAutoRef = useRef(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let startTime = null
    let startPosition = 0
    let targetPosition = 0
    let duration = 1200
    let isReturning = false

    const card = carousel.firstElementChild
    if (!card) return

    const step = card.offsetWidth + 12

    const scheduleNext = () => {
      clearTimeout(timerRef.current)

      timerRef.current = setTimeout(() => {
        if (isDragging.current) return

        const maxScroll = carousel.scrollWidth - carousel.clientWidth

        if (carousel.scrollLeft >= maxScroll - 1) {
          startReturn()
        } else {
          moveNext()
        }
      }, 3000)
    }

    const startReturn = () => {
      startPosition = carousel.scrollLeft
      targetPosition = 0
      duration = 2000
      startTime = null
      isReturning = true

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const moveNext = () => {
      if (isDragging.current) return

      const maxScroll = carousel.scrollWidth - carousel.clientWidth

      startPosition = carousel.scrollLeft
      targetPosition = Math.min(startPosition + step, maxScroll)

      duration = 1200
      startTime = null
      isReturning = false

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const animate = (timestamp) => {
      if (isDragging.current) return

      if (startTime === null) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)

      carousel.scrollLeft =
        startPosition + (targetPosition - startPosition) * ease

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        carousel.scrollLeft = targetPosition
        startTime = null

        if (isReturning) {
          isReturning = false
          scheduleNext()
        } else {
          const maxScroll = carousel.scrollWidth - carousel.clientWidth

          if (carousel.scrollLeft >= maxScroll - 1) {
            timerRef.current = setTimeout(() => {
              startReturn()
            }, 3000)
          } else {
            scheduleNext()
          }
        }
      }
    }

    resumeAutoRef.current = () => {
      scheduleNext()
    }

    scheduleNext()

    return () => {
      clearTimeout(timerRef.current)
      cancelAnimationFrame(animationFrameRef.current)
      resumeAutoRef.current = null
    }

  }, [])

  const handlePointerDown = (e) => {
    if (e.button !== 0) return

    const carousel = carouselRef.current
    if (!carousel) return

    clearTimeout(timerRef.current)
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
    if (!isDragging.current) return

    isDragging.current = false
    resumeAutoRef.current?.()
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
    { id: 14, name: "topface" },
    { id: 15, name: "PAUL RIVERA", style: "text-[24px] font-semibold tracking-[1px] text-black" },
    { id: 16, name: "BIOBALANCE" },
    { id: 18, name: "farmona" },
    { id: 19, name: "agiva" },
    { id: 20, name: "ColorArt" },
    { id: 21, name: "energy" },
    { id: 22, name: "family doctor" },
    { id: 23, name: "LICAPE" },
    { id: 24, name: "bellaoggi" },
    { id: 25, name: "OBLEPIKHA" },
    { id: 26, name: "VIVA LIVA" },
    { id: 29, name: "GOLDEN LADY" },
    { id: 30, name: "SISI" },
    { id: 31, name: "omsa" },
    { id: 32, name: "BAYLIS & HARDING" },
    { id: 33, name: "NOTE" },
    { id: 34, name: "EVELINE COSMETICS" },
    { id: 35, name: "FIORENTINO" },
    { id: 36, name: "Lilien" },

    { id: 37, name: "RUBELLA" },
    { id: 38, name: "CHRISTIAN LAURENT" },
    { id: 39, name: "ASTRA MAKE-UP" },
    { id: 40, name: "MORALE PARFUMS" },
    { id: 41, name: "LA RIVE" },
    { id: 42, name: "LUX GÜZELLİĞİ" },
    { id: 43, name: "NUVARIA" },
    { id: 44, name: "JOANNA" },
    { id: 45, name: "GEPARLYS" },
    { id: 46, name: "LORENAY" },
    { id: 47, name: "SPPC DEPUIS 1989" },
    { id: 48, name: "ALIX AVIEN" },
    { id: 49, name: "LIONESSE" },
    { id: 50, name: "SOLINGEN" },
    { id: 51, name: "SKIN1004" },
    { id: 52, name: "CREBEAU" },
    { id: 53, name: "PIEGA VIVA" },
    { id: 54, name: "FREECOLOR PROFESSIONAL" },
    { id: 55, name: "ON LINE" },
    { id: 56, name: "ROMANTIC PROFESSIONAL" },
    { id: 57, name: "AIR-VAL" },
    { id: 58, name: "LE PETIT OLIVIER" },
    { id: 59, name: "STELLARY" },
    { id: 60, name: "VIVIAN GRAY" },
    { id: 61, name: "DR. LOLA" },
    { id: 62, name: "TENZERO" },
    { id: 63, name: "SIMPLE PLEASURES" },
    { id: 64, name: "CORSAIR TOILETRIES LTD" },
    { id: 65, name: "SIKHA" },
    { id: 66, name: "TECHNIQUE" },
  ]

  const renderBrand = (brand) => {
    switch (brand.id) {

      case 1:
        return (
          <div className="flex flex-col items-center justify-center">
            <span className={brand.style}>{brand.name}</span>
            <span className={brand.subStyle}>{brand.subtitle}</span>
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

      case 15:
        return (
          <span className="text-[24px] font-semibold tracking-[1px] text-black">
            PAUL RIVERA
          </span>
        )

      case 16:
        return (
          <div className="flex flex-col items-center justify-center text-black">
            <span className="text-[25px] leading-none mb-1">🍃</span>
            <span className="text-[29px] font-bold tracking-[-1px]">
              BIOBALANCE
            </span>
            <span className="text-[9px] font-medium tracking-[1px]">
              ----BACK TO NATURE----
            </span>
          </div>
        )

      case 18:
        return (
          <div className="flex flex-col items-center justify-center text-[#025918]">
            <span className="text-[23px] leading-none mb-1">❀</span>
            <span className="text-[29px] font-bold tracking-[-1px]">FARMONA</span>
            <span className="text-[8px] tracking-[1px] mt-1">
              -----Wahizek----
            </span>
          </div>
        )

      case 19:
        return (
          <div className="flex flex-col items-center justify-center text-black">
            <span className="flex items-baseline text-[34px] font-black tracking-[-1px]">
              <span className="text-[34px]">Λ</span><span>GIV</span><span className="text-[34px]">Λ</span>
            </span>
            <span className="text-[11px] font-bold tracking-[2px]">
              CARE &amp; BEAUTY
            </span>
          </div>
        )

      case 20:
        return (
          <div className="w-[155px] h-[95px] bg-[#F4F1EB] flex flex-col items-center justify-center">
            <span className="text-[17px] font-medium tracking-[1px] text-[#987C4A]">
              viored
            </span>
            <span className="text-[27px] font-serif text-[#87672D]">
              ColorArt
            </span>
          </div>
        )

      case 21:
        return (
          <div className="flex items-center gap-2 text-black">
            <span className="text-[13px] font-medium -mt-1">of</span>
            <div className="relative flex flex-col leading-[0.85]">
              <span className="text-[27px] font-black tracking-[-1px]">energy</span>
              <span className="text-[18px] font-semibold">Vitamin</span>
              <svg className="absolute -top-[13px] left-[-2px] w-[108px] h-[24px] overflow-visible" viewBox="0 0 108 24" fill="none">
                <path d="M2 22 Q54 -13 106 22" stroke="black" strokeWidth="1.4" />
              </svg>
            </div>
          </div>
        )

      case 22:
        return (
          <div className="border-2 border-[#832E0D] px-3 py-2 flex flex-col items-center text-[#832E0D]">
            <span className="text-[17px] font-medium leading-none">family</span>
            <span className="text-[22px] font-bold tracking-[1px] leading-none mt-1">
              DOCTOR
            </span>
          </div>
        )

      case 23:
        return (
          <div className="flex flex-col items-center text-black">
            <span className="text-[23px] font-medium tracking-[1px]">LICAPE</span>
            <span className="text-[10px] tracking-[1px] mt-1">-- HEALTH &amp; BEAUTY --</span>
          </div>
        )

      case 24:
        return (
          <div className="flex items-center gap-2 text-black">
            <div className="w-[1px] h-[43px] bg-black" />
            <div className="flex flex-col items-start">
              <span className="text-[25px] leading-none tracking-[-1px]">
                <span className="font-black">bella</span>
                <span className="font-normal">oggi</span>
              </span>
              <span className="text-[9px] font-bold tracking-[3px] ml-[25px] mt-1">
                ITALIA
              </span>
            </div>
          </div>
        )

      case 25:
        return (
          <span className="text-[25px] font-black tracking-[-1px] text-black">
            OBLEPIKHA
          </span>
        )

      case 26:
        return (
          <div className="flex items-center gap-2 text-black">
            <span className="text-[25px] font-black tracking-[-1px]">VIVA</span>
            <svg viewBox="0 0 40 40" className="w-[25px] h-[25px]" fill="white" stroke="black" strokeWidth="2">
              <ellipse cx="19" cy="22" rx="9" ry="13" transform="rotate(35 19 22)" />
              <path d="M20 9 Q24 4 30 5" fill="none" strokeLinecap="round" />
            </svg>
            <span className="text-[25px] font-black tracking-[-1px]">LIVA</span>
          </div>
        )

      case 29:
        return (
          <span className="text-[25px] font-bold tracking-[-1px]">
            {"GOLDEN LADY".split("").map((letter, index) => {
              const gold = [0, 3, 4, 5, 8, 9, 10].includes(index)
              return (
                <span key={index} className={gold ? "text-[#C48115]" : "text-[#DBBB67]"}>
                  {letter}
                </span>
              )
            })}
          </span>
        )

      case 30:
        return (
          <span className="flex items-end text-[34px] font-black tracking-[1px] text-black">
            <span>S</span>
            <span className="relative">I<span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-black" /></span>
            <span>S</span>
            <span className="relative">I<span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-black" /></span>
          </span>
        )

      case 31:
        return (
          <svg viewBox="0 0 360 150" className="w-[145px] h-auto text-[#B87A35]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 22 128 L 22 72 L 85 52 L 85 128 Z" stroke="currentColor" strokeWidth="11" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M 103 128 L 103 46 L 138 92 L 173 24 L 173 128" stroke="currentColor" strokeWidth="11" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M 248 48 L 193 24 L 193 66 L 252 88 L 252 128 L 190 128" stroke="currentColor" strokeWidth="11" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M 272 128 L 272 52 L 338 72 L 338 128 M 272 96 L 338 96" stroke="currentColor" strokeWidth="11" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        )

      case 32:
        return (
          <div className="flex flex-col items-center text-black">
            <span className="text-[8px] font-semibold tracking-[2px]">EST 1970</span>
            <span className="text-[16px] font-bold tracking-[0.5px]">BAYLIS &amp; HARDING</span>
            <span className="text-[9px] font-medium tracking-[3px] mt-1">ENGLAND</span>
          </div>
        )

      case 33:
        return (
          <span className="text-[36px] font-bold tracking-[1px] text-black">NOTE</span>
        )

      case 34:
        return (
          <div className="flex flex-col items-center text-[#302074]">
            <div className="flex items-end">
              <span className="relative left-[-3px] top-[3px] text-[55px] font-bold leading-[0.8]">E</span>
              <span className="text-[21px] font-bold tracking-[-1px]">VELINE</span>
            </div>
            <div className="w-full h-[1px] bg-[#302074] mt-1" />
            <span className="text-[15px] font-semibold tracking-[1px] mt-1">COSMETICS</span>
          </div>
        )

      case 35:
        return (
          <div className="inline-flex items-center justify-center bg-white select-none scale-[0.58] shrink-0">
            <div className="relative w-[300px] h-[185px] rounded-[50%] border-[1.5px] border-[#c49245] flex items-center justify-center">
              <svg viewBox="0 0 300 185" className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <path id="fiorentinoTopArc" d="M 42,95 A 108,65 0 0,1 258,95" fill="none" />
                  <path id="fiorentinoBottomArc" d="M 46,105 A 106,62 0 0,0 254,105" fill="none" />
                </defs>
                <text fill="#c49245" className="font-serif text-[12px] tracking-[2.4px]">
                  <textPath href="#fiorentinoTopArc" startOffset="50%" textAnchor="middle">SAPONIFICIO ARTIGIANALE</textPath>
                </text>
                <text fill="#c49245" className="font-serif text-[18px] tracking-[3.2px]">
                  <textPath href="#fiorentinoBottomArc" startOffset="50%" textAnchor="middle">FIORENTINO</textPath>
                </text>
              </svg>
              <svg viewBox="0 0 100 120" className="w-[74px] h-[88px] fill-[#c49245] -mt-1">
                <path d="M50 8 C45 22, 44 38, 47 64 L53 64 C56 38, 55 22, 50 8 Z" />
                <path d="M45 64 C38 44, 24 38, 22 52 C20 62, 30 68, 35 61 C31 58, 30 52, 35 51 C40 50, 42 58, 43 64 Z" />
                <path d="M55 64 C62 44, 76 38, 78 52 C80 62, 70 68, 65 61 C69 58, 70 52, 65 51 C60 50, 58 58, 57 64 Z" />
                <path d="M46 62 C41 44, 34 32, 30 28 C33 25, 37 26, 38 23 C41 25, 43 27, 41 31 C43 38, 46 50, 47 62 Z" />
                <path d="M54 62 C59 44, 66 32, 70 28 C67 25, 63 26, 62 23 C59 25, 57 27, 59 31 C57 38, 54 50, 53 62 Z" />
                <rect x="37" y="66" width="26" height="5" rx="2.5" />
                <path d="M47 73 L53 73 L52 96 L50 104 L48 96 Z" />
                <path d="M47 75 C42 75, 37 78, 37 82 C37 85, 41 85, 42 82 C42 80, 45 79, 47 79 Z" />
                <path d="M53 75 C58 75, 63 78, 63 82 C63 85, 59 85, 58 82 C58 80, 55 79, 53 79 Z" />
              </svg>
            </div>
          </div>
        )

      case 36:
        return (
          <span className="text-black flex items-baseline">
            <span className="text-[43px] font-black">L</span>
            <span className="text-[32px] font-black -ml-1">ilien</span>
          </span>
        )

      // 37. RUBELLA
      case 37:
        return (
          <span className="text-[34px] font-bold text-[#BE1F2C] tracking-[1px]">
            RUBELLA
          </span>
        )

      // 38. CHRISTIAN LAURENT
      case 38:
        return (
          <div className="flex flex-col items-center text-black">
            <div className="flex items-center font-serif font-bold text-[48px] leading-[0.85]">
              <span>C</span>
              <span className="-ml-[3px]">L</span>
            </div>
            <span className="text-[13px] font-bold tracking-[1.5px] mt-3">
              CHRISTIAN LAURENT
            </span>
          </div>
        )

      // 39. ASTRA MAKE-UP
      case 39:
        return (
          <div className="flex flex-col items-center text-black">
            <span className="text-[55px] font-normal tracking-[-4px] leading-none">
              ASTRA
            </span>
            <span className="text-[12px] font-bold tracking-[4px] mt-1">
              MAKE - UP
            </span>
          </div>
        )

      // 40. MORALE PARFUMS
      case 40:
        return (
          <div className="flex flex-col items-center text-black">
            <svg viewBox="0 0 180 125" className="w-[135px] h-[95px]" fill="white" stroke="black" strokeWidth="2">
              <path d="M90 115 C75 101 12 60 12 34 C12 5 52 -4 90 29 C128 -4 168 5 168 34 C168 60 105 101 90 115Z" />
              <text x="90" y="63" textAnchor="middle" fill="black" stroke="none" fontSize="49" fontWeight="bold" fontFamily="Georgia">M</text>
              <text x="90" y="91" textAnchor="middle" fill="black" stroke="none" fontSize="9" fontWeight="bold" letterSpacing="1">MORALE PARFUMS</text>
            </svg>
            <span className="text-[15px] font-bold tracking-[2px] mt-1">
              MORALE PARFUMS
            </span>
          </div>
        )

      // 41. LA RIVE
      case 41:
        return (
          <div className="flex flex-col items-center text-black">
            <span className="text-[43px] font-bold tracking-[-2px] leading-none">
              LA RIVE
            </span>
            <span className="text-[12px] tracking-[3px] text-[#D4B161] mt-2">
              parfums cosmetics
            </span>
          </div>
        )

      // 42. LUX GÜZELLİĞİ
      case 42:
        return (
          <div className="relative w-[90px] h-[75px] flex items-center justify-center select-none">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@800&family=Playfair+Display:wght@900&display=swap');
              .lux-stroke {
                font-family: 'Playfair Display', Georgia, serif;
                -webkit-text-stroke: 6px #4A1942;
                paint-order: stroke fill;
                text-shadow: 0 1px 0 #4A1942;
              }
              .guzelligi-stroke {
                font-family: 'Great Vibes', cursive;
                -webkit-text-stroke: 3px #ffffff;
                paint-order: stroke fill;
              }
            `}</style>
            <svg viewBox="0 0 260 220" className="absolute inset-0 w-full h-full" fill="none">
              <path d="M42 105 C78 82, 165 55, 195 52 C205 51, 208 60, 196 68 C212 63, 218 72, 204 82 C215 80, 217 89, 200 98 C165 117, 88 148, 52 162 C38 167, 34 156, 46 146 C31 150, 27 140, 40 131 C28 133, 26 121, 42 105 Z" fill="#A477B2" />
              <path d="M58 158 C95 135, 162 105, 192 98 C203 95, 206 105, 192 115 C204 113, 206 122, 191 132 C158 154, 98 188, 65 204 C52 210, 47 200, 58 190 C46 193, 44 182, 57 173 C47 174, 46 165, 58 158 Z" fill="#F36F21" />
            </svg>
            <span className="absolute top-[20px] right-[20px] z-20 text-[#4A1942] font-bold text-[8px]">®</span>
            <div className="relative z-10 -mt-7 -ml-2">
              <span className="lux-stroke font-black text-[35px] leading-none text-white tracking-tight">
                Lux
              </span>
            </div>
            <div className="absolute bottom-[17px] left-[20px] z-20 -rotate-[25deg]">
              <span className="guzelligi-stroke text-[18px] text-[#4A1942] leading-none block">
                Güzelliği
              </span>
            </div>
          </div>
        )

      // 43. NUVARIA
      case 43:
        return (
          <div className="relative inline-block select-none">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
              .font-nuvaria {
                font-family: 'Caveat', cursive;
              }
            `}</style>
            <span aria-hidden="true" className="font-nuvaria font-bold text-[50px] leading-none tracking-[0.04em] block text-[#111111]">
              nuvaria
            </span>
            <span className="font-nuvaria font-bold text-[50px] leading-none tracking-[0.04em] text-[#C4C4C4] absolute top-[3px] -left-[3px] block">
              nuvaria
            </span>
          </div>
        )

      // 44. JOANNA
      case 44:
        return (
          <div className="inline-flex flex-col items-center text-[#91495A] select-none">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap');
              .font-joanna {
                font-family: 'Cinzel', Georgia, serif;
              }
            `}</style>
            <svg viewBox="0 0 260 24" className="w-[120px] h-[16px] -mb-1 ml-3" fill="none">
              <path d="M4 18 C52 2, 112 6, 162 11 C202 15, 232 13, 256 4 C232 18, 198 22, 156 18 C108 13, 52 8, 4 18 Z" fill="#91495A" />
            </svg>
            <div className="font-joanna font-bold tracking-[0.04em] leading-none flex items-baseline">
              <span className="text-[40px] translate-y-[3px] inline-block">J</span>
              <span className="text-[34px]">OANNA</span>
            </div>
          </div>
        )

      // 45. GEPARLYS
      case 45:
        return (
          <div className="inline-flex flex-col items-center text-[#141414] select-none">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Montserrat:wght@600;700&display=swap');
              .font-geparlys { font-family: 'Alex Brush', cursive; }
              .font-label { font-family: 'Montserrat', sans-serif; }
            `}</style>
            <div className="w-full flex justify-end pr-2 -mb-3 z-10">
              <span className="font-label font-bold text-[13px] tracking-[0.14em]">
                PARFUMS
              </span>
            </div>
            <div className="font-geparlys text-[45px] leading-[0.85] tracking-[0.01em] px-2">
              Geparlys
            </div>
            <div className="w-full flex justify-center pl-10 -mt-1 z-10">
              <span className="font-label font-bold text-[10px] tracking-[0.22em]">
                PARIS
              </span>
            </div>
          </div>
        )

      // 46. LORENAY
      case 46:
        return (
          <div className="inline-flex items-center gap-2 select-none">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
              .font-lorenay { font-family: 'Montserrat', sans-serif; }
            `}</style>
            <svg viewBox="0 0 80 76" className="w-[34px] h-[34px] shrink-0" fill="none">
              <circle cx="40" cy="24" r="15" fill="#E84A8A" />
              <path d="M42 36 C50 24, 62 20, 67 24 C67 34, 59 43, 46 45 Z" fill="#E84A8A" />
              <path d="M36 45 C22 46, 12 37, 13 21 C23 23, 33 31, 39 40 Z" fill="#E84A8A" />
              <path d="M42 44 C53 38, 63 36, 68 39 C64 50, 52 56, 36 55 C26 54, 18 50, 14 45 C22 48, 32 48, 42 44 Z" fill="#E84A8A" />
              <path d="M29 60 C34 57, 46 57, 51 60 C51 66, 46 70, 40 70 C34 70, 29 66, 29 60 Z" fill="#E84A8A" />
            </svg>
            <div className="font-lorenay font-light text-[19px] leading-none tracking-[0.12em] text-[#7D7D7D] flex items-center">
              <span>LOREN</span>
              <svg viewBox="0 0 28 32" className="w-[19px] h-[22px] -ml-[2px] mr-[3px] translate-y-[1px]" fill="none">
                <path d="M2 30 L12.5 2 L15 2 L25.5 30" stroke="#7D7D7D" strokeWidth="1.7" />
              </svg>
              <span>Y</span>
            </div>
          </div>
        )

      // 47. SPPC DEPUIS 1989
      case 47:
        return (
          <div className="inline-flex flex-col items-center select-none text-[#1D1D1B]">
            <svg viewBox="0 0 120 112" className="w-[60px] h-[55px] mb-3" fill="none">
              <path d="M57 12 C34 12, 22 28, 22 47 C22 57, 27 65, 34 70" stroke="#1D1D1B" strokeWidth="6.5" />
              <path d="M63 12 C86 12, 98 28, 98 47 C98 57, 93 65, 86 70" stroke="#1D1D1B" strokeWidth="6.5" />
              <path d="M34 42 C26 47, 22 55, 22 65 C22 84, 34 100, 57 100" stroke="#1D1D1B" strokeWidth="6.5" />
              <path d="M86 42 C94 47, 98 55, 98 65 C98 84, 86 100, 63 100" stroke="#1D1D1B" strokeWidth="6.5" />
              <path d="M57 12 L57 100 M63 12 L63 100" stroke="#1D1D1B" strokeWidth="6.5" />
              <line x1="34" y1="56" x2="53" y2="56" stroke="#1D1D1B" strokeWidth="6.5" />
              <line x1="57" y1="24" x2="63" y2="24" stroke="white" strokeWidth="3" />
              <line x1="34" y1="42" x2="53" y2="42" stroke="#1D1D1B" strokeWidth="6.5" />
              <line x1="67" y1="56" x2="86" y2="56" stroke="#1D1D1B" strokeWidth="6.5" />
            </svg>
            <div className="text-[8px] leading-[1.65] tracking-[0.13em] text-center">
              <div>SOCIÉTÉ PARISIENNE</div>
              <div>DE PARFUMS &amp; COSMÉTIQUES</div>
            </div>
            <div className="font-bold text-[9px] tracking-[0.13em] mt-2">
              SPPC DEPUIS 1989
            </div>
          </div>
        )

      // 48. ALIX AVIEN
      case 48:
        return (
          <div className="flex flex-col items-center text-black">
            <div className="flex items-center text-[24px] font-bold tracking-[-1px] leading-none">
              <span>ALI</span>
              <span className="relative inline-flex items-center justify-center">
                <span>X</span>
                <span className="absolute top-[48%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-black" />
              </span>
              <span> AVIEN</span>
            </div>
            <span className="text-[10px] font-light tracking-[4px] mt-2">
              COSMETICS
            </span>
          </div>
        )

      // 49. LIONESSE
      case 49:
        return (
          <div className="inline-flex items-baseline select-none text-[#1D1D1B]">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&display=swap');
              .font-lionesse { font-family: 'Cinzel', Georgia, serif; }
            `}</style>
            <span className="font-lionesse font-bold text-[27px] leading-none">L</span>
            <span className="font-lionesse font-bold text-[27px] leading-none tracking-[0.02em]">IONE</span>
            <svg viewBox="0 0 88 46" className="w-[49px] h-[27px] self-center mx-[1px]" fill="none">
              <path d="M4 11 C8 5, 22 4, 34 6 C39 7, 43 9, 44 13 C33 11, 21 11, 14 14 C10 16, 13 18, 22 20 L10 21 C4 19, 2 15, 4 11 Z" fill="#9B67A8" />
              <path d="M4 34 C9 39, 24 41, 35 38 C40 36, 43 32, 39 28 C34 25, 24 24, 15 23 C22 26, 28 28, 26 31 C24 34, 14 33, 6 29 L4 34 Z" fill="#0088CE" />
              <path d="M36 4 L51 4 L51 6 C47 7, 46 9, 46 14 L46 32 C46 37, 47 39, 51 40 L51 42 L36 42 L36 40 C40 39, 41 37, 41 32 L41 14 C41 9, 40 7, 36 6 Z" fill="#9B67A8" />
              <path d="M48 11 C53 5, 68 4, 79 7 L83 5 L83 16 L80 16 C77 12, 68 10, 59 12 C54 13, 55 16, 63 18 L51 19 C46 17, 45 14, 48 11 Z" fill="#E30613" />
              <path d="M48 34 C54 40, 70 41, 80 37 C84 35, 86 31, 81 27 C75 23, 63 22, 53 21 C61 24, 69 27, 68 31 C66 35, 56 34, 49 29 L48 34 Z" fill="#9B67A8" />
            </svg>
            <div className="relative inline-flex items-baseline">
              <span className="font-lionesse font-bold text-[27px] leading-none">E</span>
              <span className="font-sans font-bold text-[10px] self-start -mt-1 ml-0.5">®</span>
            </div>
          </div>
        )

      // 50. SOLINGEN
      case 50:
        return (
          <div className="flex flex-col items-center text-black">
            <div className="w-full h-[1px] bg-black mb-2" />
            <span className="text-[36px] leading-none tracking-[1px]">
              <span className="font-bold">S</span>
              <span className="font-normal">olingen</span>
            </span>
          </div>
        )

      // 51. SKIN1004
      case 51:
        return (
          <div className="flex flex-col items-center text-black">
            <span className="text-[28px] font-bold tracking-[4px] leading-none">
              SKIN1004
            </span>
            <span className="text-[9px] font-semibold tracking-[1.5px] mt-2">
              THE UNTOUCHED NATURE
            </span>
          </div>
        )

      // 52. CREBEAU
      case 52:
        return (
          <div className="inline-flex flex-col items-center select-none">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap');
              .font-crebeau { font-family: 'Cormorant Garamond', Georgia, serif; }
            `}</style>
            <svg viewBox="0 0 120 120" className="w-[50px] h-[50px] mb-2" fill="none">
              <defs>
                <linearGradient id="crebeauRingGrad" x1="20" y1="15" x2="95" y2="105" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4C217" />
                  <stop offset="45%" stopColor="#B86B11" />
                  <stop offset="100%" stopColor="#7C1408" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="46" stroke="url(#crebeauRingGrad)" strokeWidth="3.8" />
              <ellipse cx="42" cy="47" rx="24" ry="26" stroke="url(#crebeauRingGrad)" strokeWidth="4.2" />
            </svg>
            <div className="relative inline-flex items-start">
              <span className="font-crebeau font-bold text-[27px] leading-none tracking-[-0.02em] bg-gradient-to-r from-[#731807] via-[#A3210B] to-[#C83214] bg-clip-text text-transparent">
                CreBeau
              </span>
              <span className="font-sans font-semibold text-[10px] text-[#A84323] -mt-0.5 ml-0.5">
                ®
              </span>
            </div>
          </div>
        )

      // 53. PIEGA VIVA
      case 53:
        return (
          <div className="relative w-[130px] h-[100px] flex items-center justify-center select-none text-[#767676]">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500;1,600&display=swap');
              .font-piega { font-family: 'Cormorant Garamond', Georgia, serif; }
            `}</style>
            <svg viewBox="0 0 180 170" className="absolute inset-0 w-full h-full" fill="none">
              <path d="M84 12 C136 12, 168 46, 168 85 C168 124, 136 158, 84 158 C126 152, 152 122, 152 85 C152 48, 126 18, 84 12 Z" fill="#767676" />
            </svg>
            <div className="relative z-10 font-piega italic font-medium text-[28px] leading-[0.86] tracking-[-0.01em] flex flex-col items-center -ml-4">
              <span>piega</span>
              <span className="-ml-1">viva</span>
            </div>
          </div>
        )

      // 54. FREECOLOR PROFESSIONAL
      case 54:
        return (
          <div className="flex flex-col items-center leading-none">
            <span className="text-[30px] font-black tracking-[-1px] text-[#F8060E]">
              FREECOLOR
            </span>
            <span className="w-full text-center text-[13px] font-bold tracking-[2px] text-black mt-2">
              PROFESSIONAL
            </span>
          </div>
        )

      // 55. ON LINE
      case 55:
        return (
          <div className="relative w-[165px] h-[105px] flex items-center justify-center select-none">
            <svg
              viewBox="0 0 340 220"
              className="absolute inset-0 w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 90 C80 34, 260 34, 320 90 C260 48, 80 48, 20 90 Z"
                fill="#1D3068"
              />
              <path
                d="M16 93 C70 47, 270 47, 324 93 C328 100, 328 184, 328 184 C328 189, 324 193, 318 193 L22 193 C16 193, 12 189, 12 184 C12 184, 12 100, 16 93 Z"
                fill="#1D3068"
              />
            </svg>

            <div className="relative z-10 font-black text-[28px] leading-none tracking-tight text-white flex items-center justify-center gap-5 mt-10">
              <span>ON</span>
              <span>LINE</span>
            </div>
          </div>
        )

      // 56. ROMANTIC PROFESSIONAL
      case 56:
        return (
          <div className="inline-flex items-center gap-2 select-none text-[#232220]">
            <div className="w-[30px] h-[30px] rounded-full bg-[#232220] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 64 64" className="w-[30px] h-[30px]" fill="none">
                <path
                  d="M27 16 L35 16 C44 16, 49 20, 49 26.5 C49 32, 44.5 35.5, 38.5 36.5 L47.5 47.5 C48.8 49, 50.2 49.5, 52 49.5 L52 51 L41 51 L31.5 37.5 L27 37.5 L27 47.5 C27 49, 28.2 49.5, 30.5 49.5 L30.5 51 L17.5 51 L17.5 49.5 C19.8 49.5, 21 49, 21 47.5 L21 26 C18.5 26.5, 16 25, 15.5 22.5 C15 19.5, 17.5 16.5, 21.5 16 C23.5 15.8, 25.5 16, 27 16 Z M27 18.5 L27 35 L33.5 35 C39 35, 42 32, 42 26.5 C42 21.2, 39 18.5, 33.5 18.5 L27 18.5 Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-baseline leading-none">
                <span className="text-[24px] font-serif font-bold text-[#232220]">
                  Romantic
                </span>
              </div>
              <span className="text-[9px] tracking-[1px] text-[#4A4947] mt-1">
                PROFESSIONAL
              </span>
            </div>
          </div>
        )

      // 57. AIR-VAL
      case 57:
        return (
          <div className="text-black font-semibold text-[21px] tracking-[1px] uppercase">
            AIR - VAL
          </div>
        )

      // 58. LE PETIT OLIVIER
      case 58:
        return (
          <div className="flex flex-col items-center justify-center select-none">
            <svg
              viewBox="0 0 260 155"
              className="w-[105px] h-[55px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path id="provenceArc" d="M 36,92 A 104,104 0 0,1 224,92" />
              </defs>

              <text fill="#5D6658" fontSize="9.5" fontWeight="600" letterSpacing="1.6">
                <textPath href="#provenceArc" startOffset="50%" textAnchor="middle">
                  CRÉÉ À SALON DE PROVENCE
                </textPath>
              </text>

              <path d="M26 96 C29 91, 34 91, 35 95 C32 98, 28 98, 26 96 Z" fill="#9AA648" />
              <path d="M234 96 C231 91, 226 91, 225 95 C228 98, 232 98, 234 96 Z" fill="#9AA648" />

              <path d="M66 142 C96 131, 162 130, 196 143 C174 139, 146 137, 128 139 C104 140, 82 143, 66 142 Z" fill="#9C6545" />
              <path d="M78 146 C108 137, 154 137, 184 146 C158 143, 106 143, 78 146 Z" fill="#B78363" />

              <path d="M124 139 C127 129, 123 118, 127 109 C130 102, 125 94, 121 88 L127 88 C131 95, 135 103, 132 112 C130 120, 134 130, 137 139 Z" fill="#435746" />
              <path d="M128 112 C135 104, 143 97, 149 91 L145 89 C139 95, 133 101, 128 107 Z" fill="#435746" />
              <path d="M125 104 C118 97, 111 91, 105 87 L108 84 C114 89, 120 94, 126 100 Z" fill="#435746" />

              <path d="M84 82 C76 72, 82 56, 97 54 C104 42, 122 40, 132 48 C144 41, 163 45, 168 58 C181 62, 182 78, 171 86 C162 94, 146 94, 135 90 C123 95, 105 94, 94 88 C88 86, 86 84, 84 82 Z" fill="#5D705B" />
              <path d="M89 76 C85 66, 94 56, 106 58 C113 48, 129 48, 136 56 C148 50, 162 55, 164 66 C172 71, 169 82, 159 85 C148 89, 136 85, 128 84 C117 88, 99 86, 89 76 Z" fill="#8B9C7E" />

              <circle cx="102" cy="65" r="7" fill="#B8C28E" />
              <circle cx="127" cy="57" r="8" fill="#C7CFA0" />
              <circle cx="151" cy="66" r="7.5" fill="#B8C28E" />
              <circle cx="115" cy="75" r="6.5" fill="#A5B396" />
              <circle cx="141" cy="76" r="6.5" fill="#C7CFA0" />
            </svg>

            <div className="flex flex-col items-center text-[#345443] -mt-5">
              <span className="font-serif italic text-[13px] leading-[0.85]">
                Le Petit
              </span>
              <span className="font-serif italic text-[13px] leading-[0.9] ml-5">
                Olivier
              </span>
            </div>
          </div>
        )

      // 59. STELLARY
      case 59:
        return (
          <div className="text-black font-normal text-[23px] tracking-[2px] uppercase">
            STELLARY
          </div>
        )

      // 60. VIVIAN GRAY
      case 60:
        return (
          <div className="inline-flex items-center gap-2 select-none text-[#1A1A1A]">
            <svg viewBox="0 0 100 100" className="w-[40px] h-[40px] shrink-0" fill="none">
              <defs>
                <path id="vgTopArc" d="M 16,50 A 34,34 0 1,1 84,50" />
                <path id="vgBottomArc" d="M 84,50 A 34,34 0 1,1 16,50" />
              </defs>

              <circle cx="50" cy="50" r="36" stroke="#1A1A1A" strokeWidth="14" />
              <circle cx="50" cy="50" r="26" fill="#FFFFFF" />

              <text fill="#FFFFFF" fontSize="8.6" fontWeight="600" letterSpacing="1.1">
                <textPath href="#vgTopArc" startOffset="50%" textAnchor="middle">
                  • VIVIAN GRAY •
                </textPath>
              </text>

              <text fill="#FFFFFF" fontSize="8.6" fontWeight="600" letterSpacing="1.1">
                <textPath href="#vgBottomArc" startOffset="50%" textAnchor="middle">
                  VIVIAN GRAY
                </textPath>
              </text>

              <text x="27" y="56" fill="#1A1A1A" fontSize="27" fontWeight="700">v</text>
              <text x="45" y="55" fill="#1A1A1A" fontSize="28" fontWeight="700">g</text>
            </svg>

            <div className="flex flex-col justify-center">
              <span className="text-[17px] font-normal tracking-[1px] uppercase whitespace-nowrap">
                VIVIAN GRAY
              </span>
              <span className="text-[7px] text-[#2C2C2C] mt-1 whitespace-nowrap">
                the house of beautiful bath products
              </span>
            </div>
          </div>
        )

      // 61. DR. LOLA
      case 61:
        return (
          <div className="relative w-[145px] h-[95px] flex items-center justify-center select-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[75px] h-[80px] rounded-full bg-[#E8E8E8] flex items-center justify-center">
                <span className="font-serif font-bold text-[35px] text-white tracking-[-2px]">
                  lola
                </span>
              </div>
            </div>

            <div className="relative z-10 font-bold text-[34px] leading-none text-[#C81B5B] flex items-baseline gap-2 italic">
              <span>dr</span>
              <span>Lola</span>
            </div>
          </div>
        )

      // 62. TENZERO
      case 62:
        return (
          <div className="inline-flex items-center select-none">
            <svg
              viewBox="0 0 212 64"
              className="w-[115px] h-[28px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#595757" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <path d="M12 24 L12 52 C12 55.5, 14 57, 18 57 L22 57" />
                <path d="M32 38 L52 38 L52 24 C52 20.5, 49.5 19, 45 19 L39 19 C34.5 19, 32 20.5, 32 24 L32 52 C32 55.5, 34.5 57, 39 57 L52 57" />
                <path d="M64 57 L64 24 C64 20.5, 66.5 19, 71 19 L77 19 C81.5 19, 84 20.5, 84 24 L84 57" />
                <path d="M96 19 L116 19 L96 57 L116 57" />
                <path d="M128 38 L148 38 L148 24 C148 20.5, 145.5 19, 141 19 L135 19 C130.5 19, 128 20.5, 128 24 L128 52 C128 55.5, 130.5 57, 135 57 L148 57" />
                <path d="M160 57 L160 24 C160 20.5, 162.5 19, 167 19 L174 19" />
                <rect x="184" y="19" width="20" height="38" rx="5" />
              </g>
            </svg>
          </div>
        )

      // 63. SIMPLE PLEASURES
      case 63:
        return (
          <div className="flex items-center text-black select-none">
            <span className="text-[40px] font-normal leading-none mr-2">
              S
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold tracking-[1px]">
                IMPLE
              </span>
              <span className="text-[11px] font-bold tracking-[1px] mt-1">
                PLEASURES
              </span>
            </div>
          </div>
        )

      // 64. CORSAIR TOILETRIES LTD
      case 64:
        return (
          <div className="inline-flex items-center gap-2 select-none">
            <svg
              viewBox="0 0 80 80"
              className="w-[35px] h-[35px] shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="corsairGlobeGrad" cx="35%" cy="28%" r="70%">
                  <stop offset="0%" stopColor="#5BB5EC" />
                  <stop offset="45%" stopColor="#1A82C4" />
                  <stop offset="85%" stopColor="#0E5C93" />
                  <stop offset="100%" stopColor="#09426C" />
                </radialGradient>
                <linearGradient id="corsairLandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="55%" stopColor="#E6E9EC" />
                  <stop offset="100%" stopColor="#B8C0C8" />
                </linearGradient>
                <clipPath id="globeClip">
                  <circle cx="40" cy="40" r="36" />
                </clipPath>
              </defs>

              <g clipPath="url(#globeClip)">
                <circle cx="40" cy="40" r="36" fill="url(#corsairGlobeGrad)" />
                <path
                  d="M29 6 C35 5, 44 6, 51 9 C53 12, 50 15, 55 17 C60 18, 66 17, 72 20 L74 28 C67 27, 60 25, 55 28 C51 31, 56 35, 62 37 C64 41, 58 45, 55 51 C52 57, 49 63, 44 65 C39 65, 38 59, 37 53 C36 47, 30 45, 26 41 C23 36, 27 29, 33 27 C37 25, 34 21, 30 20 C26 18, 25 11, 29 6 Z"
                  fill="url(#corsairLandGrad)"
                />
                <path
                  d="M4 16 C10 14, 17 15, 20 19 C22 23, 17 26, 13 28 C9 30, 12 35, 15 39 C17 44, 14 52, 11 58 L3 55 Z"
                  fill="url(#corsairLandGrad)"
                />
              </g>
            </svg>

            <div className="flex flex-col justify-center">
              <span className="text-[20px] font-normal leading-none tracking-[-1px] text-[#1A1A1A]">
                corsair
              </span>
              <span className="text-[6px] tracking-[2px] text-[#4A4A4A] mt-2">
                TOILETRIES LTD
              </span>
            </div>
          </div>
        )

      // 65. SIKHA
    case 65:
  return (
    <div className="inline-flex flex-col items-center select-none text-[#53237D]">
      <div className="relative inline-flex items-baseline">
        <div className="text-[34px] font-bold leading-none tracking-[-2px] flex items-baseline">
          <span>S</span>

          <span className="relative inline-block mx-[1px]">
            <span>ı</span>
            <svg
              viewBox="0 0 24 24"
              className="absolute w-[10px] h-[10px] top-[-7px] left-1/2 -translate-x-1/2"
              fill="#53237D"
            >
              <path d="M11.2 11.2 C9.5 7, 4 7.5, 4.5 11.2 C2 11.5, 2.5 16.5, 7 15.8 C6.5 19.5, 11.5 20.5, 12 16 C12.5 20.5, 17.5 19.5, 17 15.8 C21.5 16.5, 22 11.5, 19.5 11.2 C20 7.5, 14.5 7, 12.8 11.2 Z" />
            </svg>
          </span>

          <span>k</span>
          <span>h</span>
          <span>â</span>
        </div>

        <span className="text-[8px] font-semibold self-start mt-2 ml-1">®</span>
      </div>

      <span className="text-[7px] tracking-[2px] mt-2">
        PROUDLY MADE IN ITALY
      </span>
    </div>
  )

      // 66. TECHNIQUE
      case 66:
        return (
          <div className="inline-flex flex-col items-center select-none text-[#161616]">
            <div className="relative w-[135px] h-[22px] flex items-center justify-center">
              <div className="w-full h-[2.5px] bg-[#161616] rounded-full" />
              <div className="absolute left-[88px] top-0 bottom-0 w-[2.5px] bg-[#161616] rounded-t-full" />
              <div className="absolute left-[109px] top-0 bottom-0 w-[2.5px] bg-[#161616] rounded-t-full" />
              <div className="absolute left-[130px] top-0 h-[16px] w-[2.5px] bg-[#161616] rounded-full" />
            </div>

            <div className="w-[165px] h-[30px] border-[2.5px] border-[#161616] flex items-center justify-center bg-white">
              <span className="font-semibold text-[14px] leading-none tracking-[0.26em] pl-[0.26em]">
                TECHNIQUE
              </span>
            </div>

            <div className="relative w-[95px] h-[22px] flex items-center justify-center">
              <div className="w-full h-[2.5px] bg-[#161616] rounded-full" />
              <div className="absolute right-[42px] top-0 h-[12px] w-[2.5px] bg-[#161616]" />
              <div className="absolute right-[21px] top-0 bottom-0 w-[2.5px] bg-[#161616] rounded-b-full" />
            </div>
          </div>
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
    <div className="pt-[20px] pb-[40px] bg-[#FAF9F9]">

      <div className="mx-auto pt-[20px] px-[150px]">

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
