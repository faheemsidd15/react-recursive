import React, { Component } from "react";
import styled from "styled-components";


const Item = styled.div`
    
    background-color: darkseagreen;   
    color: white;
    border-radius: 25px 25px;
    border-right: 1px solid;
    border-left: 1px solid;
    margin: 0.5vw;

`

const Add = styled.button`
    font-size: 2vh;
    :hover{
        background-color: pink;
    }
    &:before{
        content: "";

    }
`

export class Items extends Component {
    render() {
        return <Item>
            <span>|</span><br/>
            <Add>{this.props.name}</Add>
            {this.props.children}

        </Item>


    }
}
export default Items