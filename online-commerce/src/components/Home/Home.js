import React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import Dashboard from './Dashboard'
import HomeSearch from './HomeSearch'
import Navbar from './Navbar'

function Home() {
  return (
    <Container>
      <Dashboard/>
      <HomeSearch/>
      <Navbar/>
      <Brand/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
