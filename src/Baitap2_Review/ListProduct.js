import React, { Component } from 'react'
import Product from './Product'
export default class ListProduct extends Component {
  renderListProduct=(productName)=>{
    this.productName = productName;
    return(
      <section id="product" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">{this.productName}</h1>
      <div className="row">
      </div>
    </section>
    )
  }
  render() {
    return (
      
      <div>
        {this.renderListProduct('SmartPhone')}
      </div>
    
    )
  }
}
