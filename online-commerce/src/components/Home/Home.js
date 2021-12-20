import React from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import Search from './Search'

function Home() {
  return (
    <Container>
      <Dashboard/>
      <Search/>
    </Container>
  )
}

export default Home

const Container = styled.div`
`
