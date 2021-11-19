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
      <TextWrap>You don't have to look for your tour for a long time. We have grouped them by category</TextWrap>
    </Container>
  )
}

export default Category

const Container = styled.div`
  margin: 90px 100px;
  padding: 26px 0px 26px 70px;
  background-color: #F9FBFF;
`

const TopCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 40px;
    height: 3px;
    background-color: black;
    border-radius: 2px;
    margin-right: 20px;
  }
  h3 {
    font-size: 32px;
    font-weight: 600;
  }
`

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`

const ActiveButtonsLeft = styled.div`
  width: 40px;
  height: 40px;
  background: url('/images/Home/Arrow 3.svg');
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #3075C6;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: url('/images/Home/Arrow 2.svg');
    background-repeat: no-repeat;
    background-color: #3075C6;
    background-position: center center;
    transform: rotate(180deg);
  }
`

const ActiveButtonsRight = styled(ActiveButtonsLeft)`
  transform: rotate(180deg);
  margin-left: 15px;
  &:hover {
    transform: rotate(0);
  }
`

const TextWrap = styled.p`
  margin-top: 15px;
  margin-left: 60px;
  width: 100%;
  max-width: 350px;
  font-weight: 600;
  color: #AEAEAE;
`

