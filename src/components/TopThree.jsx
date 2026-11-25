import React, { useContext, useEffect } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useState } from 'react'
import { ProductsContext } from '../context/ProductsContext';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

function TopThree() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  const location = useLocation()
  const type = location.pathname

  const { products } = useContext(ProductsContext)

  const f_best = products.filter(x => x.is_best_seller == 1)
  let best
  if(f_best.length>=90){
    best=f_best.slice(0,90)
  }else{
    best = f_best.slice(0, f_best.length - (f_best.length % 3))
  }

  const f_new = products.filter(x => x.is_new == 1)
  let neww
  if(f_new.length>=90){
    neww = f_new.slice(0,90)
  }else{
    neww = f_new.slice(0, f_new.length - (f_new.length % 3))
  }

  const f_disc = products.filter(x => x.disc_percent > 0)
  let disc
  if(f_disc.length>=90){
    disc = f_disc.slice(0,90)
  }else{
    disc = f_disc.slice(0, f_disc.length - (f_disc.length % 3))
  }

  let prod = []

  if (type === '/best-seller') {
    prod = best
  } else if (type === '/new') {
    prod = neww
  } else if (type === '/discount') {
    prod = disc
  }


  const [isOpen, setisOpen] = useState(false)
  const [isOpenqiy, setisOpenqiy] = useState(false)
  const [minQiymet, setminQiymet] = useState(1)
  const [maxQiymet, setmaxQiymet] = useState(72)
  const maxLimit = 72
  const [isOpenh, setisOpenh] = useState(false)
  const [isOpeno, setisOpeno] = useState(false)
  const [isOpendn, setisOpendn] = useState(false)
  const [isOpenr, setisOpenr] = useState(false)
  const [isOpent, setisOpent] = useState(false)
  const [isOpenrc, setisOpenrc] = useState(false)
  const [isOpenb, setisOpenb] = useState(false)
  const [isOpenen, setisOpenen] = useState(false)
  const [isOpencs, setisOpencs] = useState(false)
  const [isOpennn, setisOpennn] = useState(false)
  const [isOpensn, setisOpensn] = useState(false)
  const [isOpeniz, setisOpeniz] = useState(false)
  const [activeSort, setActiveSort] = useState('')
  const brands = ["EVELINE", "BELLAOGGI", "SAF", "ASTRA", "GEPARLYS", "SKIN1004", "LA RIVE", "ENERGY VITAMINS", "LIONESSE", "TENZERO", "SUNDAY RAIN", "JVONE", "NAEXY", "BERGAMEO", "SPPC", "BERGAMEO", "BERGAMEO", "BERGAMEO", "BERGAMEO", "BERGAMEO", "BERGAMEO", "BERGAMEO"]
  const hecm = ["30 ml", "12 ml", "100 ml", "400 ml", "50 ml", "200 ml", "0.09 g", "15 g", "350 ml", "4.5 ml", "75 ml", "2 ml", "4 ml", "4 ml", "4 ml", "4 ml", "4 ml", "4 ml", "4 ml", "4 ml", "4 ml", "4 ml", "4 ml"]
  const olke = ["Polşa", "İtaliya", "Fransa", "Koreya", "Ukrayna", "Türkiyə", "Hollandiya"]
  const derinovu = ["Bütün dəri növləri", "Yağlı və problemli dəri", "Quru, həssas dəri"]
  const reng = ["Qara", "Nude", "Naturale"]
  const teyinat = ["Bərpa, möhkəmlənmə", "Nəmləndirmə, qidalanma", "Təmizləyici, nəmləndirici", "Staylinq, fiksasiya", "Təmizləmə", "Sakitləşdirici", "Bərpaedici", "Qidalanma", "Həcm", "Bərpa", "Gücləndirmə", "Parlaqlıq", "Boyama", "Hamarlaşdırıcı", "Sebum tənzimlənməsi", "Bərpa", "Bərpa", "Bərpa", "Bərpa", "Bərpa", "Bərpa"]
  const rengcalari = ["Brown", "Taupe", "Sand", "Chili Pepper", "Peach", "Bamboo", "Black", "Light Porcelain", "Velvety black", "Transparent", "Daydreaming", "Muffin", " Rose", "Şəffaf"]
  const bitis = ["Yarı mat", "Mat", "Parlaq", "Satin"]
  const etir = ["Şərqli, çiçəkli, kəhrəba, müşk", "Odunlu, şiprli", "Çiçəkli, kəhrəba", "Çiçəkli, meyvəli"]
  const cins = ["Qadın üçün", "Kişi üçün"]
  const nov = ["Duz tərkibli"]
  const sacnov = ["Normal, yağlı saçlar üçün", "Nazik saçlar üçün", "Bütün saç növləri üçün"]
  const istzaman = ["Universal"]
  const sortOptions = [
    'Endirimə görə',
    'Populyarlığa görə',
    'Yeni',
    'Ucuzdan bahaya',
    'Bahadan ucuza',
    'A-Z',
    'Z-A'
  ];







  return (
    <>
      <div className="w-[100%] min-h-[1600px] max-h-auto px-[150px] pb-[150px]">
        <div className="w-[100%] min-h-[1600px] max-h-auto flex flex-col gap-[60px]">
          <div className="biir w-[100%] h-[80px] flex flex-col items-center relative">
            <p className='absolute top-[20px] right-0 text-[14px] text-[gray]'>{prod.length} Məhsul</p>
            <h1 className='text-[26px] font-semibold font-[Inter,sans-serif] text-[#1a1a1a]'>Bahar Store</h1>
            <p className='text-[13px] font-normal text-[#B3B3B4]'>Bahar Store</p>
          </div>

          <div className="ikki w-[100%] min-h-[1600px] max-h-auto flex justify-between">
            <div className="r w-[23%] min-h-[1450px] max-h-auto">
              <div className="flex items-center gap-2 text-3xl font-medium py-[15px] border-b border-solid border-[#e0e0e0] text-gray-800">
                <span className='text-red-500'><CgMenuRightAlt /></span>
                <span>Filtr</span>
              </div>

              <div className="d px-[10px]">
                <div className="bre flex flex-col max-h-[500px] items-center py-[33px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpen(!isOpen)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Brendlər</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpen ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpen && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm overflow-y-auto [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full'>
                          {brands.map((brand, index) => (<label key={index} className='flex items-center gap-3 pt-[5px]'><input type="checkbox" className='w-4 h-4 rounded ' /><span className='font-medium'>{brand}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>


                <div className="qiy py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpenqiy(!isOpenqiy)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Qiymət</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpenqiy ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpenqiy && (
                      <div className="pt-4 pb-2 transition-all duration-300">
                        <div className="flex justify-between items-center mb-4 text-base text-gray-600">
                          <span>Qiymət aralığı</span>
                          <span className="font-semibold text-gray-800">
                            {minQiymet}-{maxQiymet} AZN
                          </span>
                        </div>
                        <div className="relative w-full h-2 bg-[#F31260] rounded-md my-7">
                          <div
                            className="absolute w-4 h-4 bg-white border-2 border-[#F31260] rounded-full top-1/2 cursor-pointer shadow-sm"
                            style={{ left: `${(minQiymet / maxLimit) * 100}%`, transform: 'translate(-50%, -50%)' }}
                          />
                          <div
                            className="absolute w-4 h-4 bg-white border-2 border-[#F31260] rounded-full top-1/2  cursor-pointer shadow-sm"
                            style={{ left: `${(maxQiymet / maxLimit) * 100}%`, transform: 'translate(-50%, -50%)' }}
                          />
                          <input
                            type="range"
                            min="1"
                            max={maxLimit}
                            value={maxQiymet}
                            onChange={(e) => setmaxQiymet(Number(e.target.value))}
                            className="absolute top-0 left-0 w-full h-1 opacity-0 cursor-pointer accent-red-500"
                          />
                        </div>
                        <button className="w-full bg-[#191921] text-white text-base font-medium py-3 px-4 rounded-md hover:bg-[#5E5E5E] transition-colors duration-300 mt-2">
                          Axtar
                        </button>
                      </div>
                    )}
                  </div>
                </div>


                <div className="hecm flex flex-col max-h-[700px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpenh(!isOpenh)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Həcm</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpenh ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpenh && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[470px] text-sm overflow-y-auto [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full'>
                          {hecm.map((hecm, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{hecm}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="olke flex flex-col max-h-[350px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpeno(!isOpeno)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Ölkə</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpeno ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpeno && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[350px] text-sm'>
                          {olke.map((olke, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{olke}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="derinovu flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpendn(!isOpendn)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Dəri növü</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpendn ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpendn && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {derinovu.map((derinovu, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{derinovu}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="reng flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpenr(!isOpenr)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Rəng</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpenr ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpenr && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {reng.map((reng, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{reng}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="teyinat flex flex-col max-h-[700px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpent(!isOpent)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Təyinat</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpent ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpent && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[470px] text-sm overflow-y-auto [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full'>
                          {teyinat.map((teyinat, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{teyinat}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="rengcalari flex flex-col max-h-[550px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpenrc(!isOpenrc)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Rəng çaları</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpenrc ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpenrc && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[550px] text-sm'>
                          {rengcalari.map((rengcalari, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{rengcalari}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bitis flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpenb(!isOpenb)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Bitiş</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpenb ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpenb && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {bitis.map((bitis, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{bitis}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="etir flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpenen(!isOpenen)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Ətir növü</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpenen ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpenen && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {etir.map((etir, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{etir}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="cins flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpencs(!isOpencs)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Cinsiyyət</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpencs ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpencs && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {cins.map((cins, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{cins}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="nov flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpennn(!isOpennn)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Növ</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpennn ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpennn && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {nov.map((nov, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{nov}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="sacnov flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpensn(!isOpensn)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>Saç növü</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpensn ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpensn && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {sacnov.map((sacnov, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{sacnov}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="istzaman flex flex-col max-h-[250px] items-center py-[28px] border-b border-solid border-[#e0e0e0]">
                  <div onClick={() => setisOpeniz(!isOpeniz)} className=" w-full flex justify-between items-center">
                    <span className='text-lg font-medium cursor-pointer'>İstifadə zamanı</span>
                    <span className='text-3xl font-semibold cursor-pointer'>{isOpeniz ? '–' : '+'}</span>
                  </div>
                  <div className="w-full">
                    {isOpeniz && (
                      <div className='pt-4 pb-2'>
                        <div className="relative mb-4">
                          <span className='absolute inset-y-0 left-0 flex items-center'><CiSearch /></span>
                          <input type="text" placeholder='Axtar' className='w-full pl-7 pr-3 py-2 text-sm border-b border-solid focus:border-b outline-none' />
                        </div>
                        <div className='max-h-[250px] text-sm'>
                          {istzaman.map((istzaman, index) => (<label key={index} className='flex items-center pt-[5px]'><p className='' /><span className='font-normal text-[16px] cursor-pointer hover:text-[#A1A1A2] transition-colors duration-300'>{istzaman}</span></label>))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="l w-[75%] min-h-[50px] flex flex-col gap-6">
              <div className="flex gap-4 w-[100%] text-sm  text-gray-700">
                <span className="text-[#7F7F7F] text-base font-medium pt-[3px]">Sırala</span>
                <div className="flex gap-3">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setActiveSort(activeSort === option ? null : option)}
                      className={`px-4 py-1.5 rounded-md border transition-all text-sm font-medium whitespace-nowrap cursor-pointer
              ${activeSort === option
                          ? 'border-[#8C8C8D] border-solid bg-white text-gray-900 shadow-sm'
                          : ' text-gray-500 border-[#EAE1E1]'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* KARTLAR HISSESI */}
              <div className="flex justify-between flex-wrap gap-y-[30px]">
                {prod.map(item => {
                  return <ProductCard key={item.id} item={item} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopThree