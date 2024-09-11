import React, { useContext, useState} from "react";
import { Link, useNavigate, Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import EcomContext from '../context/EcomContext'
import useLocalStorage from "../hooks/useLocalStorage"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setItem, getItem} = useLocalStorage("auth-token");
  const [state, dispatch] = useContext(AuthContext);
  const redirect = useNavigate();
  const {showHide, isAuthenticated, fetchCart, setCartItems } = useContext(EcomContext);
  

  if (isAuthenticated) {
    return <Navigate to="/" />
  }
  
//   const loginHandler = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       showHide("error", "Email and Passowrd is required")
//       return;
//     } 
//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       if (data.message) {
//         showHide("error", data.message);
//       }else {
//         dispatch({ type: "setToken", payload: data.token });
//         setItem(data.token);
//         const cartDataItem = JSON.parse(getItem("cart"));
//         if (cartDataItem) {
//           console.log("request made");
//           await Promise.all(cartDataItem?.products?.map(async (item) => {
//             const response = await fetch("http://localhost:5000/api/add-to-cart", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 "auth-token": getItem("auth-token"),  // Use the token directly
//               },
//               body: JSON.stringify({ productId: item.product._id, quantity: item.quantity }),
//             });

//             const cartdata = await response.json();
//             // console.log( "todday", cartdata);
//             if (res.ok) {
//               setCartItems(cartdata && cartdata.products);
//               fetchCart();
//               showHide("success", "added to cart successfully")
//             } else {
//               console.error('Failed to add items to the backend cart');
//             }
//           }));
//           deleteItem("cart");
//         }
//         redirect("/");
//         showHide("success", "you are now logged in");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


if (isAuthenticated) {
  return <Navigate to="/" />
}

const loginHandler = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    showHide("error", "Email and Passowrd is required")
    return;
  } 
  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.message) {
      showHide("error", data.message);
    }else {
      dispatch({ type: "setToken", payload: data.token });
      setItem(data.token);
      const cartDataItem = JSON.parse(localStorage.getItem("cart"));
      if (cartDataItem) {
        console.log("request made", cartDataItem);
        await Promise.all(cartDataItem?.products?.map(async (item) => {
          const response = await fetch("http://localhost:5000/api/add-to-cart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),  // Use the token directly
            },
            body: JSON.stringify({ productId: item.product._id, quantity: item.quantity }),
          });

          const cartdata = await response.json();
          console.log( "todday", cartdata);
          if (res.ok) {
            setCartItems(cartdata.products && cartdata);
            fetchCart();
            showHide("success", "added to cart successfully")
          } else {
            console.error('Failed to add items to the backend cart');
          }
        }));
        localStorage.removeItem("cart");
      }

      redirect("/");
      showHide("success", "you are now logged in");
    }
  } catch (error) {
    console.log(error);
    }
  };


  return (
    <div>
         <div className="text-center border-y-2 border-blue-950 w-[600px] mx-auto m-6 p-5">
        <div className="">
        <h1 className="mt-[3%] mb-[2%] mx-[0%] w-[100%] bg-blue-950 text-white p-[10px]">
          <marquee direction="right">
        Login Here
       </marquee></h1>
        <form onSubmit={loginHandler}>
            <div className="mb-3 login">
                <input type="email" id="email" placeholder="Your Name or Email Address" className="outline outline-1 p-[10px] w-[80%]" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3 login">
                <input type="password" id="password" placeholder="Password" className="outline outline-1 p-[10px] w-[80%]" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button className="bg-blue-950 p-[10px] text-white rounded-lg">Login Now</button>
            </div>
            <div>
              Don't have an account? <button className=""><Link to="/signup">signup</Link></button>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login;