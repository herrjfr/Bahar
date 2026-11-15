import React from 'react'
import baharstore from '../assets/baharstore.png'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from 'react'

function Header() {
  const [lang, setLang] = useState('AZ')
  const toggleLanguage = () => {
    setLang(lang === 'AZ' ? 'RU' : 'AZ')
  }
  return (
    <>
      <div className="w-full h-[180px] flex flex-col">
        <div className="bir h-[34px] bg-[#EA0B17] flex items-center justify-between font-medium text-[13px] tracking-normal px-[150px]">
          <nav>
            <ul>
              <li className='flex gap-[23px]'>
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

        <div className="iki h-[90px] bg-[#FFFFFF] flex items-center gap-[70px] px-[150px]">
          <img src={baharstore} alt="sekil" className='h-[80%] bg-cover' />
          <div className="relative h-[55px] w-[430px]">
            <span className='absolute flex items-center pt-[15px] pl-[10px] text-[#5E5E5E] hover:text-red-400 cursor-pointer'>
              <CiSearch className='text-2xl stroke-1 ' />
            </span>
            <input type="text" placeholder='Axtar' className='h-full w-full rounded-[19px] font-semibold pl-13 border border-gray-300 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus: border-gray-300' />
          </div>
          <nav>
            <ul>
              <li className='flex gap-[10px] text-[17px]'>
                <Link to="campaigns" className='flex gap-[6px] text-[#EA0B17] hover:text-[#EA0B17]/60 transition-colors duration-200 font-semibold tracking-wide'><RiDiscountPercentLine className='text-2xl' />Kampaniyalar</Link>
                <Link to="best_seller" className='text-[#19191A] font-semibold hover:text-[#8C8C8C] transition-colors duration-200'>Bestseller</Link>
                <Link to="discount" className='text-[#19191A] font-semibold hover:text-[#8C8C8C] transition-colors duration-200'>Endirim</Link>
                <Link to="new" className='text-[#19191A] font-semibold hover:text-[#8C8C8C] transition-colors duration-200'>Yeni</Link>
                <Link to="login" className='text-[#19191A] flex items-center font-normal transition-colors duration-200'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 17 17"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.0" d="M8.5 8.5a3.542 3.542 0 1 0 0-7.083 3.542 3.542 0 0 0 0 7.083M14.583 15.583c0-2.74-2.727-4.958-6.084-4.958-3.358 0-6.085 2.217-6.085 4.958"></path></svg><span className='hover:text-[#EA0B17]'>Daxil ol</span></Link>
                <Link to="wishlist" className='text-[#5E5E5E] flex items-center font-semibold'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12" opacity="0.7"></path></svg></Link>
                <Link to="cart" className='text-[#5E5E5E] flex items-center font-semibold'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"><path stroke-miterlimit="10" stroke-width="1.5" d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 0 1 4.94 4.48v1.38M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22"></path><path stroke-width="2" d="M15.496 12h.008M8.495 12h.008"></path></g></svg></Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="uc sticky top-0 z-50 h-[55px] bg-[#FBEAEA] flex items-center px-[150px]">
          <nav>
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
      </div>
    </>
  )
}

export default Header