import React, { Component } from "react";
import "./Product.css"
import ProductItem from "./ProductItem"
import { getProduct } from "../API/Product.api"
import {
  Link
} from "react-router-dom";

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
      card: JSON.parse(localStorage.getItem('card'))
    };
  }

  componentDidUpdate() {
    localStorage.setItem('card', JSON.stringify(this.state.card))
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
    getProduct(this.state.page + 1)
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

  addToCart = (idItem, numberItem) => {
    if (numberItem === 0) { alert("vui long nhap so luong san pham") }
    else {
      let card2 = Object.assign([], this.state.card);
      let isExist = card2.findIndex(x => x.idItem === idItem)
      if (isExist === -1) {
        card2 = card2.concat({ idItem: idItem, quantity: numberItem })
      }
      else card2[isExist].quantity += numberItem
      this.setState({ card: card2 })
    }
  }

  reserCard = () => {
    this.setState({
      card: []
    })
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
    const { isLoading } = this.state;
    if (this.state.error) {
      return <div className="err">ERROR : KHONG CO SAN PHAM</div>
    } else
      return (
        <div>
          <div>
            <Link to="/Card/Card">
              <img className="iconCart" src="./image/54302312-shopping-cart-icon.jpg" alt="iconCart" />
            </Link>
            {this.state.card.length}
          </div>
          <div onClick={this.reserCard}>Reset Cart</div>
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
