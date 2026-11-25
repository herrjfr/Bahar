import React from 'react'
import miss1 from '../assets/miss1.jpg'
import miss2 from '../assets/miss2.jpg'
import miss3 from '../assets/miss3.jpg'

function Missiya() {
  return (
    <>
      <div className="w-[100%] h-[1500px] px-[150px]">
        <div className="w-[100%] h-[1500px]  flex flex-col gap-[80px]">
          <div className="bir w-[100%] h-[420px] flex flex-row items-center justify-between gap-[70px]">
            <div className="w-[48%] text-left">
              <h2 className='text-[34px] font-semibold mb-[24px] pt-[15px] text-[#111] cursor-pointer'>
                Missiya və məqsədimiz
              </h2>
              <p className='text-[17px] leading-[1.6] mb-[20px] text-[#000029]'>
                Əsas missiyamız, qadına və onun ailəsinə olan qayğımızla, müştərilərimizə doğru seçim etməkdə yardımçı olmaq və məhsulları onlara əlçatan etməkdir. Biz, peşəkar ekspert məsləhətçilərimizlə hər zaman yanınızdayıq və geniş məhsul çeşidimizlə sizə unikal alış-veriş təcrübəsi yaşadırıq. Bakıda parfümeriya və kosmetika məhsullarının aparıcı pərakəndə satıcısı olmaqdan qürur duyuruq.
              </p>
              <p className='text-[17px] leading-[1.6] text-[#000029]'>
                Bahar Store, hər bir qadının və onun ailəsinin sağlamlığına və gözəlliyinə xüsusi önəm verir. Biz, qadınların özlərinə olan inamını artırmaq və ailə üzvlərinin həyat keyfiyyətini yüksəltmək üçün buradayıq. Məqsədimiz, hər bir müştərimizin ehtiyaclarını qarşılayaraq, onların həyatına dəyər qatmaqdır.
              </p>
            </div>
            <div className="w-[52%] h-[100%] flex justify-end items-center">
              <img src={miss1} alt="sekil" className='w-full h-[100%] object-cover rounded-[30px]' />
            </div>
          </div>

          <div className="iki w-[100%] h-[425px]  flex flex-row items-center justify-between gap-[70px]">
            <div className="w-[52%] h-[98%] flex justify-end items-center">
              <img src={miss2} alt="sekil" className='w-full h-[100%] object-cover rounded-[30px]' />
            </div>
            <div className="w-[48%] text-left">
              <h2 className='text-[34px] font-semibold mb-[20px] pt-[25px] text-[#111] cursor-pointer'>
                Gələcəyə baxış və vizyon
              </h2>
              <p className='text-[17px] leading-[1.6] mb-[20px] text-[#000029]'>
                “Bahar Store” olaraq, gələcəyə baxışımız daim yeniliklər və müştəri məmnuniyyəti üzərində qurulub. Bizim məqsədimiz, gözəllik və sağlamlıq sahəsində ən qabaqcıl trendləri izləyərək, müştərilərimizə ən son və keyfiyyətli məhsulları təqdim etməkdir. Hər zaman müştərilərimizin ehtiyaclarını diqqətlə dinləyir və onların gözləntilərini aşmaq üçün çalışırıq.
              </p>
              <p className='text-[17px] leading-[1.6] text-[#000029]'>
                Viziyonumuz, Azərbaycan və regionda gözəllik və sağlamlıq məhsulları üzrə ən güvənilən və seçilən marka olmaqdır. Bu məqsədlə, biz məhsul çeşidimizi genişləndirməklə yanaşı, müştərilərimizə daha fərdi və peşəkar xidmətlər təqdim etməyi planlaşdırırıq. “Bahar Store” olaraq, qadınların və ailələrinin həyatını daha da gözəlləşdirmək üçün hər zaman yeniliklər və inkişaflar üzərində işləməyə davam edəcəyik.
              </p>
            </div>
          </div>

          <div className="uc w-[100%] h-[400px] flex flex-row items-center justify-between gap-[70px]">
            <div className="w-[48%] text-left">
              <h2 className='text-[34px] font-semibold mb-[24px] pt-[15px] text-[#111] cursor-pointer'>
                Müştərilər üçün
              </h2>
              <p className='text-[17px] leading-[1.6] mb-[20px] text-[#000029]'>
                “Bahar Store” müştərilərinə sərfəli qiymətlərlə diqqətlə seçilmiş məhsul çeşidini təklif edir. Mağazalarda gözəllik, sağlamlıq və ev üçün zəruri olan əşyalar var. Buraya kosmetika və bədənə qulluq məhsulları, ətirlər, sağlam həyat tərzi və ailə rahatlığı üçün əşyalar, körpələr üçün məhsullar, eləcə də aparıcı qlobal brendlərin sağlamlıq məhsulları daxildir.
              </p>
              <p className='text-[17px] leading-[1.6] text-[#000029]'>
                Biz müştərilərimizin ehtiyaclarını qarşılayaraq onların həyat keyfiyyətini artırmağa çalışırıq. Hər bir məhsul seçimində keyfiyyətə və müştəri məmnuniyyətinə xüsusi önəm veririk.
              </p>
            </div>
            <div className="w-[52%] h-[100%] flex justify-end items-center">
              <img src={miss3} alt="sekil" className='w-full h-[100%] object-cover rounded-[30px]' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Missiya