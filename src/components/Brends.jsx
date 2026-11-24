
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

  // Karusel avtomatik hərəkəti
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

    // Növbəti hərəkəti planlaşdır
    const scheduleNext = () => {
      clearTimeout(timerRef.current)

      timerRef.current = setTimeout(() => {
        if (isDragging.current) return

        const maxScroll =
          carousel.scrollWidth - carousel.clientWidth

        // Sonuncu brendə çatıbsa, geri qayıt
        if (carousel.scrollLeft >= maxScroll - 1) {
          startReturn()
        } else {
          moveNext()
        }
      }, 3000)
    }

    // İlk brendə qayıt
    const startReturn = () => {
      startPosition = carousel.scrollLeft
      targetPosition = 0
      duration = 2000
      startTime = null
      isReturning = true

      animationFrameRef.current =
        requestAnimationFrame(animate)
    }

    // Növbəti brendə keç
    const moveNext = () => {
      if (isDragging.current) return

      const maxScroll =
        carousel.scrollWidth - carousel.clientWidth

      startPosition = carousel.scrollLeft
      targetPosition = Math.min(
        startPosition + step,
        maxScroll
      )

      duration = 1200
      startTime = null
      isReturning = false

      animationFrameRef.current =
        requestAnimationFrame(animate)
    }

    // Animasiya
    const animate = (timestamp) => {
      if (isDragging.current) return

      if (startTime === null) {
        startTime = timestamp
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      )

      const ease = 1 - Math.pow(1 - progress, 3)

      carousel.scrollLeft =
        startPosition +
        (targetPosition - startPosition) * ease

      if (progress < 1) {
        animationFrameRef.current =
          requestAnimationFrame(animate)
      } else {
        carousel.scrollLeft = targetPosition
        startTime = null

        if (isReturning) {
          isReturning = false
          scheduleNext()
        } else {
          const maxScroll =
            carousel.scrollWidth - carousel.clientWidth

          if (carousel.scrollLeft >= maxScroll - 1) {
            // Son brenddə 3 saniyə gözlə
            timerRef.current = setTimeout(() => {
              startReturn()
            }, 3000)
          } else {
            scheduleNext()
          }
        }
      }
    }

    // Əl ilə sürüşdürmədən sonra davam et
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


  // Mausla tutub sürüşdürmə
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


  // Hazırkı brend dizaynları
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
    { id: 28, name: "мой каприз" },
    { id: 29, name: "GOLDEN LADY" },
    { id: 30, name: "SISI" },
    { id: 31, name: "omsa" },
    { id: 32, name: "BAYLIS & HARDING" },
    { id: 33, name: "NOTE" },
    { id: 34, name: "EVELINE COSMETICS" },
    { id: 35, name: "FIORENTINO" },
    { id: 36, name: "Lilien" }
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

      case 28:
        return (
          <div className="relative inline-flex items-end select-none px-2 py-2 bg-white">
            <div className="relative w-10 h-10 mr-2 flex items-center justify-center">
              <div className="w-8 h-8 border-[2.5px] border-[#6b3fa0] translate-y-1" />
              <div className="absolute -top-1 left-0.5 w-3 h-8 bg-gradient-to-b from-[#ec008c] to-[#d9007e] -rotate-[18deg] rounded-tl-sm" />
              <div className="absolute bottom-0.5 left-3 w-3 h-7 bg-gradient-to-tr from-[#ec008c] to-[#ff1493] rotate-[22deg] rounded-br-sm" />
            </div>
            <div className="relative flex flex-col leading-none">
              <span className="font-serif italic font-bold text-[25px] text-[#e6007e] -mb-2 ml-1 tracking-tight">
                мой
              </span>
              <div className="relative flex items-baseline font-sans font-normal text-[33px] tracking-tight">
                <span className="text-[#6b3fa0]">ка</span>
                <span className="text-[#ec008c]">приз</span>
                <span className="ml-0.5 -translate-y-4 inline-flex items-center justify-center w-3 h-3 rounded-full border border-[#ec008c] text-[7px] font-semibold text-[#ec008c]">
                  R
                </span>
              </div>
            </div>
          </div>
        )

      case 29:
        return (
          <span className="text-[25px] font-bold tracking-[-1px]">
            {"GOLDEN LADY".split("").map((letter, index) => {
              const gold = [0, 3, 4, 5, 8, 9, 10].includes(index)
              return (
                <span
                  key={index}
                  className={gold ? "text-[#C48115]" : "text-[#DBBB67]"}
                >
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
          <svg
            viewBox="0 0 360 150"
            className="w-[145px] h-auto text-[#B87A35] transition-transform duration-300 hover:scale-105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 22 128 L 22 72 L 85 52 L 85 128 Z"
              stroke="currentColor"
              strokeWidth="11"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            <path
              d="M 103 128 L 103 46 L 138 92 L 173 24 L 173 128"
              stroke="currentColor"
              strokeWidth="11"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            <path
              d="M 248 48 L 193 24 L 193 66 L 252 88 L 252 128 L 190 128"
              stroke="currentColor"
              strokeWidth="11"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            <path
              d="M 272 128 L 272 52 L 338 72 L 338 128 M 272 96 L 338 96"
              stroke="currentColor"
              strokeWidth="11"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
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
          <span className="text-[36px] font-bold tracking-[1px] text-black">
            NOTE
          </span>
        )

      case 34:
        return (
          <div className="flex flex-col items-center text-[#302074]">
            <div className="flex items-end">
              <span className="relative left-[-3px] top-[3px] text-[55px] font-bold leading-[0.8]">E</span>
              <span className="text-[21px] font-bold tracking-[-1px]">VELINE</span>
            </div>
            <div className="w-full h-[1px] bg-[#302074] mt-1" />
            <span className="text-[15px] font-semibold tracking-[1px] mt-1">
              COSMETICS
            </span>
          </div>
        )

      case 35:
        return (
          <div className="inline-flex items-center justify-center bg-white select-none scale-[0.58] shrink-0">
            <div className="relative w-[300px] h-[185px] rounded-[50%] border-[1.5px] border-[#c49245] flex items-center justify-center">
              <svg
                viewBox="0 0 300 185"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <defs>
                  <path id="fiorentinoTopArc" d="M 42,95 A 108,65 0 0,1 258,95" fill="none" />
                  <path id="fiorentinoBottomArc" d="M 46,105 A 106,62 0 0,0 254,105" fill="none" />
                </defs>
                <text fill="#c49245" className="font-serif text-[12px] tracking-[2.4px]">
                  <textPath href="#fiorentinoTopArc" startOffset="50%" textAnchor="middle">
                    SAPONIFICIO ARTIGIANALE
                  </textPath>
                </text>
                <text fill="#c49245" className="font-serif text-[18px] tracking-[3.2px]">
                  <textPath href="#fiorentinoBottomArc" startOffset="50%" textAnchor="middle">
                    FIORENTINO
                  </textPath>
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
