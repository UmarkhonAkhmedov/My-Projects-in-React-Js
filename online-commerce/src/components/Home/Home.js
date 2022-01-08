import React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import Dashboard from './Dashboard'
import HomeSearch from './HomeSearch'
import Navbar from './Navbar'
import SliderBrands from './SliderBrands'

function Home() {
  return (
    <Container>
      <Dashboard/>
      <HomeSearch/>
      <Navbar/>
      <Brand/>
      <SliderBrands/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
