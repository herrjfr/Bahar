import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { Link, useParams } from 'react-router-dom'

function Details() {
    const {products} = useContext(ProductsContext)
    const {ID} = useParams()

    //bu elementin
    const product = products.find(x=>x.id==ID) 

    //bu da melumatlari
    const {barcode,brand,categories,disc_percent,id,image,in_stock,
    is_best_seller,is_new,name,old_price,packaging,price,
    product_code,raiting,running_out,slug,volume,volume_unit,
    weight,weight_unit} = product
    console.log(product);
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
      <div className='Details w-full flex justify-between pt-[80px]'>
        <div className='ForImg h-[395px] border-1 border-[gray]/50 rounded-[20px] overflow-hidden w-[395px] flex justify-center items-center'>
          <img src={image} className='max-w-[395px] max-h-[395px]'/>
        </div>
        <div className='ForText bg-[red] h-[400] w-[790px]'></div>
      </div>
    </section>
  )
}

export default Details