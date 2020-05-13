import React, { Component } from 'react';
import styled from "styled-components";

const Bar = styled.div`
    padding: 16px;
    position: relative;
    display: grid;
    align-items: center;
    grid-template-columns: auto 100px;
    max-width: 1080px;
    margin: auto;
`
const Logo = styled.a`
    font-family: 'Gordita ultra';
    font-size: 16px;
    line-height: 100%;
    color: black;
    text-decoration: none;
`
const Menu = styled.div`
   height: 56px;
   width: 56px;
   background-size: contain;
   background-image: url(https://uploads-ssl.webflow.com/5d95107e27228e676a25ae31/5eac84e56af9c86577d33757_MenuIcon2.svg);
   background-repeat: no-repeat;

`

class Navbar extends Component {
    render() {
        return (
            <Bar>
         <Logo>Richard Novoa</Logo>
         <Menu></Menu>
         </Bar>
          );
    };
};

export default Navbar;