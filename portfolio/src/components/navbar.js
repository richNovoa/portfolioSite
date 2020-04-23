import React, { Component } from 'react';
import styled from "styled-components";

const Bar = styled.div`
    margin: 0 auto;
    display: flex;
    grid-template-columns: auto 100px 100px;
`
const Logo = styled.image`
`
const Link1 = styled.a`
`
const Link2 = styled.a`
`


class Navbar extends Component {
    render() {
        return (
            <Bar>
         <Logo>Logo</Logo>
         <Link1>About</Link1>
         <Link2>Resume</Link2>
         </Bar>
          );
    };
};

export default Navbar;