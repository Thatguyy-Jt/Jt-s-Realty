import React, { useContext } from 'react'
import ProductItems from './ProductItems'
import EcomContext from '../context/EcomContext'


function Product() {
  const {product} = useContext(EcomContext)
  return (
    <div>
            <div className='grid grid-cols-3 max-w-6xl gap-4 m-6'>
                {product.map((items, index) => (
                  <ProductItems key={index} product_item_prop={items} />
                ))}
            </div>
        </div>
    
  )
}

export default Product;
