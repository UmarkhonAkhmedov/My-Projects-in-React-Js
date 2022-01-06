import React, { useState } from 'react'
import styled from 'styled-components'
import QuickMainContent from './QuickMainContent'

function QuickOrder({isOpen, setIsOpen}) {

  return (
    <Container isOpen={isOpen}>
      <Header>
        <h2>Quick order form</h2>
        <img onClick={() => setIsOpen(false)} src="/Images/Home/order__close.svg" alt="Close Button"/>
      </Header>
      <QuickMainContent/>
    </Container>
  )
}

export default QuickOrder

const Container = styled.div`
  position: fixed;
  top: calc(10% - 10px);
  left: calc(10% - 70px);
  display: ${props => props.isOpen ? "block" : "none"};
  background-color: #E6EFFB;
  width: 90%;
  height: 85vh;
  box-shadow: rgba(0, 0, 0, 1) 20px 15px 150px 1px;
  padding: 50px 60px 52px 60px;
  z-index: 10;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #0C0C0C;
    font-size: 24px;
  }
  img {
    cursor: pointer;
    transition: all 0.3s ease;
    transform: scale(0.9);
    &:hover {
      opacity: 0.5;
    }
  }
`
