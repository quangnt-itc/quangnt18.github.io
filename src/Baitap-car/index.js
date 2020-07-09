import React, { Component } from 'react'

export default class BaitapCar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img : "./img/imgRedCar.jpg"
    }
  }

  changeCarColor = color => {
    // debugger;
    // if(color === 'red'){
    //   this.setState({img: "./img/imgRedCar.jpg"});
    // }
    // else if(color === 'silver'){
    //   this.setState({img: "./img/imgSilverCar.jpg"});
    // }
    // else if(color === 'black'){
    //   this.setState({img: "./img/imgBlackCar.jpg"});
    // }
    let img = '';
    switch (color) {
      case 'red':
        // this.setState({img: "./img/imgRedCar.jpg"});
        img = "./img/imgRedCar.jpg";
        break;
      case 'silver':
        // this.setState({img: "./img/imgSilverCar.jpg"});
        img = "./img/imgSilverCar.jpg";
        break;
      case 'black':
        // this.setState({img: "./img/imgBlackCar.jpg"});
        img = "./img/imgBlackCar.jpg";
        break;
    
      default:
        // this.setState({img: "./img/imgRedCar.jpg"});
        img = "./img/imgRedCar.jpg";
        break;
    }

    this.setState({img});

    // (color === "red")?this.setState({img: "./img/imgRedCar.jpg"}):(color === 'silver')?this.setState({img: "./img/imgSilverCar.jpg"}):this.setState({img: "./img/imgBlackCar.jpg"});

  };

  
  render() {
    return (
      <div className="container">
        <h1 className="title">BaitapCar</h1>

        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={this.state.img} alt=""/>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-danger m-2" onClick={() => this.changeCarColor('red')}>Red</button>
            <button className="btn btn-light m-2" onClick={() => this.changeCarColor('silver')}>silver</button>
            <button className="btn btn-dark m-2" onClick={() => this.changeCarColor('black')}>black</button>
          </div>
        </div>
      </div>
    )
  }
}
