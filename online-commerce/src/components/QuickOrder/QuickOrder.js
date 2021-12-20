import React from 'react'
import styled from 'styled-components'
import QuickMainContent from './QuickMainContent'

function QuickOrder() {
  return (
    <Container>
      <h2>Quick order form</h2>
      <QuickMainContent/>
    </Container>
  )
}

export default QuickOrder

const Container = styled.div`
  position: fixed;
  top: calc(10% - 10px);
  left: calc(10% - 70px);
  display: block;
  background-color: #E6EFFB;
  width: 90%;
  height: 85vh;
  box-shadow: rgba(0, 0, 0, 1) 20px 15px 150px 1px;
  padding: 60px 60px 62px 60px;

  h2 {
    color: #0C0C0C;
    font-size: 24px;
  }

`
