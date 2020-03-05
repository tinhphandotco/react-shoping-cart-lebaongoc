import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: []
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         card: JSON.parse(localStorage.getItem('card'))
    //     }, () => {
    //         console.log(this.state.card)
    //     })
    // }

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
                <div>ID: {this.state.card[i].idItem} <br/>
                    Quantity : {this.state.card[i].quantity}
                </div>
            )
        } return showItem
    }

    render() {
        return (
            <div>
                <div>{this.showItem()}</div>
                <div>
                    Quay tro lai trang san pham :
                    <Link to="/">product</Link>
                </div>
            </div>
        )
    }
}

export default Card;