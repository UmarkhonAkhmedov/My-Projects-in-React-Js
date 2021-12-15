import React from 'react'
import styled from 'styled-components'
import Header from './Header'


function Main() {
  return (
    <Container>
      <Header/>
    
    </Container>
  )
}

export default Main

const Container = styled.div`
  position: relative;
  margin-left: 220px;
  top: 0;
  right: 0;
  max-width: 1126px;
  width: 100%;
`
