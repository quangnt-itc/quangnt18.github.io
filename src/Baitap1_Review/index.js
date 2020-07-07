import React, { Component } from 'react';

import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default class Baitap1 extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main">
          <Content/>
          <Sidebar/>
        </div>
        <Footer/>
      </div>
    )
  }
}
