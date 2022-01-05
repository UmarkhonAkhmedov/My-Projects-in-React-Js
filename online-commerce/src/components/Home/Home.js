import React from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import HomeSearch from './HomeSearch'
import Navbar from './Navbar'

function Home() {
  return (
    <Container>
      <Dashboard/>
      <HomeSearch/>
      <Navbar/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
