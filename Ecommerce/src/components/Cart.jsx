import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import EcomContext from '../context/EcomContext'


function Cart() {
    const {cartItems, calculateSubTotal, calculateVat, calculateTotalAmount,removeCartItems, updateCartItems} = useContext(EcomContext)
  return (
    <div>
         <div className="container max-w-5xl mx-auto my-24 cart bg-gray-100 rounded-lg shadow-md">
  <div className="grid grid-cols-1 p-4">
    <div className="p-3 table">
      <table className='text-center w-full'>
        <thead className='p-3 bg-gradient-to-r from-orange-200 to-yellow-200'>
          <tr className='p-3'>
            <th>Product Image</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.products?.map((item, index) => (
            <tr key={item.product?._id} className='border-b'>
              <td className='flex align-center justify-center py-4'>
                <img src={item.product?.images[0]?.img} className='w-[100px] h-[100px]' alt={item.product?.name} />
              </td>
              <td className='py-4'><s>$</s>{item.product?.price}</td>
              <td className='py-4'><s>$</s>{item.amount}</td>
              <td className='py-4'>
                <input type="number" onChange={(e) => updateCartItems(item.product?._id, e.target.value)} min={1} value={item.quantity} className='font-bold w-[30%] outline-none text-[black]' />
              </td>
              <td className='py-4'>
                <button onClick={() => removeCartItems(item.product?._id)} type="submit"><i className='fa-solid fa-xmark text-red-500'></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='font-bold py-4'>Subtotal: <s>$</s>{calculateSubTotal()}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='font-bold py-4'>VAT (7.5%): <s>$</s>{calculateVat()}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='font-bold py-4'>Total: <s>$</s>{calculateTotalAmount()}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='py-4'>
              <Link to="/checkout" className='product-btn p-2 text-[fff] rounded bg-[#cda124] hover:bg-[#14213d]'><span className='text-white'>Checkout</span></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cart;




















