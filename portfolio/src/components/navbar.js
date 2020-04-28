import React, { Component } from 'react';
import styled from "styled-components";

const Bar = styled.div`
    margin: 16px;
    display: grid;
    grid-template-columns: auto 100px 100px;
`
const Logo = styled.div`
    font-family: 'Gordita ultra', sans-serif;
    color: #17fcd2;
    font-size: 16px;
    line-height: 96%;
    font-weight: 400;
    letter-spacing: 0px;
    text-decoration: none;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #102152;
    margin: 0;
    padding: 0;
    
`
const Link1 = styled.a`
    align-self: center;
    font-family: Gordita, sans-serif;
    color: #000;
    font-size: 16px;
    line-height: 135%;
    font-weight: 500;
    text-align: right;
    text-decoration: none;
`
const Link2 = styled.a`
    align-self: center;
    font-family: Gordita, sans-serif;
    color: #000;
    font-size: 16px;
    line-height: 135%;
    font-weight: 500;
    text-align: right;
    text-decoration: none;
`


class Navbar extends Component {
    render() {
        return (
            <Bar>
         <Logo>Richard Novoa</Logo>
         <Link1>About</Link1>
         <Link2>Resume</Link2>
         </Bar>
          );
    };
};

export default Navbar;