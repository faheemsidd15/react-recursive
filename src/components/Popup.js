import React, { Component } from "react";
import { Items } from "./Items";
export class Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>X</button>
                </div>
            </div>
        );
    }
}
export default Popup