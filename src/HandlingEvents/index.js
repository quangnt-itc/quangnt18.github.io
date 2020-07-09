import React, { Component } from 'react'

export default class HandlingEvents
extends Component {

  handleOnclick = (event) =>console.log("object");

  handleOnclickByParameter=(name, age) =>console.log(name +  " " + age);
  render() {
    return (
      <div>
        <h1 className="title">HandlingEvents</h1>

        <button className="btn btn-success" onClick={this.handleOnclick}>HandlingEvents</button>

        {/* with paragram */}
        <button className="btn btn-info" onClick={()=>{this.handleOnclickByParameter('quangnt', 18)}}>HandlingEventsByParameter</button>
      </div>
    )
  }
}
