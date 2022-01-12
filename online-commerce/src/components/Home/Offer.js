import styled from "styled-components"

function Offer() {
  return (
    <Container>
      <div className="offer__left">
        <img src="/Images/Home/offer__tool.svg"/>
        <h1><span>-20%</span> on power tools</h1>
      </div>
      <button>Check offer</button>
    </Container>
  )
}

export default Offer

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1071FF;
  margin: 80px 0 40px 0;
  padding: 16px 51px;
  @media screen and (min-width:1400px){
    padding: 16px 88px;
  }
  @media screen and (max-width:600px){
    flex-direction: column;
    justify-content: center;
  }

  .offer__left {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      @media screen and (max-width:670px){
        width: 20%;
      }
    }
    h1 {
      display: flex;
      align-items: center;
      font-size: 46px;
      color: white;
      span {
        font-size: 80px;
        margin-right: 16px;
      }
      @media screen and (max-width:910px){
        font-size: 24px;
        span {
          font-size: 40px;
        }
      }
      @media screen and (max-width:670px){
        font-size: 20px;
        span {
          font-size: 32px;
        }
      }
    }
  
  }
  button {
    color: #1071FF;
    padding: 12px 32px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 30px;
    background-color: #FFFFFF;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  }
`
