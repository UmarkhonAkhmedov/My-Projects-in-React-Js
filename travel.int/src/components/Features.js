import React from 'react'
import styled from 'styled-components'

function Features() {
  return (
    <Container>
      <FeaturesImage>
        <MainImage src="/images/Home/features__img--women.png" alt="Women watching something"></MainImage>
        <Destinations>
          <img src="/images/Home/features__icon--send.svg" alt="Send Icon"/>
          <span>
            <h3>400+</h3>
            <h5>Destinations</h5>
          </span>
        </Destinations>
        <Customers>
          <img src="/images/Home/features__icon--smile.svg" alt="Smile Icon"/>
          <span>
            <h3>3300+</h3>
            <h5>Customers</h5>
          </span>
        </Customers>
        <Tours>
          <img src="/images/Home/features__icon--flag.svg" alt="Flag Icon"/>
          <span>
            <h3>70+</h3>
            <h5>Tours</h5>
          </span>
        </Tours>
      </FeaturesImage>
      <FeaturesInfo>
        <h2>Why Choose Travel.int?</h2>
        <p>There are always undoubted leaders, professionals in their field, experts of their product - that's us! Travel agency Verona-tour does not stand still, we work for you! We are developing our network, opening new offices, inspecting hotels and discovering new countries, and most importantly, we provide our tourists with the best service in Ukraine!</p>
      </FeaturesInfo>
    </Container>
  )
}

export default Features

// Left Part of Features
const Container = styled.div`
  
`
const FeaturesImage = styled.div`

`
const MainImage = styled.img`

`
const Destinations = styled.div`

`
const Customers = styled.div`

`
const Tours = styled.div`

`

// Right Part of Features
const FeaturesInfo = styled.div`

`

