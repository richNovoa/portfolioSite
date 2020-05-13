import React, { Component } from 'react';
import styled from "styled-components";
import Navbar from "./navbar"

//CSS - style-components
const HeroDiv = styled.div`
   max-width: 1080px;
   margin: auto;

`
const H1 = styled.h1`
   font-family: 'Gordita ultra';
   font-size: 72px;
   width: 50%;
   line-height: 100%;
`
const H2hero = styled.h2`
   font-family: gordita;
   font-size: 20px;
`

class Hero extends Component {
    render() {
        return (
            <HeroDiv>
                <Navbar></Navbar>
                <H1>Product Designer</H1>
                <H2hero class="hero">Hi, my name is Richard Novoa, and i live in Miami, FL. When i'm not learning new tricks or designing stuff, I'm spending my time with my three creative experts.</H2hero>
            </HeroDiv>
          );
    };
};

export default Hero;