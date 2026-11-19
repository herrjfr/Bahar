import React from 'react'
import baharstore from '../assets/baharstore.png'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useState, useEffect } from 'react'

function Header() {
  const [lang, setLang] = useState('AZ')
  const toggleLanguage = () => {
    setLang(lang === 'AZ' ? 'RU' : 'AZ')
  }
  const [isSticky, setisSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setisSticky(true)
      } else {
        setisSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="bir h-[34px] bg-[#EA0B17] flex items-center justify-between font-medium text-[13px] tracking-normal px-[150px]">
          <nav>
            <ul>
              <li className='flex gap-[27px]'>
                <Link to="/brands" className='text-[#FFFFFF] hover:text-white/70 transition-colors duration-200'>Brendlər</Link>
                <Link to="/stores" className='text-[#FFFFFF] hover:text-white/70 transition-colors duration-200'>Filiallar</Link>
                <Link to="/about" className='text-[#FFFFFF] hover:text-white/70 transition-colors duration-200'>Haqqımızda</Link>
                <Link to="/blogs" className='text-[#FFFFFF] hover:text-white/70 transition-colors duration-200'>Bloq</Link>
                <Link to="/contact" className='text-[#FFFFFF] hover:text-white/70 transition-colors duration-200'>Əlaqə</Link>
              </li>
            </ul>
          </nav>
          <div onClick={toggleLanguage} className="div text-[#FFFFFF] hover:text-white/70 transition-colors duration-200 cursor-pointer select-none">{lang}</div>
        </div>

        <div className="iki h-[90px] bg-[#FFFFFF] flex items-center gap-[50px] px-[150px]">
          <Link to={"/"}>
            <img src={baharstore} className='w-[150px]' />
          </Link>
          <div className="relative h-[55px] w-[430px]">
            <span className='absolute flex items-center pt-[15px] pl-[10px] text-[#5E5E5E] hover:text-red-400 cursor-pointer'>
              <CiSearch className='text-2xl stroke-1 ' />
            </span>
            <input type="text" placeholder='Axtar' className='h-full w-full rounded-[19px] font-semibold pl-13 border border-gray-300 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus: border-gray-300' />
          </div>
          <nav>
            <ul>
              <li className='flex gap-[10px] text-[17px] whitespace-nowrap'>
                <Link to="campaigns" className='flex gap-[6px] text-[#EA0B17] hover:text-[#EA0B17]/60 transition-colors duration-200 font-semibold tracking-wide'><RiDiscountPercentLine className='text-2xl' />Kampaniyalar</Link>
                <Link to="best_seller" className='text-[#19191A] font-semibold hover:text-[#8C8C8C] transition-colors duration-200'>Bestseller</Link>
                <Link to="discount" className='text-[#19191A] font-semibold hover:text-[#8C8C8C] transition-colors duration-200'>Endirim</Link>
                <Link to="new" className='text-[#19191A] font-semibold hover:text-[#8C8C8C] transition-colors duration-200'>Yeni</Link>
                <Link to="login" className='text-[#19191A] flex items-center font-normal transition-colors duration-200 pl-[9px] pr-[9px]'><LuUser className='w-[27px] h-[27px] stroke-[1.5]' /><span className='text-[15px] hover:text-[#ED1C24] transition-all duration-200'>Daxil ol</span></Link>
                <Link to="wishlist" className='text-[#5E5E5E] flex items-center font-semibold pl-[9px] pr-[9px]'><AiOutlineHeart className='w-[25px] h-[25px] stroke-[1.3]' /></Link>
                <Link to="cart" className='text-[#5E5E5E] flex items-center font-semibold'><TbShoppingBagPlus className='w-[25px] h-[25px] stroke-[1.7]' /></Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={`uc w-full bg-[#FBEAEA] flex items-center justify-center shadow-sm px-[150px] transition-all duration-200 z-50 ${isSticky ? "fixed top-0 left-0 h-[75px]" : "relative h-[55px]"}`}>
          <nav className='w-full flex justify-center relative'>
            <ul className='flex items-center font-[500] whitespace-nowrap'>
              <li className='group'>
                <Link to="gunesden-qorunma" className='text-[#ED1C24] inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Günəşdən qorunma</Link>
              </li>
              <li className='group'>
                <Link to="hediyyeler" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Hədiyyələr</Link>
                <div className="hidden group-hover:grid absolute left-0 top-full w-full bg-white text-black shadow-lg border-b border-gray-100 z-50 px-[150px] pt-8 pb-10 grid-cols-12 gap-12">
                  <div className="col-span-4 flex gap-5 justify-start items-center text-left font-normal text-[15px] text-gray-700">
                    <Link to="hediyye-sertifikatlari" className="hover:text-[#ED1C24] transition-colors">
                      Hədiyyə sertifikatları
                    </Link>
                    <Link to="hediyye-destleri" className="hover:text-[#ED1C24] transition-colors">
                      Hədiyyə dəstləri
                    </Link>
                    <Link to="hediyye-cantalari" className="hover:text-[#ED1C24] transition-colors">
                      Hədiyyə çantaları
                    </Link>
                  </div>
                </div>
              </li>
              <li className='group'>
                <Link to="makiyaj" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Makiyaj</Link>
              </li>
              <li className='group'>
                <Link to="uz-baximi" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Üz baxımı</Link>
              </li>
              <li className='group'>
                <Link to="parfumeriya" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Parfümeriya</Link>
              </li>
              <li className='group'>
                <Link to="sac" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Saç</Link>
              </li>
              <li className='group'>
                <Link to="gigiyena" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Gigiyena</Link>
              </li>
              <li className='group'>
                <Link to="usaqlar-ucun" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Uşaqlar üçün</Link>
              </li>
              <li className='group'>
                <Link to="beden-baximi" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Bədən Baxımı</Link>
              </li>
              <li className='group'>
                <Link to="aksesuarlar" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Aksesuarlar</Link>
              </li>
              <li className='group'>
                <Link to="kisiler-ucun" className='text-[#19191A]/90 inline-block px-3 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Kişilər üçün</Link>
              </li>
              <li className='group'>
                <Link to="geyim" className='text-[#19191A]/90 inline-block px-4 py-1.5 rounded-full hover:bg-[#ED1C24] hover:text-white transition-all duration-200'>Geyim</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="dord w-full h-[20px]"></div>
      </div>
    </>
  )
}

export default Header