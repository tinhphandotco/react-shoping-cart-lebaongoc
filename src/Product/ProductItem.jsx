import React, { Component } from "react";

export class ProductItem extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  minus = () => {
    if (this.state.count === 0) {
      this.setState({ count: 0 })
    } else
      this.setState({ count: this.state.count - 1 })
  }

  plus = () => {
    this.setState({ count: this.state.count + 1 })
  }

  addToCart = () => {
    this.props.addToCart(this.state.count, this.props.product.id);
  }
  // handleClick = (event) => {
  //   const id = event.target.id;
  //   console.log(id);
  // }

  render() {
    const { image, id, name, price } = this.props.product
    return (
      <div>
        <div><img className="imgProduct" src={"image/" + image} alt="anh san pham" /></div>
        <div>id :{id}</div>
        <div>name :{name}</div>
        <div>price :{price}</div>
        <div className="numberShow">
          <button onClick={this.minus}>-</button>
          <button className="numberProduct">{this.state.count}</button>
          <button onClick={this.plus}>+</button>
        </div>
        <button className="btnAdd" id={this.props.product.id} onClick={() => this.addToCart(this.state.count, this.props.product.id)}>Add to cart</button>
        {/* <button className="btnAdd" id={this.props.product.id} onClick={this.handleClick}>Add to cart</button> */}
      </div>
    )
  }
}

export default ProductItem;
