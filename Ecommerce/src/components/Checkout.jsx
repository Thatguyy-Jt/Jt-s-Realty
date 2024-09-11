import React, { useContext } from 'react'
import EcomContext from '../context/EcomContext';
import { Navigate } from 'react-router-dom';

function Checkout() {
    const { cartItems, calculateTotalAmount, isAuthenticated}=useContext(EcomContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    const handlePayment = async (e) => {
        e.preventDefault();

        const amount = calculateTotalAmount().toFixed(2);
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;
        const address = e.target.elements.address.value;
        const currency = e.target.elements.currency.value;


        try {
           const res = await fetch("http://localhost:5000/api/payment/initiate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": `${localStorage.getItem("auth-token")}`
            },
            body: JSON.stringify({
                firstName,
                lastName,
                amount,
                email,
                currency,
                address,
                phone
            })
           }) 
           const data = await res.json();
           if (res.ok) {
            window.location.href = data.link;
            console.log(data.link)
           }else {
            res.json(data.message || "Something went wrong")
           }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        <div className="container max-w-6xl p-3 mx-auto my-24">
            <div className="grid grid-cols-3 md:grid-cols-2 shadow-xl">
                <div className="p-3 table bg-[whitesmoke]">
                    <h1 className="text-start text-xl font-bold border-b pb-3">Order Summary</h1>
                    <table className='w-[100%] text-center'>
                        <thead>
                            <tr>
                                {/* <th>Name</th> */}
                                <th>Product Image</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems?.products?.map((items, index) => (
                                <tr key={index}>
                                    {/* <td>{items?.name}</td> */}
                                    <td className='flex align-center justify-center p-[1rem]'>
                                        <img src={items.product?.images[0].img} width="100px" alt="" />
                                    </td>
                                    <td>{items.quantity}</td>
                                    <td>${items.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table className='mx-auto mt-12'>
                        <tbody >
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='font-bold'>Total: ${calculateTotalAmount()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                

                <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
                <h1 className="text-xl font-bold border-b pb-3">Delivery Details</h1>
                <form onSubmit={(e) => handlePayment(e)} className="space-y-4">
                    <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                    <input type="text" name="firstName" id="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                    <input type="text" name="lastName" id="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                    <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                    <input type="text" name="phone" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex space-x-4">
                    <select name="currency" id="currency" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                    </select>
                    <h2 className="text-xl font-semibold">{calculateTotalAmount().toFixed(2)}</h2>
                    </div>
                    <div>
                    <label htmlFor="address" className="block text-sm font-medium">Address</label>
                    <input type="text" name="address" id="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay</button>
                </form>
                </div>


                            </div>
                        </div>
                    </div>
                )
                }

                export default Checkout;






