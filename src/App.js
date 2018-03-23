import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from "./components/List";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`

const Header = styled.div`
  background-color: purple;
  color: white;
  font-size: 10vh;
`

class App extends Component {
  render() {
    return (
      <Container >
      <Header> REACT NESTED JSON</Header>
      <span>*Click to add more data</span>
        <List/>
      </Container>
    );
  }
}

export default App;
