import React, { Component } from 'react';
import data from './../data.json';

export default class BaitapList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      listMovie : data
    }
    console.log(this.state.listMovie);
  }

  renderHTML = () => {
    const {listMovie} = this.state;
    return listMovie.map((movie) => {
      return (
        <div className="col-sm-4 mb-3" key={movie.maPhim}>
          <div className="card">
            <img
              className="card-img-top"
              src={movie.hinhAnh}
              alt="movie1"
            ></img>
            <div className="card-body">
              <h4 className="card-title">{movie.tenPhim}</h4>
              <p className="card-text">{movie.moTa}</p>
            </div>
          </div>
        </div>
      );
    });

  }
  render() {
    return (
      <div>
        <h1 className="title">Baitap List</h1>
        <div className="container">
          <div className="row">{this.renderHTML()}</div>
        </div>
      </div>
    )
  }
}
