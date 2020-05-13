import React, { Component } from 'react';
import styled from "styled-components";

const Bar = styled.div`
    padding: 16px;
    position: relative;
`
const Logo = styled.a`
    font-family: 'Gordita ultra';
    font-size: 16px;
    line-height: 100%;
    color: black;
    text-decoration: none;
`
const Menu = styled.image`
    
`

class Navbar extends Component {
    render() {
        return (
            <Bar>
         <Logo>Richard Novoa</Logo>
         
         </Bar>
          );
    };
};

export default Navbar;