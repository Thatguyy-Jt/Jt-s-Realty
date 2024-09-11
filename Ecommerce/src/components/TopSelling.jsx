import React, { useContext } from 'react'
import ProductItems from './ProductItems'
import EcomContext from '../context/EcomContext'

function TopSelling() {
  const {topSellingProduct} = useContext(EcomContext)
  return (
    <div className='bg-gray-100'>
    <div className='container max-w-6xl mt-24 mb-24 m-auto'>
       <h1 className='text-center text-5xl font-bold mb-4 uppercase text-[#000]'>Top Selling Product</h1>
       <div className="mb-6 line">
          <hr className="w-[5rem] h-[2px] bg-[#cda274] m-auto mb-[2px] line1" />
          <hr className="w-[14rem] h-[2px] bg-[#cda274] m-auto mb-[2px] line2" />
          <hr className="w-[5rem] h-[2px] bg-[#cda274] m-auto mb-[2px] line1" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-9'>
            {topSellingProduct.map((items, index) => (
              <ProductItems key={index} product_item_prop={items} />
            ))}
        </div>
    </div>
</div>


  )
}

export default TopSelling;
