import React from 'react'

function Haqqimizda() {
  return (
    <>
      <div className='w-[100%] h-[1100px] flex flex-col justify-around items-center gap-[120px] '>
        <div>
          <h1 className="text-[29px] font-semibold leading-normal font-inter-tight">
            Haqqımızda
          </h1>

          <div className="flex items-center h-[30px]">
            <span className="relative inline-block cursor-pointer group">
              <span className="text-[13px] font-medium transition-colors duration-500 delay-100 group-hover:text-[#F0434A]">
                Bahar Store
              </span>

              <span className="absolute left-0 -bottom-[2px] h-[1px] w-full origin-left scale-x-0 bg-[#F0434A] transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>

            <span className="ml-[7px] mr-[15px] text-[21px] leading-none">/</span>

            <span className="translate-y-[2px] text-[#C3C3C3] text-[12px] font-inter-tight cursor-default">
              Haqqımızda
            </span>
          </div>
        </div>
        <div className="w-[90%] h-[900px] flex justify-evenly">
          <img
            className="w-[345px] h-[435px] -translate-y-[35px]"
            src="https://admin475.baharstore.az/storage//uploads/images/about/img-6675a61b60628.png"
            alt=""
          />

          <img
            className="w-[345px] h-[435px]"
            src="https://admin475.baharstore.az/storage//uploads/images/about/img-6675a61b60b0f.png"
            alt=""
          />

          <img
            className="w-[345px] h-[435px] -translate-y-[35px]"
            src="https://admin475.baharstore.az/storage//uploads/images/about/img-6675a61b60ef7.png"
            alt=""
          />

          <img
            className="w-[345px] h-[435px]"
            src="https://admin475.baharstore.az/storage//uploads/images/about/img-6675a61b60ff9.png"
            alt=""
          />
        </div>
        <div className='w-[100%] h-[600px] flex flex-col items-center gap-[12px]'>
          <span className='text-[33px] font-inter-tight font-semibold'>Bahar store</span>
          <span className='text-[18px] font-inter-tight text-[#3B3B3C]'> <span className='font-semibold'> Bahar Store </span> müştərilərinə sərfəli qiymətlərlə geniş məhsul çeşidi təqdim edərək gözəllik və sağlamlıq</span>
          <span className='text-[18px] font-inter-tight text-[#3B3B3C]'>üçün lazım olan hər şeyi bir arada təklif edir. Hər zövqə uyğun keyfiyyətli məhsulları ilə Bahar Store</span>
          <span className='text-[18px] font-inter-tight text-[#3B3B3C]'>hər zaman müştərilərinin yanında olmağa çalışır.</span>
          <span className='text-[18px] font-inter-tight text-[#3B3B3C]'>“Bahar Store LLC” MMC Benefisiarın VÖEN-i:  2005939831</span>
        </div>
      </div>
      <div className='width-[100%] h-[900px] flex flex-col justify-evenly items-center'>
        <div className="w-[80%] h-[250px] mb-[90px] flex flex-col items-end">
          <div className="w-[50%] mr-[-60px] flex flex-col gap-5">
            <h1 className="text-[29px] font-semibold text-black">
              TARİXİMİZ
            </h1>

            <div className="flex flex-col gap-6 text-[22px] leading-[34px] text-[#444444]">
              <p>
                <span className="font-bold">Bahar Store</span> şirkəti 2017-ci ildə Azərbaycanda yaradılmış və qısa zamanda innovativ "Drogerie" formatının uğurlu nümunəsinə çevrilmişdir. Avropada geniş yayılan bu format, Azərbaycanda müştərilərin alış-veriş ehtiyaclarını daha müasir, rahat və fərqli bir şəkildə qarşılamaq məqsədilə tətbiq edilmişdir.
              </p>

              <p>
                <span className="font-bold">Bahar Store</span> keyfiyyətli məhsulları, geniş seçim imkanları və xüsusi xidmət yanaşması ilə alış-verişi zövqə çevirir. Şirkət davamlı olaraq müştərilərinin məmnuniyyətini artırmaq üçün yeni imkanlar yaradır.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-evenly items-center">
          <div className="flex flex-col items-center gap-4">
            <span className="text-[20px] text-black">Məhsul</span>
            <span className="text-[90px] font-bold text-[#F4858B] leading-none">8319</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[20px] text-black">Brend</span>
            <span className="text-[90px] font-bold text-[#F4858B] leading-none">147</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[20px] text-black">Filial</span>
            <span className="text-[90px] font-bold text-[#F4858B] leading-none">10</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[20px] text-black">Əməkdaş</span>
            <span className="text-[90px] font-bold text-[#F4858B] leading-none">159</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Haqqimizda