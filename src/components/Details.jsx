import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useParams } from 'react-router-dom'

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
    
  return (
    <div>Details</div>
  )
}

export default Details