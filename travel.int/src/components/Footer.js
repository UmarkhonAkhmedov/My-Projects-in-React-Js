import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
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
          <li><a>Home</a></li>
          <li><a>Tours</a></li>
          <li><a>Category</a></li>
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
  )
}

export default Footer

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 100px auto 0 auto;
  padding: 50px 100px 80px 100px;
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
`
const BookingPlan = styled(Menu)`

`
const Support = styled(Menu)`

`
const GetApp = styled(Menu)`

`

