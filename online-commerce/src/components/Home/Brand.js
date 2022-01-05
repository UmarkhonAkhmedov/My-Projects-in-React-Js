import React from 'react'
import styled from 'styled-components'

function Brand() {
  return (
    <Container>
      <h3>Our brands</h3>
      <a>Show all brands<img src="/Images/Home/brand__arrow--right.svg"/></a>
    </Container>
  )
}

export default Brand

const Container = styled.div`
  display: flex;
  justify-content: space-between;

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
