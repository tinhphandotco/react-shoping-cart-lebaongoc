import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Card.css'

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [],
        }
    }

    componentDidMount() {
        let card2 = JSON.parse(localStorage.getItem('card'))
        if (card2.length === 0) {
            alert("chua co san pham nao")
        } else this.setState({ card: card2 })
    }

    showItem = () => {
        let showItem = []
        for (let i = 0; i < this.state.card.length; i++) {
            showItem.push(
                <div key={i} id={i}>
                    ID: {this.state.card[i].idItem} <br />
                    Quantity : {this.state.card[i].quantity}<br/>
                </div>
            )
        } return showItem
    }

    render() {
        return (
            <div className="container">
                 <div>
                    Quay tro lai trang san pham :
                    <Link to="/">product</Link>
                </div>
                <div>{this.showItem()}</div>
            </div>
        )
    }
}

export default Card;