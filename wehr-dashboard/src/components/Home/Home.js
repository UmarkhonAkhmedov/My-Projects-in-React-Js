import React from 'react'
import styled from 'styled-components'
import Main from './Main'
import Menu from './Menu'

function Home() {
  return (
    <>
      <Container>
        <Menu/>
        <Main/>
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  height: 250vh;
  margin: 0 auto;
`

