import React, { useState } from 'react'
import styled from 'styled-components'

function Category() {
  const imagesList = ['beach', 'mountain', 'desert', 'tower', 'temple', 'forest', 'city']
  const [clicking, setClick] = useState(true)

  return (
    <Container>
      <TopCategory>
        <Header>
          <span></span>
          <h3>Category</h3>
        </Header>
        <ActionButtons>
          <ActiveButtonsLeft onClick={() => setClick(true)}></ActiveButtonsLeft>
          <ActiveButtonsRight onClick={() => setClick(false)}></ActiveButtonsRight>
        </ActionButtons>
      </TopCategory>
      <TextWrap>You don't have to look for your tour for a long time. We have grouped them by category</TextWrap>
      <Swiper clicking={clicking} >
        {imagesList.map((image, index) => (
          <div> 
            <img key={index} src={(`../images/Home/category__${image}.png`)}/>
            <h4>{image}</h4>
          </div>
        ))}  
      </Swiper>
    </Container>
  )
}

export default Category

const Container = styled.div`
  margin: 90px 100px;
  padding: 26px 0px 26px 70px;
  background-color: #F9FBFF;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  @media screen and (max-width: 768px){
    margin: 90px 50px;
  }
  @media screen and (max-width: 525px){
    margin: 90px 50px;
    padding: 26px 0px 26px 30px;
  }
`
const TopCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 29px;

  @media screen and (max-width: 525px){
    flex-direction: column;
  }
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

  @media screen and (max-width: 525px){
    margin-top: 20px;
  }
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
    border-radius: 50%;
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

  @media screen and (max-width: 600px){
    margin-left: 30px;
    padding-right: 60px;
  }
  @media screen and (max-width: 400px){
    margin-left: 15px;
    padding-right: 40px;
  }
`
const Swiper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow: hidden;
  margin: 30px 0;

  div {
    position: relative;
    display: flex;
    left: ${(props) => props.clicking ? "0" : "-500px"};
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 10px;
    transition: all 0.5s ease;

    h4 {
      text-transform: capitalize;
    }
  }
`



