import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Container className="container">
      <NavLogo>
        <a href="/"><img src="/images/Home/website__logo.svg" alt="Website Logo - Travel-int"/></a>
      </NavLogo>
      <NavList>
        <li><a>Home</a></li>
        <li><a>Category</a></li>
        <li><a>About us</a></li>
        <li><a>Tours</a></li>
        <li><a>Contact</a></li>
      </NavList>
      <NavButtons>
        <LoginIn>
          Log in
        </LoginIn>
        <SignUp>
          Sign up
        </SignUp>
      </NavButtons>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
`

const NavLogo = styled.div`
  width: 110px;
  height: 33px;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;

  > li {
    margin: 0 20px;
    cursor: pointer;

    > a {
      font-weight: 600;
      color: #AEAEAE;
      transition: all 0.3s ease;

      &:hover {
        color: #3075C6;
        font-weight: 600;
      }
    }
    
  }
`

const NavButtons = styled.div`
  display: flex;
  align-items: center;
`

const LoginIn = styled.a`
  color: #3075C6;
  margin-right: 16px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  &:hover {
    color: #AEAEAE;
  }
`
const SignUp = styled.a`
  background-color: #3075C6;
  color: #FFFFFF;
  padding: 5px 15px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  border: 2px solid #3075C6;
  &:hover {
    color: #3075C6;
    background-color: transparent;

  }
`