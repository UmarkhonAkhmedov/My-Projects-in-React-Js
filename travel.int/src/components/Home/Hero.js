import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Container className="container">
      <HeroText>
        <h5>Travel.int is all you need</h5>
        <h1>Explore The World</h1>
      </HeroText>
      <HeroInput>
        <InputLocation>
          <span>
            <img src="/images/Home/hero__icon--location.svg"/>
            <h3>Location</h3>
          </span>
          <input type="search" placeholder="Where do you want to go?"/>
        </InputLocation>
        <InputDate>
          <span>
            <img src="/images/Home/hero__icon-date.svg"/>
            <h3>Date</h3>
          </span>
          <input type="date" placeholder="Choose date"/>
        </InputDate>
        <InputPeople>
          <span>
            <img src="/images/Home/hero__icon--location.svg"/>
            <h3>People</h3>
          </span>
          <div>
            <span>-</span>
            <h5>Add people</h5>
            <span>+</span>
          </div>
        </InputPeople>
        <InputSearch href="#">
          <img src="/images/Home/hero__icon--search.svg"/>
          </InputSearch>
      </HeroInput>
    </Container>
  
  )
}

export default Hero

const Container = styled.div`
  padding: 0 170px;
  position: relative;

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
const HeroInput = styled.div`
  position: absolute;
  top: 420px;
  left: calc(50% - 352px);
  display: flex;
  align-items: flex-start ;
  justify-content: space-between;
  background-color: rgba(185, 255, 255, 90%);
  border-radius: 32px;
  width: 700px;
  padding: 25px;
`

const InputLocation = styled.div`
  
  > span {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    > img {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      margin-right: 10px;
      padding: 5px;
      background-color: #D6DFFF;
    }

    > h3 {
      font-size: 22px;
      font-weight: 600;
    }
  }
  > input {
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 20px;

    &::placeholder {
      color: #AEAEAE;
      font-size: 12px;
    }
  }
`

const InputDate = styled(InputLocation)`
  > input {
    color: #AEAEAE;
  }
`

const InputPeople = styled(InputLocation)`
  
  > div {
    display: flex;
    align-items: center;

    > h5 {
      margin: 0px 10px;
      color: #AEAEAE;
    }
    > span {
      transform: scale(1.5);
      color: #AEAEAE;
    }
  }
`

const InputSearch = styled.div` 
  margin-top: 5px;
  background-color: #3075C6;
  padding: 15px 25px;
`

