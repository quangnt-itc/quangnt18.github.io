import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import WhatWeDo from './WhatWeDo';
import ContactUs from './ContactUs';
import ListCard from './ListCard';
import ListSmartPhone from './ListSmartPhone';
import ListLaptop from './ListLaptop';
import ListPromotion from './ListPromotion';
import ListProduct from './ListProduct';
import Product from './Product';
import Footer from './Footer';

const Baitap2_Review = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <ListSmartPhone/>
      <ListLaptop/>
      <ListPromotion/>
      {/* <ListProduct/>
      <Product/> */}
      <Footer/>
    </div>
  )
}

export default Baitap2
