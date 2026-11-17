import { useState } from "react";
import { ImMinus } from "react-icons/im";
import { ImPlus } from "react-icons/im";


function MainText() {

  const [open,setOpen] = useState(true)

  return (
    <section className='px-[150px] flex flex-col items-start gap-y-[20px] pt-[20px]'>
      <div
      className={open?"h-[200px] overflow-hidden":"overflow-hidden"}>
        <div className='Umumi w-[92%] flex flex-col gap-y-[10px] text-[14px] text-black/70 relative'>
          {open && 
          <div className="w-[100%] h-[120px] top-[80px] bg-gradient-to-t from-white to-transparent absolute z-1 "></div>
          }
          <p className='text-[20px] font-[600] text-black'>
            Bahar Store - Gözəllik və Baxım Məhsulları, Sizin Seçiminiz!
          </p>
          <p>
            Bahar Store – gözəllik və sağlamlıq sahəsində lider olan, müştərilərinə geniş çeşiddə məhsul təqdim edən unikal mağaza şəbəkəsidir. Bakıda və onlayn platformada fəaliyyət göstərən mağazamız, həm keyfiyyət, həm də sərfəli qiymətlərlə seçilir.</p>
          <p>
            <span className='font-[700]'>Gözəllik Məhsulları ilə Unikal Təcrübə: </span>
            Makiyaj sevənlər üçün Bahar Store əsl cənnətdir. Burada
            <span className='font-[700]'> tonal kremlər, BB və CC kremlər, göz kölgələri, dodaq boyaları və rumyanalar </span> 
            kimi məhsulların geniş seçimi mövcuddur. Sizə makiyajınızı daha peşəkar və möhtəşəm göstərmək üçün lazım olan hər şey bir yerdədir.</p>
          <p>
            <span className='font-[700]'>Üz Baxımında Yeniliklər: </span>
            Üz dəriniz xüsusi diqqətə layiqdir və biz bunu çox yaxşı bilirik. Ona görə də Bahar Store sizə 
            <span className='font-[700]'> nəmləndirici kremlər, üz maskaları, peelinglər və təbii yağlar </span>
            təklif edir. Yağlı, quru və ya həssas dəri üçün xüsusi olaraq hazırlanmış məhsullarımız dəri sağlamlığınızı qorumağa və təbii gözəlliyinizi vurğulamağa kömək edir.</p>
          <p>
            <span className='font-[700]'>Saç Baxımı Üçün Hər Şey: </span>
            Bahar Store-un saç baxımı bölməsində saçlarınızın ehtiyac duyduğu hər bir məhsulu tapa bilərsiniz. 
            <span className='font-[700]'> Şampunlar, saç maskaları, kondisionerlər və hətta quru şampunlar </span>
            ilə saçlarınızı gücləndirin və parlaq edin. Saç boyaları və styling vasitələri ilə də tərzinizi dəyişmək daha asandır.</p>
          <p>
            <span className='font-[700]'>Parfümeriya ilə Özünəinam: </span>
            Parfüm hər bir insanın fərdiliyini ifadə edən vacib aksessuardır. Bahar Store-da 
            <span className='font-[700]'> qadın və kişi ətirləri, eləcə də uşaqlar üçün xüsusi aromatlar </span>
            təqdim olunur. Hədiyyə üçün mükəmməl seçim olan parfümeriya dəstləri də burada sizi gözləyir.</p>
          <p>
            <span className='font-[700]'>Geniş Çeşidimizlə Hər Kəs Üçün: </span>
            Bahar Store yalnız qadınlar üçün deyil, həm də kişilər və uşaqlar üçün də geniş çeşidli məhsullar təklif edir. 
            <span className='font-[700]'> Kişi baxımı vasitələri, uşaqlar üçün kosmetik məhsullar, hətta xüsusi yay məhsulları </span>
            ilə hər zövqə uyğun seçimlər təqdim edirik.</p>
          <p className='font-[700]'>Niyə Bahar Store-u Seçməlisiniz?</p>
          <div className='pl-[10px]'>
            <p>
              <span className='font-[700]'>Sərfəli Qiymətlər: </span>
              Keyfiyyətli məhsulları əlverişli qiymətlərlə təqdim edirik.</p>
            <p>
              <span className='font-[700]'>Geniş Çeşid: </span>
              Makiyajdan tutmuş parfümeriyaya qədər hər bir ehtiyacınızı qarşılaya biləcək məhsullar.</p>
            <p>
              <span className='font-[700]'>Onlayn və Mağaza Alış-Verişi: </span>
              Rahatlıqla evdən alış-veriş edə və ya mağazamıza gəlib məhsulları yerində görə bilərsiniz.</p>
            <p>
              <span className='font-[700]'>Ekspert Məsləhətləri: </span>
              Məhsul seçiminizdə sizə kömək etmək üçün peşəkar məsləhətçilərimiz hər zaman hazırdır.</p>
          </div>
          <p>Gözəllik və sağlamlıq məhsulları axtarışındasınızsa, Bahar Store sizin ideal seçim olacaq. Bizimlə alış-veriş edin və ən yüksək keyfiyyətdən zövq alın!</p>
        </div>
      </div>
      <div 
      onClick={()=>setOpen(x=>!x)}
      className='flex items-center gap-x-[15px] cursor-pointer'>
        <p className='text-[14px] font-[600]'>{open?"Hamısını göstər":"Gizlət"}</p>
        <p className='text-[10px] pt-[2px]'>{open?<ImPlus/>:<ImMinus/>}</p>
      </div>
    </section>
  )
}

export default MainText