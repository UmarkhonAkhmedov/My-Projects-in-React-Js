import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Dashboard from './Dashboard'
import HomeSearch from './HomeSearch'
import Navbar from './Navbar'
import SliderBrands from './SliderBrands'
import Recommended from './Recommended'

function Home() {
  return (
    <Container>
      <Dashboard/>
      <HomeSearch/>
      <Navbar/>
      <Heading heading="Our brands" text="Show all brands"/>
      <SliderBrands/>
      <Heading heading="Recommended products" text="Show all recommended products"/>
      <Recommended/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
