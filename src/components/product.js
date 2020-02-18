
import React, { Component } from 'react';
import axios from 'axios';
import Item from './item'
import "./app.css"

export class Product extends Component {
  constructor(){
      super();
      this.state ={
        products: [
          {
            id:"",
            name:"",
            price:""  
          }                                     
        ],
        a:4
      };
      this.loadMore = this.loadMore.bind(this)
  }
  loadMore() {   
    this.setState({a:this.state.a+4});  
  }
  componentDidMount(){
    axios({
      method: 'get',
      url: 'http://localhost:3001/users',
    }).then(item => {
      console.log("alo",item);
    this.setState({products:item.data})
    })
    .catch(err=>console.log("err"));
  }
  render() {
    console.log(this.state.products[0])
    return (
      <div >
          <div className="wrap">
             { this.state.products.map(product => {
               if (product.id < this.state.a){
                  return <div>
                  <img src= {"image/"+product.image} height="300px" width="300px"></img><br/>
                  id: {product.id} <br/>
                  name: {product.name} <br/>
                  price: {product.price} <br/>
                  <button className="btnAdd">Add to cart</button>
                </div>
                  }
                })
              }
          </div>
          <div className="wrap2">
              <button 
              style={{ display: this.state.a >= this.state.products.length ? 'none' : 'block' }} 
              className="btnLoadMore" onClick={()=>this.loadMore()} >LoadMore</button>
          </div>
      </div>
    );
  }
}

export default Product;
