import React, { Component } from "react";
import axios from "axios";
import "./product.css";

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: "",
          name: "",
          price: ""
        }
      ],
      a: 4,
      err:false
    };
    this.loadMore = this.loadMore.bind(this);
  }
  loadMore() {
    this.setState({ a: this.state.a + 4 });
  }
  componentDidMount() {
    axios({
      method: "get",
      url: `http://localhost:3001/users?_limit=4`
    })
      .then(item => {
        this.setState({ products: item.data });
      })
      .catch(this.state.err = true);
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.a !== prevState.a)
    axios({
      method: "get",
      url: `http://localhost:3001/users?_page=${this.state.a/4}&_limit=4`
    })
      .then(item => {
        this.setState({ products: this.state.products.concat(item.data) });
      })
      .catch(this.state.err = true);
  }
  render() {
    const product = this.state.products.map(product => {
      return (
        <div key={product.id}>
          <img
            src={"image/" + product.image}
            alt="anh san pham"
            height="400px"
            width="400px"
          />
          <br />
          id: {product.id} <br />
          name: {product.name} <br />
          price: {product.price} <br />
          <button className="btnAdd">Add to cart</button>
        </div>
      );
  })
    return (
      <div>
        <div className="wrap">
          {this.state.err === true ? product : "KHONG CO HANG"}
        </div>
        <div className="wrap2">
          <button
            style={{ display: this.state.products.length >= 23 || this.state.err === false ? 'none' : 'block' }} 
            className="btnLoadMore"
            onClick={() => this.loadMore()}
          >
            LoadMore
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
