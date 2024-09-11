import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Details from './components/Details'
import Banner from './components/Banner'
import Product from './components/Product'
import FeaturedProduct from './components/FeaturedProduct'
import TopSelling from './components/TopSelling'
import Cart from './components/Cart'
// import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import { EcomProvider } from './context/EcomContext'
import Checkout from './components/Checkout'
import Alert from './components/Alert'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import useLocalStorage from './hooks/useLocalStorage'
import { AuthProvider } from './context/AuthContext'
import ThankYou from './components/ThankYou'

 

function App() {
 const {getItem}  = useLocalStorage("auth-token");
 const token = getItem("auth-token");
 const authInitialToken = { accessToken : token ?? null }
 const [loader, setLoader]=useState(true)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoader(false)
    },3000)

    return ()=> timer;
  },[])
  return (
    <>
    {loader ? <Loader/>:(
    <AuthProvider defaultState={authInitialToken}>
    <EcomProvider>
      <Router>
        <Header/>
        <Alert />
         <Routes>
          <Route path='/' element={
            <>
            <Banner/>
            <FeaturedProduct/>
            <TopSelling />
            </>
          }/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/product' element={<Product/>} />
           {/* <Route path='/details/:name' element={<Details/>}/>  */}
           <Route path='/details/:id' element={<Details/>}/> 
           {/* <Route path='/about' element={<About/>}/> */}
           <Route path='/login'element={<Login/>} />
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/checkout' element={<Checkout/>}/>
           <Route path='/thankyou' element={<ThankYou/>}/>
        </Routes> 
        <Footer/>
      </Router>
      </EcomProvider>
      </AuthProvider>
    )}
    </>
    )
}

export default App;
