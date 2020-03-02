import React, { Component } from "react";
import "./Product.css"
import ProductItem from "./ProductItem"
import {getProduct} from "../API/Product.api"

const maxItem = 23;
const minItem = 0;
export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      page: 1,
      isLoading: false,
      error: false,
      numberProduct: 0
    };
  }
  componentDidMount() {
   getProduct({})
      .then(item => {
        this.setState({ products: item.data });
      })
      .catch(() => {
        this.setState({ error: true })
      });
  }
  loadMore() {
   getProduct({})
      .then(item => {
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.setState({ isLoading: false })
          this.setState({ products: this.state.products.concat(item.data) });
          this.setState({ page: this.state.page + 1 });
        }, 2000);
      })
      .catch(() => {
        this.setState({ error: true })
      });
  }
  addToCart = () => {
    this.setState({ numberProduct: this.state.numberProduct + 1 })
  }
  render() {
    const product = this.state.products.map(product => {
      return (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={this.addToCart}
        />
      )
    })
    const  {isLoading}  = this.state;
    if (this.state.error) {
      return <div className="err">ERROR : KHONG CO SAN PHAM</div>
    } else
      return (
        <div>
          <div>
            <a href="http://google.com">
              <img className="iconCart" src="./image/54302312-shopping-cart-icon.jpg" alt="iconCart" />
              {this.state.numberProduct}
            </a>
          </div>
          <div className="wrap">
            {product}
          </div>
          <div className="footer">
            <button
              style={{ display: this.state.products.length >= maxItem || this.state.products.length === minItem ? 'none' : 'block' }}
              className="btnLoadMore"
              onClick={() => this.loadMore()}
              disabled={isLoading}
            >
              {isLoading && <div className="lds-spinner">
                <div></div><div></div><div></div><div></div><div></div><div></div><div>
                </div><div></div><div></div><div></div><div></div><div></div></div>}
              LoadMore
          </button>
          </div>
        </div>
      )
  }
}

export default Product;
