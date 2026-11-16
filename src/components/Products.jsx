
import React from 'react'
import ProductCard from './ProductCard'
import newIcon from '../assets/new.png'
import bestIcon from '../assets/bestsllr.png'
import percentIcon from '../assets/percent.png'
import line from '../assets/xett.png'
import sek1 from '../assets/sek1.jpg'
import sek2 from '../assets/sek2.png'
import sek3 from '../assets/sek3.png'
import sek4 from '../assets/sek4.png'
import sek5 from '../assets/sek5.png'
import sek6 from '../assets/sek6.jpg'
import sek7 from '../assets/sek7.png'
import sek8 from '../assets/sek8.jpg'
import sek9 from '../assets/sek9.jpg'
import sek10 from '../assets/sek10.jpg'
import sek11 from '../assets/sek11.png'
import sek12 from '../assets/sek12.png'
import sek13 from '../assets/sek13.png'
import sek14 from '../assets/sek14.jpg'
import sek15 from '../assets/sek15.jpg'
import sek16 from '../assets/sek16.jpg'

const Products = () => {

  const products = [
    { image: sek1, status: 'normal' },
    { image: sek2, status: 'normal' },
    { image: sek3, status: 'low' },
    { image: sek4, status: 'normal' },
    { image: sek5, status: 'normal' },
    { image: sek6, status: 'normal' },
    { image: sek7, status: 'out' },
    { image: sek8, status: 'out' },
    { image: sek9, status: 'out' },
    { image: sek10, status: 'normal' },
    { image: sek11, status: 'normal' },
    { image: sek12, status: 'low' },
    { image: sek13, status: 'out' },
    { image: sek14, status: 'out' },
    { image: sek15, status: 'out' },
    { image: sek16, status: 'normal' },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-[10px] px-[150px]">


      <div className="w-full flex items-center justify-center gap-6 mb-10">


        <div className="flex items-center gap-2 cursor-pointer group">
          <img src={newIcon} className="w-8 h-8" />
          <span className="text-[28px] text-[#857B7B] group-hover:text-black transition-colors duration-200">
            Yeni
          </span>
        </div>

        <img src={line} className="w-3 h-10 object-fill" />


        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={bestIcon}
            className="w-8 h-8 transition-all duration-200 group-hover:brightness-75"
          />
          <span className="text-[28px] text-[#414141] font-semibold group-hover:text-black transition-colors duration-200">
            Bestseller
          </span>
        </div>

        <img src={line} className="w-3 h-8 object-fill" />

        <div className="flex items-center gap-2 cursor-pointer group">
          <img src={percentIcon} className="w-8 h-8" />
          <span className="text-[28px] text-[#857B7B] group-hover:text-black transition-colors duration-200">
            Endirim
          </span>
        </div>

      </div>

      <div className="flex flex-wrap -mx-2">

        {products.map((product, index) => (
          <div key={index} className="w-1/4 px-2 mb-6 flex justify-center">
            <ProductCard
              image={product.image}
              status={product.status}
            />
          </div>
        ))}

      </div>

      <div className="w-full flex justify-center mt-[20px]">
        <button className="w-[200px] h-[50px] bg-black text-white rounded-lg flex items-center justify-center text-[18px] font-['Inter_Tight'] font-semibold cursor-pointer hover:bg-[#333333] transition-colors duration-300">
          Hamısını göstər
        </button>
      </div>

    </div>
  )
}

export default Products
