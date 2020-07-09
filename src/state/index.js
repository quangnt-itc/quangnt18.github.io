import React, { Component } from 'react'

export default class State extends Component {
  //--> quan ly bang state
  // isLogin = false;
  // userName = 'quangnt';
  constructor(props) { // 1 - con chay 1 lan duy nhat
    console.log("constructors")
    super(props);

    this.state ={
      isLogin : false,
      userName : 'quangnt'
    };
  }


  renderHTML = () => {  //4
    // if(this.isLogin){
    //   return(<p>{this.userName}</p>);
    // }
    // return (
    //   <div class="">
    //     <button className="btn btn-success" onClick={this.handleOnclick}>Login</button>
    //   </div>
    // );
    return(
      <div>
        {this.state.isLogin?(<p>{this.state.userName}</p>):(
          
          <button className="btn btn-success" onClick={this.handleLogin}>Login</button>

        )}
      </div>
    )
  }

  handleLogin=() => { //5
    this.setState({
      isLogin: true
    });
    console.log(this.state.isLogin);
    // this.renderHTML(); // k can vi state thay doi nen se render() lai lan 2
  }

  render() { // render co 1 lan- 2
    console.log("render"); // 3
    return (
      <div>
        <h1 className="title">State</h1>

        {this.renderHTML()} 
      </div>
    )
  }

}
