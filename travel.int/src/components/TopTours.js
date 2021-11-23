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
    </Container>
  )
}

export default TopTours

const Container = styled.div`
  max-width: 1164px;
  margin: 0 auto;
  padding: 100px 0;
`
const TourHeading = styled.div`
  text-align: center;
  h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #313131; 
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
`
const TourContentElement = styled.div`
  width: 22.5%;
  background-color: white;
  margin-bottom: 42px;
  border-radius: 25px;
  padding: 17px 20px 10px 20px;
  box-shadow: 0px 4px 45px -15px rgba(0, 0, 0, 0.15);

  .main__image {
    max-width: 220px;
    
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

    .location {
      display: flex;
      margin-right: 13px;
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
`
