import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Card extends Component {
    render() {
        return (
            <div>
                <div>
                    San pham trong gio hang :
               </div>
                <div>
                    Quay tro lai trang san pham :
                    <Link to="/">product</Link>
                </div>
            </div>
        )
    }
}

export default Card;