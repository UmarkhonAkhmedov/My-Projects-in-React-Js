import React from 'react'
import styled from 'styled-components'

function Box({img, text, number}){
  return (
    <a className='box'>
      <img src={img}/>
      <h4>{text}</h4>
      <span>{number}</span>
    </a>
  )
}

function Navbar() {
  return (
    <Container>
      <Nav>
        <Lists>
          <div className='selecting'>
            <h3>HOME & GARDEN</h3>
            <img className='icon icon__usual' src="/Images/Home/navbar__icon--select.svg"/>
            <img className='icon icon__blue' src="/Images/Home/navbar__icon--select__blue.svg"/>
            <div></div>
          </div>
          <div className='selecting'>
            <h3>MOTORS</h3>
            <img className='icon icon__usual' src="/Images/Home/navbar__icon--select.svg"/>
            <img className='icon icon__blue' src="/Images/Home/navbar__icon--select__blue.svg"/>
            <div></div>
          </div>
          <h3><a href="#">ELECTRONICS</a></h3>
          <h3><a href="#">OFFICE EQUIPMENT</a></h3>
        </Lists>
        <Boxes>
          <Box img="/Images/Home/navbar__icon--comparing.svg" text="COMPARE" number="3"/>
          <Box img="/Images/Home/navbar__icon--star.svg" text="FAVORITES" number="7"/>
          <Box img="/Images/Home/navbar__icon--cart.svg" text="CART" number="45"/>
        </Boxes>
      </Nav>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  background-color: #F6F8FB;
  padding: 16px 51px;

  @media screen and (min-width:1400px){
    padding: 16px 88px;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Lists = styled.div`
  display: flex;
  align-items: center;

  .selecting {
    display: flex;
    margin-right: 50px;

    .icon {
      margin-left: 6px;
      transition: all 0.5s ease;
    }
    .icon__usual {
      display: block;
    }
    .icon__blue {
      display: none;
    }
    &:hover {
      .icon__usual {
        display: none;
      }
      .icon__blue {
        display: block;
      }
    }
  }
  h3 {
    color: #0C0C0C;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    font-weight: 600;
    &:hover {
      color: #1071FF;
    }
    &:last-child {
      margin-left: 50px;
    }
    a {
      color: #0C0C0C;
      font-weight: 600;
      transition: all 0.3s ease;
      &:hover {
      color: #1071FF;
    }
    }
  }
`
const Boxes = styled.div`
  display: flex;
  align-items: center;
  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {

      h4 {
        color: #0C0C0C; 
      }
    }
    &:nth-child(2){
      margin: 0 30px;
    }
    img {
      margin-bottom: 8px;
    }
    h4 {
      color: #1071FF;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    span {
      position: absolute;
      top: -10px;
      transform: translateX(10px);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FF4E00;
      border-radius: 50%;
      font-size: 10px;
      width: 18px;
      height: 18px;
      color: white;
      &:first-child {
      right: 20px;
      }
    }
    
  }
`
