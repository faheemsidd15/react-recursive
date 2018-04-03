import React, { Component } from "react";
import styled from "styled-components";
import { Popup } from "./Popup";

const Item = styled.div`
    
    background-color: darkseagreen;   
    color: white;
    border-radius: 25px 25px;
   
    margin: 0.5vw;

`




export class Items extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }



    render() {
        return <Item>
            <div>
            <span>|</span><br/>
            <button onClick={this.togglePopup.bind(this)}>{this.props.name}</button>
            {this.props.children}
            {this.state.showPopup ?
                <Popup
                text={this.props.id}
                closePopup={this.togglePopup.bind(this)}
                />
                : null
            }
            </div>
        </Item>


    }
}
export default Items