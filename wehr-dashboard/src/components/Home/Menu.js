import React from 'react'
import styled from 'styled-components'
import MenuData from './MenuData'


function Menu() {
  return (
    <Main>
      <Heading><img src="/images/Home/website__logo.svg"/></Heading>
      <h4 className="smallHeading">MAIN MENU</h4>
      <List>
        {
          MenuData.map(({id, img, text})=> (
            <span id={id}>
              <img src={img} alt={text}/>
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
  width: 220px;
  height: 100vh;
  background-color: #FAFAFA;
  padding-left: 25px;
  box-sizing: border-box;

  .smallHeading {
    font-size: 11px;
    color: #686868; 
    font-weight: 500;
    margin-bottom: 10px;
  }
`
const Heading = styled.div`
  padding: 40px 0 30px 35px;

  img {
    width: 90px;
  }
`
const List = styled.div`
  
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
