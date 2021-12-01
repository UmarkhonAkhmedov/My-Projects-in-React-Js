import React, { useState} from 'react'
import styled from 'styled-components'

function SignUp() {
  const UnitedKingdom = "UK"
  const Uzbek = "UZ"
  const Russia = "RU" 
  const [lan, setLan] = useState(UnitedKingdom) 
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Container className="container">
        <Navbar>
          <img src="/images/SignUp/SignUpLogo.svg"/>
          <Language isOpen={isOpen} >
            <h3 onClick={() => setIsOpen(true)}>English ({lan})</h3>
            <img onClick={() => setIsOpen(true)} src="/images/SignUp/language__toggle.svg"/>
            <span onClick={() => setIsOpen(false)}>
              <a><h3 onClick={()=>{setLan('UK')}}>{UnitedKingdom}</h3></a>
              <a><h3 onClick={()=>{setLan('UZ')}}>{Uzbek}</h3></a>
              <a><h3 onClick={()=>{setLan('RU')}}>{Russia}</h3></a>
            </span>
          </Language>
        </Navbar>
        <MainContent>
          <h2>Create Account</h2>
          <div className="signupwith">
            <a>
              <img src="/images/SignUp/google__icon.svg"/>
              <p>Sign up with Google</p>
            </a>
            <a>
              <img src="/images/SignUp/facebook__icon.svg"/>
              <p>Sign up with Facebook</p>
            </a>
          </div>
          <h3>- OR -</h3>
          <div className="inputs">
            <input type="text" placeholder="Full Name"/>
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
            <img src="/images/SignUp/eye-not.svg"/>
          </div>
          <button className="create">Create Account</button>
          <span className="login">
            <p>Already have an account?</p>
            <a href="#">Log in</a>
          </span>
        </MainContent>
      </Container>
    </>
  )
}

export default SignUp

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1366px;
  margin: 0 auto;
  padding: 30px 100px 30px 100px; 
  background-color: #ffffff;

  @media screen and (max-width: 700px){
    padding: 30px 50px 30px 50px;
  }
  @media screen and (max-width: 400px){
    padding: 30px 30px 30px 30px;
  }
`
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;

  > img {
    width: 90px;
    height: auto;
    cursor: pointer;
    transition: all 0.3s ease;
    @media screen and (max-width: 500px){
      width: 70px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

`
const Language = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
  
  h3 {
    display: flex;
    color: #A1A1A1;
    font-size: 17px;
    width: 110px;
    font-weight: 500;
    @media screen and (max-width: 500px){
      font-size: 15px;
      width: 100px;
    }
  }

  span {
    position: absolute;
    display: ${props => props.isOpen ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    top: 30px;
    right: -15px;
    text-align: center;
    width: 50px;
    h3 {
      color: white;
      display: block;
      border: 1px solid #6AB6BA;
      text-align: center;
      background-color: #8FF1F5;
    }
    @media screen and (max-width: 500px){
      top: 30px;
      right: 15px;
    }

  }
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;
  text-align: center;
  > h2 {
    @media screen and (max-width: 500px){
      font-size: 18px;
      margin-top: 0px;
    }
  }
  .signupwith {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media screen and (max-width: 600px){
      flex-direction: column;
    }
    @media screen and (max-width: 500px){
      margin-top: 20px;
    }


    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #EAEAEA;
      border-radius: 9px;
      padding: 10px 15px;
      background-color: #ffffff;
      cursor: pointer;
      transition: all 0.3s ease;

      img {
        margin-right: 15px;
      }

      &:hover {
        background-color: #EAEAEA;
      }
    }
    > a:first-child {
      margin-right: 40px;

      @media screen and (max-width: 600px){
          margin-right: 0px;
          margin-bottom: 10px;
          padding: 10px 25px;
      }
    }
  }
  > h3 {
    font-size: 20px;
    color: #909090;
    font-weight: 400;
    margin-top: 30px;

    @media screen and (max-width: 500px){
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: -10px;
    }
  }
  .inputs {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    margin: 0px auto 0 auto;

    > input {
      margin: 10px 0;
      padding: 10px 0 10px 2px;
      font-size: 18px;
      border: none;
      border-bottom: 1px solid #EAEAEA;
      outline: none;

      &::placeholder {
        color: #A0A0A0;
        font-size: 16px;
      }
    }
    > img {
      position: absolute;
      top: 150px;
      right: 0;
    }
  }
  > button {
    display: flex;
    justify-content: center;
    max-width: 490px;
    width: 100%;
    margin: 30px auto 0 auto;
    padding: 12px 0;
    font-size: 18px;
    font-weight: 700;
    background-color: #7CD2D7;
    border-radius: 9px;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #65B2B6;
    }
  }
  .login {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    p {
      color: #A0A0A0;
      font-size: 16px;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      color: #7CD2D7;
      font-weight: 500;
      transition: all 0.3s ease;
      &:hover {
        color: #65B2B6;
      }
    }
    @media screen and (max-width: 400px){
      flex-direction: column;
    }
  }
`

