import React, { useState } from 'react'
import styled from 'styled-components'

function SecondNavbar() {
  return (
    <Container className="container">
      <NavLogo>
        <a href="/"><img src="/images/Home/website__logo.svg" alt="Website Logo - Travel-int"/></a>
      </NavLogo>
      <UserImage>
        <img src="/images/Category/navbar__user.svg"/>
      </UserImage>
    </Container>
  )
}

export default SecondNavbar

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;

  @media screen and (max-width: 900px){
    padding: 25px 40px;
  }
`
const NavLogo = styled.div`
  width: 110px;
  height: 33px;
`
const UserImage = styled.div`
  background-color: #3075C6;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  img {
    padding-top: 4px;
    width: 24px;
    height: 24px;
  }
`