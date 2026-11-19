import React from 'react'
import baharstore from '../assets/baharstore.png'
import qr from '../assets/qr.png'
import { LuInstagram } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { BsTiktok } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa6";
import { useState } from 'react'

function Footer() {
  const [langy, setLangy] = useState('AZ')
  const toggleLanguagey = () => {
    setLangy(langy === 'AZ' ? 'RU' : 'AZ')
  }

  const scrollToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <footer className='w-[100%] h-[530px] flex justify-center items-center px-[150px]'>
        <div className="esas w-[100%] h-[100%] flex flex-col">
          <div className="yuxari w-full h-[400px] flex gap-[35px]">
            <div className="bahar w-[14%] h-[400px] flex flex-col gap-[15px]">
              <img src={baharstore} alt="sekil" className='w-[85%] pt-[20px]' />
              <p className='text-[12px] text-[#969697] font-semibold not-italic leading-[115%] tracking-[0.7px]'>© Bahar Store 2017 - 2026</p>
              <div className="c flex gap-[7px] pt-[10px]">
                <div className="ik1 w-[35px] h-[35px] bg-white border border-solid border-[#EEEEEE] hover:bg-[#ED1C24] transition-all duration-300 rounded-[50%] flex items-center justify-center"><a href="https://www.instagram.com/baharstore.az" target="_blank" rel='noopener noreferrer'><LuInstagram className='h-[21px] w-[21px] stroke-2 text-[#19191A] hover:text-white' /></a></div>
                <div className="ik1 w-[35px] h-[35px] bg-white border border-solid border-[#EEEEEE] hover:bg-[#ED1C24] transition-all duration-300 rounded-[50%] flex items-center justify-center"><a href="https://www.facebook.com/Baharstore" target="_blank" rel='noopener noreferrer'><RiFacebookCircleLine className='h-[25px] w-[25px] text-[#19191A] hover:text-white' /></a></div>
                <div className="ik1 w-[35px] h-[35px] bg-white border border-solid border-[#EEEEEE] hover:bg-[#ED1C24] transition-all duration-300 rounded-[50%] flex items-center justify-center"><a href="https://www.tiktok.com/@baharstore.az" target="_blank" rel='noopener noreferrer'><BsTiktok className='h-[19px] w-[19px] text-[#19191A] hover:text-white' /></a></div>
                <div className="ik1 w-[35px] h-[35px] bg-white border border-solid border-[#EEEEEE] hover:bg-[#ED1C24] transition-all duration-300 rounded-[50%] flex items-center justify-center"><a href="https://www.youtube.com/@Baharstore.az2017" target="_blank" rel='noopener noreferrer'><SlSocialYoutube className='h-[21px] w-[21px] text-[#19191A] hover:text-white' /></a></div>
              </div>
            </div>

            <div className="cate w-[21%] h-[400px] flex flex-col pt-[10px] gap-[15px]">
              <div className="g w-[80%] h-[50px] flex flex-col gap-2"><h2 className='text-xl font-bold text-[#19191A]'>Kateqoriyalar</h2><span className='h-[3px] w-[30px] bg-[#EA0B17]'></span></div>
              <div className="huy w-full h-[280px] flex justify-between font-medium">
                <div className="bir w-[60%] h-full flex flex-col gap-[7px]">
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Hədiyyələr</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Günəşdən qorunma</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Parfümeriya</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Gigiyena</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Bədən Baxımı</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Kişilər üçün</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                </div>
                <div className="iki w-[40%] h-full flex flex-col gap-[7px]">
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Makiyaj</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Üz baxımı</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Saç</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Uşaqlar üçün</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Aksesuarlar</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Geyim</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                </div>
              </div>
            </div>

            <div className="fili w-[25%] h-[400px] flex flex-col pt-[10px] gap-[15px]">
              <div className="g w-[80%] h-[50px] flex flex-col gap-2"><h2 className='text-xl font-bold text-[#19191A]'>Filiallar</h2><span className='h-[3px] w-[30px] bg-[#EA0B17]'></span></div>
              <div className="huy w-full h-[280px] flex justify-between font-medium">
                <div className="bir w-[40%] h-full flex flex-col gap-[7px]">
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>28 Mall</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Həzi Aslanov</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>N. Nərimanov</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Əhmədli</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Rəşid Behbudov</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                </div>
                <div className="iki w-[50%] h-full flex flex-col gap-[7px]">
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Azadlıq</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Park Bulvar</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Elmlər Akademiyası</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Fəvvarələr meydanı</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Yasamal</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                </div>
              </div>
            </div>

            <div className="store w-[12%] h-[400px] flex flex-col pt-[10px] gap-[15px]">
              <div className="g w-[80%] h-[50px] flex flex-col gap-2"><h2 className='text-xl font-bold text-[#19191A]'>Bahar Store</h2><span className='h-[3px] w-[30px] bg-[#EA0B17]'></span></div>
              <div className="huy w-full h-[280px] font-medium">
                <div className="bir w-[40%] h-full flex flex-col gap-[7px]">
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Haqqımızda</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Brendlər</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Bloq</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                  <div className="h w-full h-[35px]  flex"><div className="group relative w-fit py-2"><Link to="hediyyeler" className='text-[#5E5E5E] transition-colors duration-300 group-hover:text-red-600'>Kampaniyalar</Link><span className='absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div></div>
                </div>
              </div>
            </div>

            <div className="elaqe w-[18%] h-[400px] flex flex-col pt-[10px] gap-[15px]" >
              <div className="g w-[80%] h-[50px] flex flex-col gap-2"><h2 className='text-xl font-bold text-[#19191A]'>Əlaqə</h2><span className='h-[3px] w-[30px] bg-[#EA0B17]'></span></div>
              <div className="huy w-[87%] h-[150px] flex flex-col gap-[5px]">
                <div className="y h-[35px] flex gap-[18px] items-center">
                  <LuPhone className='w-[20px] h-[20px]' /><div className="group relative w-fit py-[0.7]"><a href="#" className='text-gray-700 transition-colors duration-300 group-hover:text-red-600 text-[13px] font-medium'>+994 519692215</a><span className='absolute bottom-0 left-0 h-[1px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div>
                </div>
                <div className="y h-[35px] flex gap-[18px] items-center">
                  <FaWhatsapp className='w-[21px] h-[21px]' /><div className="group relative w-fit py-[0.7]"><a href="#" className='text-gray-700 transition-colors duration-300 group-hover:text-red-600 text-[13px] font-medium'>WhatsApp</a><span className='absolute bottom-0 left-0 h-[1px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div>
                </div>
                <div className="y h-[35px] flex gap-[18px] items-center">
                  <AiOutlineMail className='w-[22px] h-[22px]' /><div className="group relative w-fit py-[0.7]"><a href="#" className='text-gray-700 transition-colors duration-300 group-hover:text-red-600 text-[13px] font-medium'>info@baharstore.az</a><span className='absolute bottom-0 left-0 h-[1px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full'></span></div>
                </div>
              </div>
              <div className="r w-full h-[150px] cursor-pointer">
                <img src={qr} alt="sekil" />
              </div>
            </div>

          </div>
          <div className="asagi h-[130px]  flex justify-between items-end">
            <div className="az h-[90px] w-[18%] flex flex-col gap-[20px]">
              <div onClick={toggleLanguagey} className="text-[#19191A] select-none cursor-pointer font-medium">{langy}</div>
              <p className='text-[13px] font-medium text-[#BABABA]'>BAHAR STORE MMC(2005939831)</p>
            </div>
            <div className="az h-[90px] w-[56%]">
              <nav className='w-full'>
                <ul className='flex flex-nowrap gap-x-6 list-inside marker:text-gray-400 text-gray-600 font-medium text-[12px]'>
                  <li className='cursor-pointer'>FAQ</li>
                  <li className='list-disc cursor-pointer'>Çatdırılma və geri qaytarma şərtləri</li>
                  <li className='list-disc cursor-pointer'>Loyallıq proqramı</li>
                  <li className='list-disc cursor-pointer'>Ödəniş şərtləri</li>
                  <li className='list-disc cursor-pointer'>Gizlilik Siyasəti</li>
                </ul>
              </nav>
            </div>
            <div className="az h-[130px] w-[15%] flex gap-[10px] items-center pb-[32px]">
              <p className='text-[12px] text-gray-600 font-medium'>Hazırladı</p>
              <div className="ik1 w-[38px] h-[38px] bg-[#19191A] hover:bg-[#E6176F] transition-all duration-300 rounded-[50%] flex items-center justify-center"><span className=' text-[18px] font-bold text-[#5E5E5E]'>one</span></div>
              <div onClick={scrollToTop} className="ik1 w-[48px] h-[48px] ml-[10px] bg-white border border-solid border-[#EAE1E1] rounded-[50%] flex items-center justify-center cursor-pointer"><span className=' text-[18px] font-bold text-[#EA0B17]'><FaArrowUp /></span></div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer