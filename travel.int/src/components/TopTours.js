import React from 'react'
import styled from 'styled-components'
import ToursElements from '../data'

function TopTours() {
  
  return (
    <Container>
      <TourHeading>
        <h2>Top Tours For You</h2>
        <p>Much places for your vibes from the world</p>
      </TourHeading>
      <TourContent>
        <TourContentElement>

        </TourContentElement>
      </TourContent>
    </Container>
  )
}

export default TopTours

const Container = styled.div`
  max-width: 1164px;
  margin: 0 auto;
  padding: 300px 0;
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
  
`
const TourContentElement = styled.div`

`
