import React from 'react'
import styled from 'styled-components'

function ScanQr() {
  return (
    <Container>
      <div>
        <h1>Scan Qr-code and take discount</h1>
        <img src="/images/Home/scan__qr-code.png" alt="Scan Code Image"/>
      </div>
    </Container>
  )
}

export default ScanQr

const Container = styled.div`
  margin: 70px auto 40px auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 80px;

  div {
    text-align: center;
    background-image: url("/images/Home/scan__background.png");
    padding: 40px;
    border-radius: 56px;
    overflow: hidden;

    > h1 {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 30px;
    }
    > img {
      max-width: 160px;
      width: 100%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 768px){
    div {
      border-radius: 48px;
      h1 {
        font-size: 36px;
      }
    }
  }
  @media screen and (max-width: 500px){
    padding: 0 40px;
    div {
      padding: 40px 0;
      h1 {
        font-size: 30px;
      }
      img {
        max-width: 130px;
      }
    }
  }
  @media screen and (max-width: 500px){
    div {
      border-radius: 30px;
      padding: 30px 10px;
      h1 {
        font-size: 27px;
      }
    }
  }
`


