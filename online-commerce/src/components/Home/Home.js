import React from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import HomeSearch from './HomeSearch'

function Home() {
  return (
    <Container>
      <Dashboard/>
      <HomeSearch/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
