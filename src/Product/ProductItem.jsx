import React, { Component } from "react";
export class ProductItem extends Component{
    render() {
      return (
    <div>
      <div><img src={"image/" + this.props.product.image} alt="anh san pham" height="400px" width="400px"/></div>
      <div>id :{this.props.product.id}</div>
      <div>name :{this.props.product.name}</div>
      <div>price :{this.props.product.price}</div>
      <button className="btnAdd">Add to cart</button>
    </div>
      ) }  
    }

export default ProductItem;
