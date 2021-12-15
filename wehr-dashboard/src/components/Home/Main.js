import React from 'react'
import styled from 'styled-components'
import Header from './Header'


function Main() {
  return (
    <Container>
      <Header/>
      <BreakLine/>
    
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
const BreakLine = styled.div`
  display: block;
  height: 1px;
  background-color: #F1F1F1;
  transform: translateX(40px);
  overflow-x: hidden;
`
