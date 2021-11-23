import React from 'react'
import styled from 'styled-components'

function Features() {
  return (
    <Container>
      <FeaturesImage>
        <MainImage src="/images/Home/features__img--women.png" alt="Women watching something"></MainImage>
        <Destinations>
          <img src="/images/Home/features__icon--send.svg" alt="Send Icon"/>
          <span>
            <h3>400+</h3>
            <h5>Destinations</h5>
          </span>
        </Destinations>
        <Customers>
          <img src="/images/Home/features__icon--smile.svg" alt="Smile Icon"/>
          <span>
            <h3>3300+</h3>
            <h5>Customers</h5>
          </span>
        </Customers>
        <Tours>
          <img src="/images/Home/features__icon--flag.svg" alt="Flag Icon"/>
          <span>
            <h3>70+</h3>
            <h5>Tours</h5>
          </span>
        </Tours>
      </FeaturesImage>
      <FeaturesInfo>
        <h2>Why Choose <span>Travel</span>.int?</h2>
        <p>There are always undoubted leaders, professionals in their field, experts of their product - that's us! Travel agency Verona-tour does not stand still, we work for you! We are developing our network, opening new offices, inspecting hotels and discovering new countries, and most importantly, we provide our tourists with the best service in Ukraine!</p>
      </FeaturesInfo>
    </Container>
  )
}

export default Features

// Left Part of Features
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 80px 150px;
  align-items: center;
  background-image: 
  url("/images/Home/features__background--blue-16.svg"),
  url("/images/Home/features__background--blue-18.svg"),
  url("/images/Home/features__background--green-17.svg"),
  url("/images/Home/features__background--green-24.svg"),
  url("/images/Home/features__background--blue-27.svg"),
  url("/images/Home/features__background--red-11.svg"),
  url("/images/Home/features__background--red-20.svg");
  background-repeat: no-repeat;
  background-position: 
  left calc(50% + 0px) top 80%,
  left calc(50% + 100px) top 0,
  left calc(77% + 0px) top 14%,
  left calc(44% + 0px) top 55%,
  left calc(92% + 0px) top 60%,
  left calc(47% + 0px) top 18%,
  left calc(87% + 0px) top 38%;

  @media screen and (max-width: 924px){
    padding: 60px 80px;
  }
  @media screen and (max-width: 850px){
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 600px){
    padding: 30px 30px;
  }
`
const FeaturesImage = styled.div`
  width: 47%;
  @media screen and (max-width: 924px){
    width: 42%;
  }
  @media screen and (max-width: 850px){
    width: 70%;
  }
  @media screen and (max-width: 550px){
    width: 90%;
    margin: 0 auto;
    transform: translateX(20px);
  }
  @media screen and (max-width: 470px){
    width: 100%;
  }
`
const MainImage = styled.img`
  width: 100%;
  max-width: 385px;
  @media screen and (max-width: 400px){
    width: 100%;
    max-width: 280px;
  }
`
const Destinations = styled.div`
  position: absolute;
  display: flex;
  width: 185px;
  padding: 12px 0 13px 17px;
  background: rgba(255, 255, 255, 50%);
  top: 350px;
  left: calc(5% - 0px);
  border-top-left-radius: 35px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 30px;
    height: 30px;
    margin-right: 30px;
    @media screen and (max-width: 550px){
      margin-right: 15px;
    }
  }
  span {
    h3 {
      font-size: 24px;
      font-weight: 700;
      color: #313131;

      @media screen and (max-width: 550px){
      font-size: 20px;
      }
    }
    h5 {
      font-size: 12px;
      color: #5F5F5F;
      font-weight: 700;
      @media screen and (max-width: 550px){
        font-size: 10px;
      }
    }
  }
  @media screen and (max-width: 550px){
    width: 140px;
    padding: 5px 0 5px 10px;
    top: 350px;
    left: calc(10% - 80px);
  }
  @media screen and (max-width: 450px){
    top: 350px;
    left: calc(10% - 80px);
  }
  @media screen and (max-width: 400px){
    top: 250px;
    left: calc(10% - 80px);
  }
`
const Customers = styled(Destinations)`
  top: 230px;
  left: 430px;
  border-top-left-radius: 10px;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 100px !important;
  padding-left: 30px;

  @media screen and (max-width: 1180px){
    top: 250px;
    left: 290px;
  }
  @media screen and (max-width: 850px){
    top: 200px;
    left: 430px;
  }
  @media screen and (max-width: 650px){
    top: 200px;
    left: 350px;
  }
  @media screen and (max-width: 550px){
    padding-left: 20px;
    top: 120px;
    left: 250px;
  }
  @media screen and (max-width: 450px){
    top: 120px;
    left: 200px;
  }
  @media screen and (max-width: 400px){
    top: 120px;
    left: 170px;
  }
`
const Tours = styled(Destinations)`
  top: 530px;
  left: 390px;
  border-top-left-radius: 100px !important;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 10px;
  padding-left: 60px;
  @media screen and (max-width: 1200px){
    left: 290px;
  }
  @media screen and (max-width: 850px){
    top: 450px;
    left: 390px;
  }
  @media screen and (max-width: 580px){
    top: 420px;
    left: 280px;
  }
  @media screen and (max-width: 550px){
    padding-left: 30px;
    top: 420px;
    left: 250px;
  }
  @media screen and (max-width: 450px){
    top: 420px;
    left: 200px;
  }
  @media screen and (max-width: 400px){
    top: 320px;
    left: 170px;
  }
`

// Right Part of Features
const FeaturesInfo = styled.div`
  width: 47%;
  @media screen and (max-width: 924px){
    width: 42%;
  }
  @media screen and (max-width: 850px){
    margin-top: 100px;
    text-align: center;
    width: 90%;
  }
  @media screen and (max-width: 400px){
    margin-top: 80px;
    width: 100%;
  }

  h2 {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 45px;

    span {
      color: #3075C6;
    }
    @media screen and (max-width: 400px){
      font-size: 32px;
      margin-bottom: 30px;
    }
  }
  p {
    font-size: 22px;
    font-weight: 600;
    color: #AEAEAE;
    line-height: 33px;
    @media screen and (max-width: 400px){
      font-size: 18px;
      line-height: 28px;
    }
  }
`

