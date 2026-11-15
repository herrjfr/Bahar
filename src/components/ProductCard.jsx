
import React from 'react'
import { TrendingDown, Heart, Handbag } from 'lucide-react'
import bestIconTyu from '../assets/bestsell2.png'
import percentIcon from '../assets/percent2.png'

const ProductCard = ({ image, status }) => {
    return (
        <div className="group relative w-[300px] cursor-pointer hover:z-[999]">

            <div className="relative w-full h-[500px] border border-gray-200 rounded-xl overflow-hidden flex flex-col bg-white">

                <div className="w-full h-[55%] shrink-0 relative bg-white overflow-hidden mt-[7px]">

                    {status === 'low' && (
                        <span className="absolute top-3 left-3 w-[142px] h-[38px] bg-[#F9EBDB] text-[#E98011] rounded-full flex items-center justify-center gap-1 text-[16px] font-['Inter_Tight'] z-10">
                            <TrendingDown size={31} strokeWidth={2} />
                            Tükənir
                        </span>
                    )}

                    {status === 'out' && (
                        <span className="absolute top-3 left-3 w-[142px] h-[38px] bg-[#F9EBDB] text-[#E98011] rounded-full flex items-center justify-center gap-1 text-[16px] font-['Inter_Tight'] z-10">
                            <TrendingDown size={31} strokeWidth={2} />
                            Stokda yoxdur
                        </span>
                    )}

                    <img
                        src={image}
                        alt="Məhsul"
                        className={`w-full h-full object-contain origin-center transition-transform duration-300 ease-in-out hover:scale-120 ${status === 'out' ? 'opacity-50' : ''
                            }`}
                    />
                </div>

                <div className="w-full px-3 pt-3">
                    <p className="text-[19px] font-['Inter_Tight'] font-semibold text-[#19191A]">
                        <span className="block">Məhsul haqqında məlumat</span>
                        <span className="block">və digər əlavə sözlər burada...</span>
                    </p>
                </div>

                <div className="w-full px-3 mt-5 flex items-center gap-[22px]">
                    <span className="bg-[#FEECED] text-[#EA0B17] border-2 border-[#EA0B17] rounded-2xl px-[11px] py-1 text-[12px]">
                        -20%
                    </span>

                    <span className="text-[#303030] text-[14px] line-through decoration-[#EC232E] decoration-1">
                        5.40 ₼
                    </span>

                    <span className="text-[#19191A] text-[28px] font-['Inter_Tight'] font-bold">
                        6.21 ₼
                    </span>
                </div>

                <div className="w-full mt-3 px-3 flex items-center gap-[10px]">

                    <div className="flex items-center gap-2 bg-[#EBFDEE] border border-[#BDBDBD] rounded-3xl px-[27.5px] py-[10.5px]">
                        <img
                            src={bestIconTyu}
                            alt="BestSell"
                            className="w-7 h-7 object-contain"
                        />

                        <span className="text-[#2D9D3F] text-[18px] font-semibold font-['Inter_Tight']">
                            BestSell
                        </span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#FCE0E2] border border-[#BDBDBD] rounded-3xl px-[27.5px] py-[10.5px]">
                        <img
                            src={percentIcon}
                            alt="Endirim"
                            className="w-7 h-7 object-contain"
                        />

                        <span className="text-[#EA0B17] text-[18px] font-semibold font-['Inter_Tight']">
                            Endirim
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute top-full left-0 w-full h-[70px] bg-white rounded-b-xl border-x border-b border-gray-200 flex items-center justify-center gap-[10px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[999]">


                <div className="w-[70px] h-[50px] shrink-0 border border-black bg-white flex items-center justify-center">
                    <Heart
                        size={22}
                        color="#000000"
                        strokeWidth={1.8}
                    />
                </div>


                <div className="w-[170px] h-[50px] shrink-0 bg-black rounded-md flex items-center justify-center gap-[10px]">
                    <Handbag
                        size={21}
                        color="#FFFFFF"
                        strokeWidth={1.8}
                    />

                    <span className="text-white text-[14px] font-['Inter_Tight']">
                        Səbətə at
                    </span>
                </div>

            </div>


        </div>
    )
}

export default ProductCard
