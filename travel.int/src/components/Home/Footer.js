import React from 'react'
import styled from 'styled-components'

function Footer() {
  const today = new Date();

  return (
    <>
    <Container>
      <FooterLogo>
        <a class="logo"><img src="/images/Home/footer__logo.svg" alt="Website Logo"/></a>
        <p>Enjoy by triping with Travelint.</p>
        <ul>
          <li><a><img src="/images/Home/footer__icon--facebook.svg"/></a></li>
          <li><a><img src="/images/Home/footer__icon--whatsap.svg"/></a></li>
          <li><a><img src="/images/Home/footer__icon--instagram.svg"/></a></li>
        </ul>
      </FooterLogo>
      <Menu>
        <h3>Menu</h3>
        <ul className="footer__lists">
          <li><a href="/">Home</a></li>
          <li><a href="/tours">Tours</a></li>
          <li><a href="/category">Category</a></li>
          <li><a>About Us</a></li>
        </ul>
      </Menu>
      <BookingPlan>
        <h3>Booking Plan</h3>
        <ul className="footer__lists">
            <li><a>Personal Trip</a></li>
            <li><a>Group Trip</a></li>
        </ul>
      </BookingPlan>
      <Support>
        <h3>Support</h3>
        <ul className="footer__lists">
          <li><a>FAQ</a></li>
          <li><a>Terms & Conditions</a></li>
          <li><a>Privacy Policy</a></li>
        </ul>
      </Support>
      <GetApp>
        <h3>Get App</h3>
        <ul className="footer__lists">
          <li><a>Google Play Store</a></li>
          <li><a>App Store</a></li>
          <li><a>Other Stores </a></li>
        </ul>
      </GetApp>
    </Container>
    <FooterReserved>
      {today.getFullYear()} (c) — Travelint. All Rights Reserved
    </FooterReserved>
    </>
  )
}

export default Footer

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 100px auto 0 auto;
  padding: 50px 100px 60px 100px;

  @media screen and (max-width: 950px){
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px 70px 50px 70px;
    margin: 80px auto 0 auto;
  }
  @media screen and (max-width: 950px){
    margin: 50px auto 0 auto;
    padding: 50px 30px 40px 30px;
  }
`
const FooterLogo = styled.div`
  .logo {
    width: 100%;
    img {
      max-width: 110px;
      width: 100%;
    }
  }
  p {
    margin-top: 20px;
    font-size: 20px;
    color: #AEAEAE;
    max-width: 142px;
    width: 100%;
  }
  ul {
    display: flex;
    margin-top: 20px;
    margin-left: -5px;
    li {
      margin: 5px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 950px){
    margin: 15px;
  }
  @media screen and (max-width: 600px){
    width: 100%;
    margin: 15px auto;
    text-align: center;

    p {
      margin: 20px auto 20px auto;
    }
    ul {
      margin: 20px auto 0 auto;
      justify-content: center;
    }
  }
`
const Menu = styled.div`

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #313131;
    margin-bottom: 15px;
  }
  ul {
    display: flex;
    flex-direction: column;

    li {
      margin: 5px 0;
      cursor: pointer;
      a {
        font-size: 16px;
        color: #AEAEAE;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      &:hover {
        a {
          color: #313131;
        }
      }
    }
  }
  @media screen and (max-width: 950px){
    margin: 15px;
  }
  @media screen and (max-width: 600px){
    width: 40%;
    margin: 15px auto;
    transform: translateX(30px)
  }
  @media screen and (max-width: 400px){
    transform: translateX(0px)
  }
`
const BookingPlan = styled(Menu)``
const Support = styled(Menu)``
const GetApp = styled(Menu)``

const FooterReserved = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #AEAEAE;
  padding-bottom: 14px;
`

