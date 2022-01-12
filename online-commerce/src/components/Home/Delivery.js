import styled from "styled-components"

function Delivery() {
  return (
    <Container>
      <div className="delivery__info">
        <h3>DPD delivery already available!</h3>
        <p>Choose DPD for speed, ease and convenience. Track your parcel in real time. This will help you plan your work while waiting for the parcel.</p>
        <a href="#">Show more</a>
      </div>
      <img src="/Images/Home/delivery__image.svg"/>
    </Container>
  )
}

export default Delivery

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 51px;
  margin: 40px 0;
  background-color: #F6F8FB;
  @media screen and (min-width:1400px){
    padding: 40px 88px;
  }
  @media screen and (max-width:768px){
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .delivery__info {
      width: 100%;
    }
  }
  img {
    max-width: 600px;
    width: 45%;
    @media screen and (max-width: 768px){
      margin-top: 50px;
      max-width: 500px;
      width: 100%;
    }
  }
  .delivery__info {
    width: 50%;
    @media screen and (max-width: 768px){
      width: 100%;

      p {
        margin: 0 auto;
      }
    }
    h3 {
      color: #0C0C0C;
      font-size: 32px;
      margin-bottom: 24px;
    }
    p {
      max-width: 400px;
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
    a {
      background-color: #1071FF;
      color: white;
      font-size: 16px;
      font-weight: 500;
      padding: 12px 32px;
      border-radius: 30px;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`
