import React, {  useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EcomContext from "../context/EcomContext"
import AuthContext from '../context/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage';


function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("client");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setItem } = useLocalStorage("auth-token");
  const { showHide, isAuthenticated } = useContext(EcomContext);
  const [state, dispatch] = useState(AuthContext);
  const redirect = useNavigate();

  // if (isAuthenticated) {
  //   return <Navigate to="/" />
  // }
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log("Submitted");

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          role,
          password,
          confirmPassword,
        })
      })

      const data = await res.json();
      if (data.message) {
        // showHide("error", data.message);
        console.log("error", data.message);
      }else if(data === "User already exists!.."){
        // showHide("error", "User already exists!..");
        console.log("error", "User already exists!..");
      }else if( data === "Password do not match") {
        // showHide("error", "Password do not match");
        console.log("error", "Password do not match");
      }else {
        dispatch({ type: "setToken", payload: data.token});
        setItem(data.token)
        redirect("/login")
        // showHide("success", "You have successfully registered");
        console.log("success", "You have successfully registered");
      }
       
    } catch (error) {
      console.log(error);
    }
  }
   
  return (
    <>
        <div className="signup  flex justify-center">
            <div className="form h-[145vh] pt-10">
                <form onSubmit={registerHandler} action="" className='max-w-[32vw] h-[120vh] mx-auto rounded bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <h1 className='py-6 text-center text-4xl font-bold'>SIGN UP</h1>
                    <div className="">
                        <label htmlFor="" className='mx-7 font-semibold text-lg'>First Name:</label>
                        <input type="text" id='firstName' className='p-2 mx-6 w-[28vw] m-2 rounded' placeholder='Input name' onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="" className='mx-7 font-semibold text-lg'>Last Name:</label>
                        <input type="text" className='p-2 mx-6 w-[28vw] m-2 rounded' name="" id="lastName" placeholder='This name will be visible to everyone' onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="">
                        <label htmlFor="" className='mx-7 font-semibold text-lg'>E-Mail:</label>
                        <input type="email" className='p-2 mx-6 w-[28vw] m-2 rounded' name="" id="email" onChange={(e) => setEmail(e.target.value)}  placeholder='Example@gmail.com'/>
                    </div>
                    <div className="">
                        <label htmlFor="" className='mx-7 font-semibold text-lg'>Phone:</label>
                        <input type="phone" className='p-2 mx-6 w-[28vw] m-2 rounded' name="" id="phone" onChange={(e) => setPhone(e.target.value)}  placeholder=''/>
                    </div>
                    <div className="">
                        <label htmlFor="" className='mx-7 font-semibold text-lg'>Password:</label>
                        <input type="password" className='p-2 mx-6 w-[28vw] m-2 rounded' name="" id="password" placeholder='Input Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="">
                        <label htmlFor="" className='mx-7 font-semibold text-lg'>Confirm Password:</label>
                        <input type="password" className='p-2 mx-6 w-[28vw] m-2 rounded' name="" id="ConfirmPassword" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    
                    <h1 className='text-center pb-6'>Already a member? <Link to="/login" className='hover:underline'>Log In</Link></h1>
                    <div className="buttun">
                    <button type='submit' className=' text-center m-auto text-white hover:bg-[#003f88] px-10  bg-[#bde0fe] p-3 rounded-lg '> 
                        Sign up
                    </button>
                    </div>
                   
                </form>
            </div>

           
        </div>    
    </>
  )
}

export default SignUp;