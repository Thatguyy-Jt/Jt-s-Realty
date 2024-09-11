import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <footer className="bg-[#000]  dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="border-b border-gray-100 py-6 dark:border-gray-700 md:py-8 lg:py-16">
      <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">
        <div className="grid min-w-0 flex-1 grid-cols-3 gap-6 md:gap-8 xl:grid-cols-3">
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-blue-700 ">Company</h6>
            <ul className="space-y-3">
              <li>
              
                <Link to="/about">
                <a href="#" title="" className="text-white"> About </a>
                </Link>
              </li>

              <li>
                <a href="#" title="" className="text-white"> Premium </a>
              </li>

              <li>
                <a href="#" title="" className="text-white"> Blog </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase  text-blue-700 ">Order & Purchases</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" title="" className='text-white'>Order Status</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Track Your Order</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Purchase History</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Returns & Refunds</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Payment Methods</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-blue-700">Support & Services</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" title="" className='text-white'>Contact Support</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>FAQs</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Service Centers</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Warranty Information</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-blue-700">Partnerships</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" title="" className="text-white">Partner With Us</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Become a Realtor</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Affiliate Program</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Collaboration Opportunities</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-blue-700">Payment Options</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" title="" className='text-white'>Credit & Debit Cards</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>PayPal</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Bank Transfers</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Installment Plans</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-blue-700">Rewards</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" title="" className='text-white'>Reward Points</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Referral Program</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>VIP Membership</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Exclusive Offers</a>
              </li>
            </ul>
          </div>

          

          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-blue-700">Sell with Us</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" title="" className='text-white'>Seller Registration</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>How to Sell</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Seller Policies</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase text-blue-700">Get Support</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" title="" className='text-white'>Contact Us</a>
              </li>
              <li>
                <a href="#" title="" className='text-white'>Help Center</a>
              </li>
              
              <li>
                <a href="#" title="" className="text-white">Technical Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 w-full md:mt-8 lg:mt-0 lg:max-w-lg">
          <div className="space-y-5 rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
            <a href="#" title="" class="text-base font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"> Sign In or Create Account </a>

            <hr className="border-gray-200 dark:border-gray-600" />

            <form action="">
              <div className="items-end space-y-4 sm:flex sm:space-y-0">
                <div className="relative mr-3 w-full sm:w-96 lg:w-full">
                  <label for="email" className="mb-2 block text-sm font-medium text-black"> Get the latest deals and more. </label>
                  <input className="block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:w-96 lg:w-full" placeholder="Enter your email address" type="email" id="email" required="" />
                </div>
                
              </div>
            </form>

            <hr className="border-gray-200 dark:border-gray-600" />

            <div>
                <p className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Buy your dream home here with us at <a href="#" title="" className="underline hover:no-underline">Jt's Realty</a></p>
              </div>

            <hr className="border-gray-200 dark:border-gray-600" />

            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-6 md:py-8">
      <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
        <h2 className='font-bold text-4xl text-white'>Jt's Realty</h2>

        <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white xl:justify-center">
          <li><a href="#" title="" className="font-medium hover:underline text-blue-700"> Legal Notice </a></li>
          <li><a href="#" title="" className="font-medium hover:underline text-blue-700"> Product Listing Policy </a></li>
          <li><a href="#" title="" className="font-medium hover:underline text-blue-700"> Terms of Use </a></li>
        </ul>

        <p className="text-sm text-white">© 2024 <a href="#" className="hover:underline"></a>, Inc. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer;
