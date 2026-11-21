import { LuTrash } from "react-icons/lu";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function CardForCart({item}) {
    const {barcode,brand,categories,disc_percent,id,
    image,in_stock,is_best_seller,is_new,name,old_price,
    packaging,price,product_code,raiting,running_out,slug,
    volume,volume_unit,weight,weight_unit} = item
    
    const {cart,CountPlus,CountMinus,removeCart} = useContext(ProductsContext)

    return (
        <div className='w-full h-[190px] border-1 border-[gray]/30 rounded-[15px] flex justify-between hover:border-black p-[20px]'>
            <div className='ForImg w-[150px] h-[150px] rounded-[10px] border-1 border-[gray]/30 flex justify-center items-center overflow-hidden'>
                <img src={image} className='w-[150px]'/>
            </div>
            <div className="Main flex flex-col justify-between w-[400px] ">
                <p className="text-[15px] font-[600]">{name.toUpperCase()}</p>
                <p className="text-[13px] pb-[30px] text-[gray]">Məhsul kodu {product_code}</p>
                <div className="w-[90px] h-[40px] rounded-[10px] border-1 flex items-center justify-between px-[15px]">
                    <p 
                    onClick={()=>CountMinus(id)}
                    className="text-[14px] font-[700] cursor-pointer select-none">-</p>
                    <p className="text-[14px] font-[600]">
                        {cart.find(x => x.id == id)?.count ?? 1}
                    </p>
                    <p 
                    onClick={()=>CountPlus(id)}
                    className="text-[14px] font-[700] cursor-pointer select-none">+</p>
                </div>
            </div>
            <div className='Remove flex flex-col justify-between items-end pt-[10px]'>
                <LuTrash 
                onClick={()=>removeCart(id)}
                className="text-[18px] text-[gray] cursor-pointer mr-[10px]"/>
                {disc_percent>0 &&
                <p className="line-through decoration-[red] text-[14px] pr-[15px] pt-[30px]">{old_price} ₼</p>}
                <div className="flex gap-x-[12px] items-center pb-[20px] pr-[10px]">
                    {disc_percent>0 &&
                    <span className="px-[16px] py-[8px] text-[red] rounded-[30px] border-1 border-[red] bg-[#FEECED] font-[600] text-[18px]">-{disc_percent}%</span>}
                    <p className="text-[25px] font-[600]">{price} ₼</p>
                </div>
            </div>
        </div>
    )
}

export default CardForCart