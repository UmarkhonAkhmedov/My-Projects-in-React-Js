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
  padding: 100px 150px;
  align-items: center;
`
const FeaturesImage = styled.div`
  width: 47%;
`
const MainImage = styled.img`
  width: 100%;
  max-width: 385px;
`
const Destinations = styled.div`
  position: absolute;
  display: flex;
  width: 190px;
  padding: 12px 0 13px 17px;
  background: rgba(255, 255, 255, 50%);
  top: 350px;
  left: 50px;
  border-top-left-radius: 35px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 30px;
    height: 30px;
    margin-right: 30px;
  }
  span {
    h3 {
      font-size: 24px;
      font-weight: 700;
      color: #313131;
    }
    h5 {
      font-size: 12px;
      color: #5F5F5F;
      font-weight: 700;
    }
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
`
const Tours = styled(Destinations)`
  top: 530px;
  left: 390px;
  border-top-left-radius: 100px !important;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 10px;
  padding-left: 60px;
`

// Right Part of Features
const FeaturesInfo = styled.div`
  width: 47%;

  h2 {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 45px;

    span {
      color: #3075C6;
    }
  }
  p {
    font-size: 22px;
    font-weight: 600;
    color: #AEAEAE;
    line-height: 33px;
  }
`

