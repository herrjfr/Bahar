
import React, { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'


function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="w-full min-h-[740px] bg-white flex flex-col items-center gap-[25px] font-[Inter,sans-serif]">
      {/* Başlıq */}
      <div className="w-full h-[90px] flex flex-col items-center justify-center gap-[6px]">
        <h1 className="text-[26px] leading-[30px] font-bold text-[#1a1a1a]">Daxil ol</h1>
        <div className="flex items-center gap-[10px]">
          <span className="text-[13px] font-medium text-black ">Bahar Store</span>
          <span className="text-[13px] text-gray-600 ">/</span>
          <span className="text-[13px] text-gray-500 ">Daxil ol</span>
        </div>
      </div>


      <main className="w-[620px] h-[450px] border border-gray-300 rounded-[20px] flex flex-col items-center justify-center gap-[20px]">

        <div className="flex items-center gap-[50px]">
          <button className="text-[21px] font-semibold text-[#e8000d]">Daxil ol</button>
          <Link to="/registration" className="text-[18px] font-semibold text-gray-400 ">Qeydiyyat</Link>
        </div>


        <form className="w-[370px] flex flex-col gap-[25px]">
          <div className="w-full flex flex-col gap-[23px]">

            <div className="w-full flex flex-col gap-[8px]">
              <label className="indent-[14px] text-[12px] text-[#b3b3b3]">Nömrə</label>
              <div className="w-full h-[50px] flex gap-[2px]">
                <div className="w-[70px] h-full bg-[#f4f4f4] rounded-l-[12px] flex items-center justify-center text-[13px] font-medium text-[#1a1a1a]">
                  +994
                </div>
                <input
                  type="tel"
                  className="flex-1 h-full bg-[#f4f4f4] rounded-r-[12px] outline-none indent-[16px] text-[15px] text-[#1a1a1a]"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-[8px]">
              <label className="indent-[14px] text-[12px] text-[#b3b3b3]">Şifrə</label>
              <div className="w-full h-[55px] bg-[#f4f4f4] rounded-[12px] flex items-center">
                <div className="w-[60px] h-full flex items-center justify-center">
                  <Lock size={16} className="text-[#1a1a1a]" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="******"
                  className="flex-1 h-full bg-transparent outline-none indent-[10px] text-[16px] text-[#1a1a1a]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-[60px] h-full flex items-center justify-center text-[#1a1a1a]"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>
          </div>


          <button
            type="submit"
            className="w-full h-[52px] bg-black rounded-[12px] text-[17px] font-medium text-white"
          >
            Daxil ol
          </button>

          <Link to="/forget-password" className="w-fit border-b border-[#ccc] text-[12px] text-gray-500">
            Şifrəmi unutdum
          </Link>
        </form>
      </main>
    </section>
  )
}

export default Login
