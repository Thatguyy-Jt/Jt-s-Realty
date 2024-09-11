import React from 'react'


function ProductImages({images,setSelectedImages}) {
    
  return (
    <div className='grid grid-cols-4 gap-2 '>
        {images?.map((prodImg, index)=>(
            <div key={index}>
                <img 
              src={prodImg.img}
                onClick={()=>setSelectedImages(prodImg.img)}
                className='w-full object-cover  h-full cursor-pointer'
                 alt={`Product ${index}`} />
            </div>
        ))}
    </div>
  )
}

export default ProductImages;