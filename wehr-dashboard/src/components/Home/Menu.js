import React from 'react'
import styled from 'styled-components'
import MenuData from './AllData'


function Menu() {
  return (
    <Main>
      <Heading><img src="/images/Home/website__logo.svg"/></Heading>
      <h4 className="smallHeading">MAIN MENU</h4>
      <List>
        {
          MenuData.map(({id, img, text})=> (
            <span className='menu__span' id={id}>
              <img className='menu__img' src={img} alt={text}/>
              <h3>{text}</h3>
            </span>
          ))
        }
      </List>
    </Main>
  )
}

export default Menu

const Main = styled.div`
  position: fixed;
  max-width: 220px;
  width: 100%;
  height: 100%;
  background-color: #FAFAFA;
  padding-left: 25px;
  box-sizing: border-box;
  border-right: 1px solid #F1F1F1;
  @media screen and (max-width: 1024px){
    max-width: 100px;
  }
  @media screen and (max-width: 500px){
    display: none;
    position: absolute;
    max-width: 0px;
    width: 0;
  }
  

  .smallHeading {
    font-size: 11px;
    color: #686868; 
    font-weight: 500;
    margin-bottom: 10px;
    @media screen and (max-width: 1024px){
      transform: translateX(-5px);
    }
  }
`
const Heading = styled.div`
  padding: 40px 0 30px 35px;

  img {
    width: 90px;
  }
  @media screen and (max-width:1024px){
    padding: 40px 0 30px 0px;
    transform: translateX(-10px);
    img {
      width: 70px;
    }
  }
`
const List = styled.div`
  @media screen and (max-width: 1024px){
    .menu__span {
      padding: 15px 0;
      transform: translateX(15px);

      &:nth-child(6){
        &::before {
          transform: translateX(-8px);
        }
      }
    }
    h3 {
      display: none;
    }
    .menu__img {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  }
  > span {
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
      margin-right: 20px;
    }

    h3{
      font-weight: 500;
      font-size: 15px;
    }
  }
  > span:first-child{
    color: #FF5151;
  }
  > span:nth-child(6){
    position: relative;
    margin-top: 50px;
    padding-top: 40px;
    &::before {
      content: "OTHER";
      position: absolute;
      top: 0; 
      left: 0;
      font-size: 11px;
      color: #686868; 
      font-weight: 500;
    }    
  }
`
