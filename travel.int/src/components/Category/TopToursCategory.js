import React from 'react'
import styled from 'styled-components'
import TourList from '../ToursInfoOverall'


function TopToursCategory() {
  return (
    <Container>
      <TourListHeading>Recommendation</TourListHeading>
      <TourList/>
    </Container>
  )
}

export default TopToursCategory

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 100px 50px 50px 50px;
`
const TourListHeading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 -10px 0;
`

