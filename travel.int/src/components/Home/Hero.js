import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Container className="container">
      <HeroText>
        <h5>Travel.int is all you need</h5>
        <h1>Explore The World</h1>
      </HeroText>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  padding: 0 170px;

  @media screen and (max-width: 1024px){
    padding: 0 40px;
  }
`

const HeroText = styled.div`
  width: 100%;
  height: 70vh;
  padding-bottom: 400px;
  background-image: 
  url('/images/Home/hero__background--main.svg'),
  linear-gradient( to bottom, #FFBEBE -50%, #B5D2FF 120%);
  background-size: 60% 65%, 100% 100%;
  background-repeat: no-repeat;
  background-position: left calc(50% + 0px) top 165px, left calc(0% + 0px) top 0px;
  text-align: center;
  margin-bottom: 60px;
  border-radius: 72px;
    
  >h5 {
    padding-top: 40px;
    color: #3075C6;
    font-weight: 600;
    letter-spacing: 1.1px;
  }

  >h1 {
    margin-top: 10px;
    font-size: 50px;
    font-weight: 900;
  }
  @media screen and (max-width: 768px){
    background-size: 400px 300px, 100% 100%;
    background-position: left calc(50% + 0px) top 172px, left calc(0% + 0px) top 0px;
    border-radius: 50px;
    >h5 {

    }
    >h1 {
      font-size: 32px;
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 500px){
    height: 50vh;
    background-size: 300px 200px, 100% 100%;
    background-position: left calc(50% + 0px) top 200px, left calc(0% + 0px) top 0px;
    border-radius: 35px;
  }
  
`