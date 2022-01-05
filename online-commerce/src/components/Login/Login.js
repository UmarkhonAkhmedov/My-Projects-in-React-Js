import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Content>
        <span className='close'><img src="/Images/Login/close.svg"/></span>
        <h3>Welcome back! Log in</h3>
        <div className='inputs'>
          <span>Login/e-mail</span>
          <input type="login"/>
        </div>
        <div className='inputs password'>
          <span>Password</span>
          <input type="password"/>
        </div>
        <a href="/login/forget" className='forget'><h4>Forgot password?</h4></a>
        <a className='login__btn'>Login</a>
        <span className='register'>You do not have an account? <a>Register</a></span>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A3A3A3;
  height: 100vh;
`
const Content = styled.div`
  background-color: white;
  max-width: 546px;
  width: 100%;
  padding: 24px 24px 50px 24px;
  border-radius: 8px;

  .close {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  h3 {
    font-size: 20px;
    margin: 20px 0 24px 0;
    text-align: center;
  }
  .inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 373px;
    width: 100%;
    margin: 0 auto;

    span {
      color: #434447;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 5px;
    }
    input {
      border: none;
      outline: none;
      border: 1px solid #EAECEE;
      border-radius: 8px;
      padding: 12px 15px;
      font-size: 16px;
    }
  }
  .password {
    margin-top: 18px;
  }
  .forget {
    display: flex;
    justify-content: flex-end;
    max-width: 373px;
    width: 100%;
    margin: 0 auto;
    color: #1071FF;
    margin-top: 8px;
    font-size: 16px;
    
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
    h4 {
      font-weight: 500;
    }
  }
  .login__btn {
    display: flex;
    justify-content: center;
    max-width: 198px;
    width: 100%;
    background-color: #1071FF;
    padding: 12px 70px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 500;
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;
    margin: 24px auto;
    &:hover {
      opacity: 0.8;
    }
  }
  .register {
    display: block;
    text-align: center;
    color: #0C0C0C;
    a {
      display: inline-block;
      margin-left: 5px;
      color: #1071FF;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`
