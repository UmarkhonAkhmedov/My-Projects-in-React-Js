import React, { useState } from 'react'
import styled from 'styled-components'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container className="container">
      <NavLogo>
        <a href="/"><img src="/images/Home/website__logo.svg" alt="Website Logo - Travel-int"/></a>
      </NavLogo>
      <NavList isOpen={isOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/category">Category</a></li>
        <li><a>About us</a></li>
        <li><a href="/tours">Tours</a></li>
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
      <NavMenu onClick={() => setIsOpen(true)}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      </NavMenu>
      <MenuClose onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
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
    display: ${props => props.isOpen ? "" : "none"};
    position: fixed;
    top: -10px;
    right: -10px;
    width: 70%;
    height: 110%;
    flex-direction: column;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    z-index: 10;
    background-color: white;
    transition: all 0.5s ease-in-out;
    padding-top: 100px;
    

    > li {
      padding: 20px;
    }
    
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
  border: 2px solid #3075C6;
  transition: all 0.3s ease;
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

    &:active {
    color: black;
    }
  }

  @media screen and (min-width: 768px){
    display: none;
  }
`

const MenuClose = styled.div`
  display: ${props => props.isOpen ? "" : "none"};
  position: absolute;
  top: 33px;
  right: 40px;
  z-index: 10;

  

  > svg {
    width: 19px;
    height: 19px;
    fill: #3075C6;

    &:active {
    fill: black;
    }
  }
  @media screen and (min-width: 768px){
    display: none;
  }

`