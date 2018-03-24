import React, { Component } from "react";
import styled from "styled-components";


const Item = styled.div`
    
    justify-content: center;
    background-color: yellow;
    margin: 1vh;
    align-items: center;
    color: white;
    height: 10vh;
border-radius: 50px;

`
const Add = styled.button`
    font-size: 2vh;
    :hover{
        background-color: pink;
    }
`

export class Items extends Component {
    render() {
        return <Item>
            <Add>{this.props.name}</Add>
            {this.props.children}

        </Item>


    }
}
export default Items