import React from 'react'
import styled from 'styled-components'
import { UpcomingData } from './AllData'

function Upcoming() {
  return (
    <Container>
      <Heading>
        <h2>Upcoming Schedule</h2>
        <select>
          <option value="today">Today, 13 Sep 2021</option>
          <option value="yesterday">Yester, 12 Sep 2021</option>
        </select>
      </Heading>
      <UpcomingInfo>
        {
          UpcomingData.map((element) => (
            <div className='overall' id={element.id}>
              <div className='text'> 
                <h3>{element.text}</h3>
                <span>{element.time}</span>
              </div>
              <div className='img'>
                <img src={element.img} />
                <img src="/images/Home/dotdot.svg"/>
              </div>
            </div>
          ))
        }
      </UpcomingInfo>
      <Create>
        <a>Creat a New Schedule</a>
      </Create>
    </Container>
  )
}

export default Upcoming

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  margin-top: 20px;
  padding: 15px 20px;
  @media screen and (max-width:1024px){
    margin-top: 0px;
  }

`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-weight: 600;
    font-size: 17px;
    margin: 0;
  }
  select {
    border: none;
    outline: none;
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    padding: 5px 5px;
    color: #686868;
    font-size: 11px;
    font-weight: 400;
    cursor: pointer;

    option {
      font-size: 11px;
      background-color: #FAFAFA;
      color: #161E54;
    }
  }

`
const UpcomingInfo = styled.div`
  height: 327px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1024px){
    height: 200px;
  }
  .overall {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #E0E0E0;
    background-color: #FAFAFA;
    padding: 10px 15px;
    margin: 6px 0;
    border-radius: 6px;

    .text {
      h3 {
        font-size: 16px;
        font-weight: 500;
        color: #303030;
      }
      span {
        color: #686868;
        font-size: 11px;
      }
    }
    .img {
      display: flex;
      align-items: center;
      cursor: pointer;

      img:first-child {
        margin-right: 15px;
      }
    }
  }
  &::before {
      content: "Priority";
      font-size: 13px;
      color: #686868;
  }
  
`
const Create = styled.div`
  border-top: 1px solid #E0E0E0;
  margin: 0px -20px -7px -20px;
  text-align: center;
  padding: 8px 0 3px 0;
  color: #FF5151;
  font-size: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #D00000;
  }
`