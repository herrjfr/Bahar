import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
   
    console.log('Nömrə:', '+994' + phone)
    
  }

  return (
    <section className="w-full min-h-[740px] bg-white flex flex-col items-center gap-[25px] font-[Inter,sans-serif]">
      {/* Başlıq */}
      <div className="w-full h-[90px] flex flex-col items-center justify-center gap-[6px]">
        <h1 className="text-[26px] leading-[30px] font-bold text-[#1a1a1a]">Şifrəmi unutdum</h1>
        <div className="flex items-center gap-[10px]">
          <span className="text-[13px] font-medium text-black">Bahar Store</span>
          <span className="text-[13px] text-gray-600">/</span>
          <span className="text-[13px] text-gray-500">Şifrəmi unutdum</span>
        </div>
      </div>

      <main className="w-[620px] h-[380px] border border-gray-300 rounded-[20px] flex flex-col items-center justify-center gap-[25px]">
      
        <div className="w-[370px] flex flex-col items-center gap-[10px] text-center">
          <h2 className="text-[21px] font-semibold text-[#e8000d]">Şifrəmi unutdum</h2>
          
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-[370px] flex flex-col gap-[25px]">
          <div className="w-full flex flex-col gap-[8px]">
            <label className="indent-[14px] text-[12px] text-[#b3b3b3]">Nömrə</label>
            <div className="w-full h-[50px] flex gap-[2px]">
              <div className="w-[70px] h-full bg-[#f4f4f4] rounded-l-[12px] flex items-center justify-center text-[13px] font-medium text-[#1a1a1a]">
                +994
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 h-full bg-[#f4f4f4] rounded-r-[12px] outline-none indent-[16px] text-[15px] text-[#1a1a1a]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[52px] bg-black rounded-[12px] text-[17px] font-medium text-white"
          >
            Göndər
          </button>

          <Link to="/login" className="w-fit border-b border-[#ccc] text-[12px] text-gray-500">
            Daxil ol
          </Link>
        </form>
      </main>
    </section>
  )
}

export default ForgotPassword