import React from 'react'
import { Link } from 'react-router-dom';

function ProductItems({product_item_prop}) {
  return (
    <div>
        <div className="bg-[#fdf0d5] ">
            {/* <img src={`http://localhost:5000/${product_item_prop.images[0].img}`} className='w-[100%] h-[50%] ' alt="" /> */}
            {/* <img src={`http://localhost:5000/${product_item_prop.images[0].img}?${new Date().getTime()}`} className='w-[100%] h-[50%] ' alt="" /> */}
              <img src={product_item_prop.images[0].img}  className='w-[100%] h-[50%]' />

            <div className="bg-white shadow-md rounded-lg p-4">
               
                {/* <p className="text-black mb-2"><span className='text-xl font-bold'>Description:</span> {product_item_prop.description}</p> */}
                
                {/* <p className='text-black mb-2'><span className='text-xl font-bold'>Utilities:</span> {product_item_prop.utilities}</p> */}
                <h5 className=" text-black mb-2"><span className='text-xl font-bold'>Price:</span> ${product_item_prop.price}</h5>
                <p className="text-black mb-2"><span className='text-xl font-bold'>Location:</span>{product_item_prop.location} </p>
                <p className="text-black mb-8"><span className='text-xl font-bold'>Sqft:</span> {product_item_prop.size} </p>
              

                  <Link to={`/details/${product_item_prop._id}`}
                  className="boton-elegante">Explore</Link>

          </div>
        </div>
    </div>
  )
}

export default ProductItems;
