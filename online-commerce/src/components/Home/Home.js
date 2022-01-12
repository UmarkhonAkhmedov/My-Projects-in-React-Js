import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Dashboard from './Dashboard'
import HomeSearch from './HomeSearch'
import Navbar from './Navbar'
import SliderBrands from './SliderBrands'
import Recommended from './Recommended'
import Offer from './Offer'
import Hints from './Hints'
import Category from './Category'
import Save from './Save'
import New from './New'
import Delivery from './Delivery'

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
      <Offer/>
      <Heading heading="Recommended Categories" text="Show all categories"/>
      <Category/>
      <Heading heading="Hints for you" text="Show all hints"/>
      <Hints/>
      <Save/>
      <New/>
      <Delivery/>
      <Heading heading="Events for you" text="Show all events"/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
