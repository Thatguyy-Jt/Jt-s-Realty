import React from 'react';
import {Link} from 'react-router-dom';
// import home from "../../public/img/Home 21.jpeg";


function Banner() {
  return (
    <div className='banner'>
      <div className='image'>
        <div className="like">
          <img src="/img/Home 21.jpeg" alt="" />
          <img src="/img/Home8.jpg" alt="" />
          <img src="/img/Home23.jpg" alt="" />
          </div>
            <div className="img-container font-bold  uppercase">
              <h2 className='p-20 text-[#001d3d] text-5xl font-extrabold'>The #1 site real estate professionals trust</h2>
              <h2 className='text-3xl font-bold text-[#001d3d] mb-8'>We help you find your dream home </h2>
              <Link to="/product" className="">
                    <button className="button ">View Homes</button>
                    </Link>

            </div>
      </div>
    </div>
  ) 
}

export default Banner;
// FDE549