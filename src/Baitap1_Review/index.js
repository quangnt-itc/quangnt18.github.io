import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import ListProduct from './ListProduct';
import Footer from './Footer';

export default class Baitap1_Review extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Carousel/>
        <ListProduct/>
        <Footer/>
      </div>
    )
  }
}
