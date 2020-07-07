import React from 'react';

import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import ListCard from './ListCard';
import WhatWeDo from './WhatWeDo';

export default function Baitap2(){
  return(
    <div>
      <h1>Baitap2</h1>
      <Header/>
      <Carousel/>
      <div className="container">
        <div className="row">
          <WhatWeDo/>
          <Contact/>
        </div>
        <ListCard/>
      </div>
      <Footer/>
    </div>
  );
}