import React, { Component } from 'react'

export default class RenderingElements extends Component {

  userName = 'CyberSoft';
  lop = "fe42";

  // 
  renderInfo = () =>{
    return(
      <p>UserName: {this.userName} - Lop: {this.lop}</p>
    );
  };
  // 
  
  render() {
    return (
      <div>
        <h3 className="title">RenderingElements</h3>
        <p>UserName: {this.userName}</p>
        <p>Lop: {this.lop}</p>

        {/* render in <Element></Element> */}
        {this.renderInfo()}
      </div>
    )
  }
}
