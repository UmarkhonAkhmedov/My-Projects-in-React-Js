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
      <NavMenu>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </NavMenu>
      <MenuClose>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
      </MenuClose>
    </Container>
  )
}

export default Navbar

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

const NavList = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }

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
    @media screen and (max-width: 900px){
    margin: 0 10px;
  }
  }
`

const NavButtons = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }

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

const NavMenu = styled.div` 
  width: 20px;
  height: 20px;

  path {
    color: #3075C6;
  }

  @media screen and (min-width: 768px){
    display: none;
  }
`

const MenuClose = styled.div`
  width: 22px;
  height: 22px;
  display: none;

  @media screen and (min-width: 768px){
    display: none;
  }
`