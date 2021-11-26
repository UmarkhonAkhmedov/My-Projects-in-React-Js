import React, { useState, }from 'react'
import styled from 'styled-components'

function Description() {
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
    <Container>
      <BackArrow>
        <img src="/images/Tours/hero__back--arrow.svg"/>
      </BackArrow>
      <HeroImage>
        <img src="/images/Tours/hero__main--snowForest.png"/>
        <div>
          <img src="/images/Tours/hero__mountain.png"/>
          <img src="/images/Tours/hero__tree.png"/>
          <img src="/images/Tours/hero__sky.png"/>
        </div>
      </HeroImage>
      <HeroInfo>
        <h>Snow Forest</h>
        <p>Taste the cold and beauty of the Russian forest in winter.</p>
        <p>Taste the cold and beauty of the Russian forest in winter.</p>
        <span><img src="/images/Tours/hero__location.svg"/>Camchatka, Russia</span>
        <HeroInput>
          <InputDate>
            <span>
              <img src="/images/Home/hero__icon-date.svg"/>
              <h3>Date</h3>
            </span>
            <input type="date" placeholder="Choose date"/>
          </InputDate>
          <span className="heroInputBorder"></span>
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
        </HeroInput>
        <InputSubmit href="#">
            Make My Tour
        </InputSubmit>
      </HeroInfo>
    </Container>
  )
}

export default Description

const Container = styled.div`
  padding: 50px;
`
const BackArrow = styled.div`

`
const HeroImage = styled.div`

`
const HeroInfo = styled.div`

`
const HeroInput = styled.div`
  display: flex;
  align-items: flex-start ;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 95%);
  border-radius: 32px;
  max-width: 400px;
  width: 100%;
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
  .heroInputBorder {
    height: 70px;
    width: 2px;
    background-color: #AEAEAE;
    border-radius: 10px;
  }
`
const InputDate = styled.div`
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
      background-color: #E0D6FF;
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
    color: #AEAEAE;
    cursor: pointer;

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
const InputPeople = styled(InputDate)`
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
const InputSubmit = styled.div`
  text-align: center;
  background-color: #3075C6;
  padding: 15px 25px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease; 
  max-width: 400px;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-top: 40px;

  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 768px){
    margin: 10px auto 0 auto;
  }
`
