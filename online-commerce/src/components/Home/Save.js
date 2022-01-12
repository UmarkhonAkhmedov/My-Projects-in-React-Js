import styled from "styled-components"


function Save() {
  return (
    <Container>
      <div className="save__image">
        <img src="/Images/Home/save__main.png"/>
      </div>
      <div className="save__info">
        <h3>Buy this bundle and save $100!</h3>
        <p>Longer sentence, for just two lines<br></br> and it could be very very long</p>
        <a href="#">Buy this bundle</a>
      </div>
    </Container>
  )
}

export default Save

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 51px;
  column-gap: 10px;
  margin: 50px 0 40px 0;
  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
  }

  .save__image {
    max-width: 600px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    border-radius: 8px;
    img {
      max-width: 600px;
      width: 100%;
      max-height: 300px;
      height: 100%;
      border-radius: 8px;
    }
  }
  .save__info {
    max-width: 600px;
    width: 100%;
    background-color: #1071FF;
    max-height: 300px;
    height: 100%;
    padding: 75px 20px 75px 64px;
    border-radius: 8px;
    @media screen and (max-width: 1024px){
      padding: 30px 30px;
    }
    @media screen and (max-width: 768px){
      margin-top: 10px;
      text-align: center;
    }
    @media screen and (max-width: 500px){
      padding: 20px 10px;
    }

    h3 {
      color: white;
      font-size: 28px;
      @media screen and (max-width: 500px){
        font-size: 20px;
      }
    }
    p {
      line-height: 28px;
      font-size: 20px;
      color: white;
      margin-top: 16px;
      @media screen and (max-width: 500px){
        font-size: 16px;
      }
    }
    a {
      display: inline-block;
      color: #1071FF;
      background-color: white;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease;
      padding: 12px 32px;
      border-radius: 30px;
      margin-top: 32px;
      
      &:hover {
        opacity: 0.8;
      }
      @media screen and (max-width: 500px){
        margin-top: 20px;
        font-size: 14px;
      }
    }
  }
`
