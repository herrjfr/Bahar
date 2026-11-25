import { useContext, useEffect, useMemo } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { Link, useParams } from 'react-router-dom'
import { TbAwardFilled, TbShoppingBag, TbShoppingBagPlus } from 'react-icons/tb'
import ProductCard from './ProductCard'
import { PiSealPercentFill } from 'react-icons/pi'

function Details() {

  const { products, cart, addCart, removeCart } = useContext(ProductsContext)

  const { ID } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [ID])

  const product = products.find(x => x.id == ID)

  const { barcode, brand, categories, disc_percent, id, image, in_stock,
    is_best_seller, is_new, name, old_price, packaging, price,
    product_code, raiting, running_out, slug, volume, volume_unit,
    weight, weight_unit } = product

  const inCart = cart.some(x => x.id == id)

  const sameProducts = useMemo(() => {
    const filtered = products.filter(
      x => x.categories[0] == categories[0] && x.id != id
    )
    const random = Math.max(4, Math.round(Math.random() * filtered.length))
    return filtered.slice(random - 4, random)
  }, [products, id])


  return (
    <section className='w-full px-[150px] flex flex-col items-center pt-[10px]'>
      <p className='text-[30px] font-[600]'
      >{name.split(" ")[0]}</p>
      <div className='flex items-center gap-x-[10px] text-[12px] font-[600]'>
        <Link to={"/"} className='cursor-pointer'>
          Bahar store
        </Link>
        <span>/</span>
        <p className='cursor-pointer'>{categories[0]}</p>
      </div>
      <div className='Details w-full flex justify-between py-[80px]'>
        <div className='ForImg w-[395px] flex justify-between'>
          <div className='w-[80px] h-[80px] border-1 border-[gray]/30 rounded-[10px] overflow-hidden flex justify-center items-center'>
            <img className='cursor-pointer hover:scale-[1.1] transition-all duration-300' src={image} />
          </div>
          <div className='w-[300px] h-[300px] border-1 border-[gray]/30 rounded-[15px] overflow-hidden flex justify-center items-center'>
            <img className='cursor-pointer' src={image} />
          </div>
        </div>
        <div className='ForText border-black/10  w-[790px]'>
          <p className='text-[20px] font-[600] pt-[10px]'>
            {name}
          </p>
          <p className='text-[14px] text-[gray]'>Məhsul kodu: {product_code}</p>
          <p className='text-[14px] text-[gray] pt-[5px]'>Məhsulun barkodu: {barcode}</p>
          <div className='h-[1px] w-full bg-black/10 mt-[11px]'></div>
          <div className='w-full h-[70px] flex items-end gap-x-[10px] pb-[8px]'>
            {is_best_seller == 1 &&
              <div className='text-[#2D9D3F] bg-[#EBFDEE] flex items-center gap-x-[5px] px-[15px] py-[5px] rounded-[20px]'>
                <TbAwardFilled className='text-[26px]'/>
                <p className='text-[12px] font-[600]'>Bestsell...</p>
              </div>}
            {disc_percent > 0 &&
              <div className='text-[#EA0B17] bg-[#FCE0E2] flex items-center gap-x-[5px] px-[15px] py-[5px] rounded-[20px]'>
                <PiSealPercentFill className='text-[26px]'/>
                <p className='text-[12px] font-[600]'>Endirim</p>
              </div>}
          </div>
          <div className='Melumatlar flex justify-between items-start'>
            <div className='Sol'>
              <p className='text-[15px] font-[600]'>Məhsulun xüsusiyyətləri</p>
              <div className='flex gap-x-[10px] items-center pt-[22px]'>
                <p className='text-[14px] text-[gray] font-[600]'>BREND:</p>
                <span className='text-[13px] font-[600] px-[10px] rounded-[5px] bg-[#EEEEEE]'>{brand.brand_name}</span>
              </div>
              <div className='flex gap-x-[10px] items-center pt-[16px]'>
                <p className='text-[14px] text-[gray] font-[600]'>KATEQORIYA:</p>
                <span className='text-[13px] font-[600] px-[10px] rounded-[5px] bg-[#EEEEEE]'>{categories[0]}</span>
              </div>
            </div>
            <div className='Sag flex flex-col items-end'>
              <div className='h-[20px]'>
                {disc_percent > 0 &&
                  <p className='line-through decoration-[red] text-[13px]'>{old_price} ₼</p>}
              </div>
              <div className='flex items-center gap-x-[15px] pb-[10px]'>
                {disc_percent > 0 &&
                  <span className='text-[18px] font-[600] w-[65px] h-[45px] rounded-[30px] bg-[#FEECED] border-1 border-[red] text-[red] flex justify-center items-center'><span>-{disc_percent}%</span></span>}
                <p className='text-[24px] font-[600]'>{price} ₼</p>
              </div>
              {in_stock == 0 ?
                <button className='border-1 border-[red] w-[175px] h-[50px] rounded-[5px] text-[red] flex items-center justify-center gap-x-[10px] transition-all duration-700 font-[600]'><span>Stokda yoxdur</span></button>
                :
                <button
                  onClick={() => inCart ? removeCart(id) : addCart(id)}
                  style={inCart ?
                    {
                      backgroundColor: "white",
                      color: "#2D9D3F",
                      border: "solid 1px black"
                    } : {}}
                  className='bg-[black] w-[175px] h-[50px] rounded-[5px] text-[white] cursor-pointer flex items-center justify-center gap-x-[10px] transition-all duration-700'>
                  {inCart ?
                    <>
                      <TbShoppingBag className='text-[25px] text-[green]' />
                      <span className='font-[600] text-[16px]'>Əlavə olundu</span>
                    </> :
                    <>
                      <TbShoppingBagPlus className='text-[25px] text-[gray]' />
                      <span className='font-[600] text-[16px]'>Səbətə at</span>
                    </>}
                </button>}
            </div>
          </div>
        </div>
      </div>
      <p className='text-[34px] font-[600] pb-[20px]'>Oxşar məhsullar</p>
      <div className='w-full flex justify-between pb-[200px]'>
        {sameProducts.map(item => {
          return <ProductCard key={item.id} item={item} />
        })}
      </div>
    </section>
  )
}

export default Details