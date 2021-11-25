import React, { useState } from 'react'
import styled from 'styled-components'

function Hero() {
  const [person, setPerson] = useState(0);

  const plusClick = () => {
    setPerson(person+1)

  }
  const minusClick = () => {
    if(person > 0){
      setPerson(person-1)
    }
  }
  

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
            <span onClick={minusClick}>-</span>
            <h5>{person === 0 ? "Add Person" : person}</h5>
            <span onClick={plusClick}>+</span>
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
  padding: 0 150px;
  position: relative;

  @media screen and (max-width: 1024px){
    padding: 0 40px;
  }
`

const HeroText = styled.div`
  width: 100%;
  height: 70vh;
  max-height: 500px;
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
  background-color: rgba(255, 255, 255, 95%);
  border-radius: 32px;
  width: 700px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  @media screen and (max-width: 1300px){
    top: 350px
  }

  @media screen and (max-width: 768px){
    top: 350px;
    left: calc(50% - 175px);
    width: 350px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: 500px){
    top: 350px;
    left: calc(50% - 110px);
    width: 220px;
    border-radius: 15px;
    padding: 10px 15px 10px 20px;
  }
`

const InputLocation = styled.div`
  
  > span {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;

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
    @media screen and (max-width: 500px){
    margin-bottom: 5px;
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
  @media screen and (max-width: 768px){
    margin: 0px auto 10px auto;

    > span {
      justify-content: center;
    }
  }
  @media screen and (max-width: 500px){
    margin: 5px 0;
  }
`

const InputDate = styled(InputLocation)`
  > input {
    color: #AEAEAE;
    cursor: pointer;
  }
`

const InputPeople = styled(InputLocation)`
  
  > div {
    display: flex;
    align-items: center;

    > h5 {
      margin: 0px auto;
      text-align: center;
      color: #AEAEAE;
      width: 75px;
      
    }
    > span {
      transform: scale(1.5);
      color: #AEAEAE;
      transition: all 0.3s ease;
      cursor: pointer;
      margin: 0 10px;
      &:hover {
        color: #3075C6;
      }
    }
  }
  @media screen and (max-width: 500px){
    margin: 10px 0 0 30px;
  }
`

const InputSearch = styled.div` 
  margin-top: 5px;
  background-color: #3075C6;
  padding: 15px 25px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease; 

  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 768px){
    margin: 10px auto 0 auto;
  }
`

