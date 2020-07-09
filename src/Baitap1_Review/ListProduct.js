import React, { Component } from 'react';
import Product from './Product';

export default class ListProduct extends Component {
  
  imgUrl = './img/sp_iphoneX.png';
  title = 'Iphone';

  text = "iPhone X features a new all-screen design. Face ID, which makes your face your password";
  render() {
    return (

      <section id="product" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">{this.productName}</h1>
      <div className="row">

        <Product imgUrl={this.imgUrl} title={this.title} text={this.text}/>
        
      </div>
    </section>

        

      

    )
  }
}
