import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="w-full bg-[#000] text-[#fff] p-3">
        <div className="container p-3">
          <div className="grid grid-cols-1 md:grid-cols-3">
                <div >
                  <h2 className='text-lg font-bold uppercase'>Jt's Rrealty</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate omnis rem illum culpa possimus enim.</p>
                </div>
                <div>
                    <h2 className='text-lg font-bold uppercase'>Useful Links</h2>
                    <div>
                      <ul>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Product</Link></li>
                      </ul>
                    </div>
                </div>
                <div>
                  <h2 className='text-lg font-bold uppercase'>Socials</h2>
                  <ul className='socials'>
                        <li><Link to=""><i className="fa-brands fa-whatsapp"></i></Link></li>
                        <li><Link to=""><i className="fa-brands fa-twitter"></i></Link></li>
                        <li><Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link to=""><i className="fa-brands fa-facebook"></i></Link></li>
                      </ul>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
