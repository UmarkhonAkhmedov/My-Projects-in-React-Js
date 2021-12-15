import React from 'react'
import styled from 'styled-components'

import Menu from './Menu'

function Home() {
  return (
    <>
      <Container>
        <Menu/>
      </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  width: 1366px;
  height: 250vh;
  margin: 0 auto;
`

