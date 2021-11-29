import React from 'react'
import styled from 'styled-components'
import ToursElements from '../../data'


function RecentItem({id, img, heading, locationPlace, dollarNum}){
  return(
    <RecentContentElement key={id} >
      <div className="main__image"><img src={`/images/Home/tour__img--${img}.png`}/></div>
      <h4>{heading}</h4>
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
    </RecentContentElement>
  )
}
function RecentList(){
  return (
    <RecentContent className=''>
      {ToursElements.map(({id, img, heading, locationPlace, dollarNum})=>
        <RecentItem id={id} img={img} heading={heading} locationPlace={locationPlace} dollarNum={dollarNum}/>
      )}
    </RecentContent>
  )
}

function RecentViewed() {
  return (
    <Container>
      <RecentHeading>Recent Viewed</RecentHeading>
      <RecentList/>
    </Container>
  )
}

export default RecentViewed

const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 50px 0px 50px;
  overflow: hidden;
`
const RecentHeading = styled.h3 `
  font-size: 24px;
  font-weight: 600;
  margin-bottom: -20px;

`
const RecentContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 20px;
  
`
const RecentContentElement = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 25px;
  padding: 17px 20px 40px 20px;
  box-shadow: 0px 4px 45px -15px rgba(0, 0, 0, 0.15);
  margin-right: 30px;
  transition: all 0.5s ease;
  cursor: pointer;
  @media screen and (max-width: 1100px){
    width: 300px;
  }
  @media (max-width: 650px){
    width: 250px;
    margin-right: 30px;
  }
  @media (max-width: 500px){
    width: 300px;
    margin-right: 30px;
  }

  .main__image {
    max-width: 300px;
    margin: 0 auto;
    
    img {
      max-width: 250px;
      
    }
    
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

`
