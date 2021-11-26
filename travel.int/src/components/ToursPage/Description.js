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
        <a href="/"><img src="/images/Tours/hero__back--arrow.svg"/></a>
      </BackArrow>
      <HeroImage>
        <img class="heroMainImage" src="/images/Tours/hero__main--snowForest.png"/>
        <div class="heroSubImages">
          <img src="/images/Tours/hero__mountain.png"/>
          <img src="/images/Tours/hero__tree.png"/>
          <img src="/images/Tours/hero__sky.png"/>
        </div>
      </HeroImage>
      <HeroInfo>
        <h2>Snow Forest</h2>
        <p>Taste the cold and beauty of the Russian forest in winter.</p>
        <p>Taste the cold and beauty of the Russian forest in winter.</p>
        <span class="imageLocation"><img src="/images/Tours/hero__location.svg"/>Camchatka, Russia</span>
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
  position: relative;
  align-items: center;
  display: flex;
  padding: 70px 130px 50px 130px;
  justify-content: space-between;
`
const BackArrow = styled.div`
  position: absolute;
  top: 45px;
  left: 50px;

`
const HeroImage = styled.div`
  margin: 0 10px;
  width: 60%;

  .heroMainImage {
    border-radius: 25px;
    margin-bottom: 10px;
    width: 100%;
  }
  .heroSubImages {
    display: flex;
    justify-content: space-between;
    width: 100%;
    img {
      max-width: 190px;
      width: 32%;
    }
  }
`
const HeroInfo = styled.div`
  margin: 0 10px;
  width: 35%;

  h2 {
    font-weight: bold;
    font-size: 30px;
    margin: 0px 0 20px 0;
  }
  p {
    color: #AEAEAE;
    font-size: 18px;
    max-width: 380px;
    margin: 0 0 20px 0;
  }
  .imageLocation {
    display: flex;
    align-items: center;
    color: #AEAEAE;
    margin-top: 40px;
    margin-bottom: 40px;

    img {
      margin-right: 10px;
    }
  }
` 
const HeroInput = styled.div`
  display: flex;
  align-items: flex-start ;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 95%);
  border-radius: 32px;
  width: 400px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  @media screen and (max-width: 100px){
  }

  @media screen and (max-width: 768px){
    width: 350px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @media screen and (max-width: 500px){
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
