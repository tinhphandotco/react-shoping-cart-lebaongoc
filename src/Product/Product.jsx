import React, { Component } from "react";
import axios from "axios";
import "./Product.css"
import ProductItem from "./ProductItem"

const maxItem = 23;
const minItem =0;
export class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      page:1,
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: `http://localhost:3001/users?_page=${this.state.page}&_limit=4`
    })
      .then(item => {
        this.setState({ products: item.data });
      })
      .catch( function error(){
        var Error= 
        '<div class="err"> ERROR: LOI KHONG LAY DUOC DU LIEU </div>';
         document.getElementById('root').innerHTML = Error;
    }
      );
  }
  loadMore() {
    let isPage = this.state.page ;
    axios({
      method: "get",
      url: `http://localhost:3001/users?_page=${isPage+1}&_limit=4`
    })
      .then(item => {
        this.setState({ products: this.state.products.concat(item.data) });
        this.state.page++
      })
      .catch(function error(){
        var Error= 
        '<div class="err"> ERROR: BI NGAT KET NOI VOI SERVER </div>';
         document.getElementById('root').innerHTML = Error;
    });
  }

  render() {
    const product = this.state.products.map(product => {
      return (
        <ProductItem key={product.id} product={product}></ProductItem>
      )
  })
  return(
    <div>
      <div className="wrap">
        {product}
      </div>
      <div className="wrap2">
      <button
        style={{ display: this.state.products.length >= maxItem || this.state.products.length === minItem ? 'none' : 'block' }} 
        className="btnLoadMore"
        onClick={() => this.loadMore()}
      >
        LoadMore
      </button>
    </div>
  </div>
  )
}
}

export default Product;
