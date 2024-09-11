import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EcomContext from '../context/EcomContext'
import ProductImages from './ProductImages';

function Details() {
  const { product, addToCart } = useContext(EcomContext);
  const params = useParams();
   const showItems = params.id
   const productItems = product.find(items => items._id === showItems)
  // const showItems = params.name
  // const productItems= product.find((items)=>items.name===showItems)
  const [selectedImages, setSelectedImages]= useState(productItems?.images?.[0].img)

  useEffect(()=>{
    setSelectedImages(productItems?.images?.[0].img)
  },[productItems]);

  return (
    <div className='bg-[#e5e5e5]'>
      <div className="container max-w-5xl mx-auto my-24">
            <h1 className="text-center text-5xl font-bold mb-8 uppercase text-[##14213d]">{productItems?.name} Details</h1>
            <div className="grid  grid-cols-2 align-center justify-center ">
                <div>
                 {/* <img src={`http://localhost:5000/${selectedImages}`} className='width-[300px] h-[300px] mb-4 rounded border-2 border-[#464646]' alt="" /> */}
                 <img src={selectedImages} className='width-[300px] h-[300px] mb-4 rounded border-2 border-[#464646]' alt="" />
                 <ProductImages images={productItems?.images} setSelectedImages={setSelectedImages}/>
                 </div>
                <div>
                    <div className="p-4 card-body">
                      <h2 className="text-2xl font-bold uppercase py-3">{productItems?.name}</h2>
                      <div className="flex flex-col gap-4 mb-5">
                        <div className="bg-[#14213d] p-4 rounded-lg shadow-md">
                          <h3 className="text-lg font-bold mb-2 text-white">Description</h3>
                          <p className="text-white">{productItems?.description}</p>
                        </div>

                        <div className="bg-[#14213d] p-4 rounded-lg shadow-md">
                          <h3 className="text-lg font-bold mb-2 text-white">Utilities</h3>
                          <p className="text-white">{productItems?.utilities}</p> 
                        </div>
                      </div>
                        <button
                          onClick={() => addToCart(productItems?._id, 1, productItems)}
                          className="product-btn p-2 w-full text-[#fff] rounded bg-[#cccccc] hover:bg-[#75c9c8]"
                          type="submit"
                        >
                          Cart
                        </button>
                      </div>
                    {/* <ProductImages images={productItems?.images} setSelectedImages={setSelectedImages}/> */}
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Details;
