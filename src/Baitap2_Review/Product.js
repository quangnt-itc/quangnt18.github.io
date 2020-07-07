import React, { Component } from 'react'

export default class Product extends Component {
  renderProduct = () =>{
    let title = <h1>'hello world'</h1>;
    let productName = <h2>'quangnt'</h2>;
    return (
      <div>
        {title}
        {productName}
      </div>
    );
  }
  renderProductWithPramameter(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
    return(
      <div>
        <h1>{this.id}</h1>
        <h1>{this.name}</h1>
        <h1>{this.age}</h1>
      </div>

    )
  }
  render(){
    return(
      <div className="Products">
        {this.renderProduct()}
        {this.renderProductWithPramameter(1, 'quangnt', 23)}
      </div>
    );
  }

  // render(){
  //   <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
  //     <div className="container">
  //       <div className="card bg-light" style={{width: 300}}>
  //         <img className="card-img-top" src="./img/sp_iphoneX.png" alt="Card image" style={{maxWidth: '100%', height: 250}} />
  //         <div className="card-body text-center">
  //           <h4 className="card-title text-center">iPhone X</h4>
  //           <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
  //           <a href="#" className="btn btn-primary">Detail</a>
  //           <a href="#" className="btn btn-danger">Cart</a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // }
}
