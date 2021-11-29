import React from 'react'
import styled from 'styled-components'
import TourList from '../ToursInfoOverall'

function TopTours() {
  
  return (
    <Container>
      <TourHeading>
        <h2>Top Tours For You</h2>
        <p>Much places for your vibes from the world</p>
      </TourHeading>
      <TourList/>
      <ViewAllTour href="/category">View All Tours</ViewAllTour>
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
