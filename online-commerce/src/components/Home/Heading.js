import React from 'react'
import styled from 'styled-components'

function Heading({heading, text}) {
  return (
    <Container>
      <h3>{heading}</h3>
      <a>{text}<img src="/Images/Home/brand__arrow--right.svg"/></a>
    </Container>
  )
}

export default Heading

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 51px;
  @media screen and (min-width:1400px){
    padding: 25px 88px;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #0C0C0C;
  }
  a {
    display: flex;
    align-items: center;
    color: #1071FF;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    img {
      margin-left: 8px;
    }
    &:hover {
      color: #0C0C0C;
    }
  }
`
