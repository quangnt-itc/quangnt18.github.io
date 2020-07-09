import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {

  isLogin = false;
  userName = 'quangnt';


  renderHTML = () => {
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
        {this.isLogin?(<p>{this.userName}</p>):(
          
          <button className="btn btn-success" onClick={this.handleLogin}>Login</button>

        )}
      </div>
    )
  }

  handleLogin=() => {
    this.isLogin = true;
    // console.log(this.isLogin);
    this.renderHTML();
  }

  render() { // render co 1 lan
    // console.log("render");
    return (
      <div>
        <h1 className="title">ExampleHandlingEvent</h1>

        {this.renderHTML()}
      </div>
    )
  }
}

//state -- render() chay lai >1 lan