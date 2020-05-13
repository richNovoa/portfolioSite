import React, { Component } from 'react';
import styled from "styled-components";

const HeroDiv = styled.div`
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;

`
const H1 = styled.h1`
    font-family: 'Gordita';
    margin-bottom: 10px;
    font-size: 8vw;
    line-height: 100%;
    object-fit: fill;
    color: #17fcd2;


`
const H2 = styled.h2`
    font-family: Gordita;
    font-size: 3vw;
    line-height: 121%;
    font-weight: 700;
`
const TextBoarder = styled.div`
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #102152;
    margin: 0;
    padding: 0;
`
class Hero extends Component {
    render() {
        return (
            <HeroDiv>
                <H2>Hi my name is</H2>
                <H1><TextBoarder>Richard Novoa</TextBoarder></H1>
                <H2>I'm a product designer based in Miami</H2>
            </HeroDiv>
          );
    };
};

export default Hero;