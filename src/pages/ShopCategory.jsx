import React, { useContext } from 'react'
import { ShopContext  } from '../context/ShopContext'
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import dropdown_icon from "../assets/Frontend_Assets/dropdown_icon.png"

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className="">
      <ImageSlider images={props.banner}></ImageSlider>
      {/* <div className="">
        <p><span></span></p>
        <div>Sort by <img src={dropdown_icon} alt="" /></div>
      </div> */}
      <Footer/>
    </div>
  )
}

export default ShopCategory

//1:32:50