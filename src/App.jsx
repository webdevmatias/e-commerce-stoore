import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import LoginSignup from './pages/LoginSignup'
import Cart from './pages/Cart'
import Product from './pages/Product'
import banner_gamer from './assets/Frontend_Assets/banner_gamer.svg'
import banner_work from './assets/Frontend_Assets/banner_work.svg'


const App = () => {

  const banner_images = [banner_gamer, banner_work];
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/gamer' element={<ShopCategory banner={banner_images} category="gamer"/>}/>
          <Route path='/work' element={<ShopCategory banner={banner_images} category="work"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App