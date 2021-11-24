import React from 'react'
import styled from 'styled-components'
import ToursElements from '../data'

function TourItem({id, img, heading, text, locationPlace, dollarNum}){
  return(
    <TourContentElement key={id} >
      <div className="main__image"><img src={`/images/Home/tour__img--${img}.png`}/></div>
      <h4>{heading}</h4>
      <p className="main__text">{text}</p>
      <div className="bottom__info">
        <span className="location">
          <img src="/images/Home/tour__icon--location.svg" alt="Location Icon"/>
          <h5>{locationPlace}</h5>
        </span>
        <span className="price">
          <img src="/images/Home/tour__icon--$.svg"/>
          <span className="dollar">
            <h5>{dollarNum}</h5>
            <p>/</p>
            <p>person</p>
          </span>
        </span>
      </div>
      <div className="book__trip">
        <a>Book Trip Now <img src="/images/Home/tour__icon--arrow.svg"/></a>
      </div>
    </TourContentElement>
  )
}
function TourList(){
  return (
    <TourContent className=''>
      {ToursElements.map(({id, img, heading, text, locationPlace, dollarNum})=>
        <TourItem id={id} img={img} heading={heading} text={text} locationPlace={locationPlace} dollarNum={dollarNum}/>
      )}
    </TourContent>
  )
}

function TopTours() {
  
  return (
    <Container>
      <TourHeading>
        <h2>Top Tours For You</h2>
        <p>Much places for your vibes from the world</p>
      </TourHeading>
      <TourList/>
      <ViewAllTour  href="/category">View All Tours</ViewAllTour>
    </Container>
  )
}

export default TopTours

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 100px 50px 50px 50px;
`
const TourHeading = styled.div`
  text-align: center;
  h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #313131; 
    
    @media (max-width: 500px){
      font-size: 32px;
    }
  }
  p {
    color: #AEAEAE;
    font-weight: 600;
  }
`
const TourContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  @media (max-width: 1024px){
    justify-content: center;
  }
`
const TourContentElement = styled.div`
  position: relative;
  width: 22.5%;
  background-color: white;
  border-radius: 25px;
  padding: 17px 20px 40px 20px;
  box-shadow: 0px 4px 45px -15px rgba(0, 0, 0, 0.15);
  margin: 0 auto 70px auto;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);

    .book__trip {
      display: flex;
    }
  }
  @media (max-width: 1024px){
    width: 29%;
    margin: 0 auto 70px auto;
    padding: 17px 20px 20px 20px;
  }
  @media (max-width: 768px){
    width: 40%;
    margin: 0 auto 70px auto;
    padding: 17px 20px 20px 20px;
  }
  @media (max-width: 650px){
    width: 45%;
    margin: 0 auto 70px auto;
  }
  @media (max-width: 500px){
    width: 90%;
    margin: 0 auto 70px auto;
  }

  .main__image {
    max-width: 220px;
    margin: 0 auto;
    
    img {
      width: 100%;
      
    }
  }
  > h4 {
    color: #313131;
    font-size: 18px;
    font-weight: 700;
    margin: 17px 0px 8px 0px;
  }
  .main__text {
    color: #AEAEAE;
    font-size: 14px;
    margin-bottom: 38px;
  }
  .bottom__info {
    display: flex;
    align-items: center;
    color: #AEAEAE;
    @media (max-width: 1024px){
        flex-wrap: wrap;
    }

    .location {
      display: flex;
      margin-right: 13px;
      @media (max-width: 1024px){
        margin: 5px 5px;
      }
      >img {
        width: 16px;
        height: 16px;
        margin-right: 3px;
      }
      >h5 {
        color: #AEAEAE;
        font-weight: 700;
        font-size: 14px;
        margin: 0;
      }
    }
    .price {
      display: flex;
      align-items: center;
      @media (max-width: 1024px){
        margin: 5px 5px;
      }
      
      > img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
      .dollar {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        
        > h5 {
          font-size: 16px;
          color: #AEAEAE;
          margin-right: 2px;
        }
        > p {
          display: flex;
          flex-wrap: nowrap;
          font-size: 12px;
          color: #AEAEAE;
        }
      }
    }
  }
  .book__trip {
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: #3075C6;
    width: 100%;
    transform: translateX(-20px);
    padding: 15px 0;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;
    margin-top: 5px;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.8;
    }

    a {
      display: flex;
      align-items: center;
      color: white;
      img {
        margin-left: 10px;
      }
    }
  }
`
const ViewAllTour = styled.a` 
  display: block;
  text-align: center;
  width: 240px;
  margin: 0 auto;
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 17px 50px;
  background-color: #3075C6;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 420px){
    font-size: 16px;
    padding: 12px 30px;
    width: 170px;
  }
`
