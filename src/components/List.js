import React, { Component } from "react";
import data from "../sample-data.json";
import { Items } from "./Items";
import  styled  from "styled-components";

/*Call the data into a const */
const sameData = data

const Container = styled.div`

background-color: blue;

`
const Parent = styled.div`
background-color: grey;
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;
padding: 5px;

`

export class List extends Component {
    constructor() {
        super()
    }
    list(data){
        const children = (items) => {
            if (items) {

                return <Parent>{this.list(items)}</Parent>
            }
        }
        return data.map((node, index) => {
            return <Items key={node.id} name={node.name}>
                <div>{children(node.items)}</div>
            </Items>
        })
    }

    render() {
        return(
            <Container>
            <Parent>
                {this.list(sameData)}
            </Parent>

            </Container>
            
        )
    }
}
export default List

