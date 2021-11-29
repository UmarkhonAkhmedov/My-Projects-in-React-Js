import React from 'react'
import styled from 'styled-components'
import TourList from '../ToursInfoOverall'


function ToursRecommendation() {
  return (
    <Container>
      <TourListHeading>Recommendation</TourListHeading>
      <TourList/>
      <ViewAllTour href="/category">View All Tours</ViewAllTour>
    </Container>
  )
}

export default ToursRecommendation

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 100px 50px 50px 50px;
  
`
const TourListHeading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 -20px 0;
`
const ViewAllTour = styled.a` 
  display: block;
  text-align: center;
  width: 240px;
  margin: 0px auto -80px auto;
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