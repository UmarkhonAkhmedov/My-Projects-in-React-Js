import React from 'react'
import styled from 'styled-components'

function Forget() {
  return (
    <Container>
      <Content>
        <a href="#" className='close'><img src="/Images/Login/close.svg"/></a>
        <h3>Did you forget the password ?</h3>
        <p className='text'>Enter the e-mail address in the field below.</p>
        <p className='text'>We will send a link to change your password to your e-mail.</p>
        <div className='inputs'>
          <span>E-mail</span>
          <input type="email"/>
        </div>
        <a className='login__btn'>Reset your password</a>
      </Content>
    </Container>
  )
}

export default Forget

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

  @media screen and (max-width:650px){
    margin: 0 20px;
  }
  .close {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  .text {
    text-align: center;
    color: #0C0C0C;
    margin: 3px 0;
    font-size: 15px;
  }
  h3 {
    font-size: 20px;
    margin: 20px 0 30px 0;
    text-align: center;
  }
  .inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 373px;
    width: 100%;
    margin: 30px auto 0 auto;

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
  .login__btn {
    display: flex;
    justify-content: center;
    max-width: 198px;
    width: 100%;
    background-color: #1071FF;
    padding: 12px 20px;
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
`
