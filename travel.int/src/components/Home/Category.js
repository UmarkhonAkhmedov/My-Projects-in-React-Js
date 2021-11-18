import React from 'react'
import styled from 'styled-components'

function Category() {
  return (
    <Container>
      <TopCategory>
        <Header>
          <span></span>
          <h3>Category</h3>
        </Header>
        <ActionButtons>
          <ActiveButtonsLeft></ActiveButtonsLeft>
          <ActiveButtonsRight></ActiveButtonsRight>
        </ActionButtons>
      </TopCategory>
    </Container>
  )
}

export default Category

const Container = styled.div`

`

const TopCategory = styled.div`

`

const Header = styled.div`

`

const ActionButtons = styled.div`

`

const ActiveButtonsLeft = styled.div`

`

const ActiveButtonsRight = styled.div`

`

