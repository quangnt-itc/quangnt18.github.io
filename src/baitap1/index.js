import React, { Component } from 'react';

import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";


//khi nao la component -- khi no extends 1 component
// jsx = js + html
//không có thẻ song song - ngang hàng - ngang cấp
  // <div>Bai tap 1</div>
  // <h1>Bai tap 1</h1>

export default class Baitap1 extends Component {
  render() {
    return (
      <div >
        <Header/>
        <div className="main">
          <Content/>
          <Sidebar/>
        </div>
        <Footer/>
      </div>
    );
  }
}

// export default Baitap1;