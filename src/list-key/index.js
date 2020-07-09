import React, { Component } from 'react'

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listProduct : [
        {id: 1, name: 'IphoneX', price: 9997},
        {id: 2, name: 'IphoneXS', price: 9998},
        {id: 3, name: 'IphoneXSMax', price: 9999}
      ]
    }
  }

  renderTable = () => {
    // boc tach - destruct
    const {listProduct}= this.state;

    // this.state.listProduct.forEach(procduct=>{});
    return listProduct.map(product =>{
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });

  }
  render() {
    return (
      <div>
        <h1 className="title">ListKeys</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>

      </div>
    )
  }
}
