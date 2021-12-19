import React from 'react'
import styled from 'styled-components'
import { AnnouncementData } from './AllData'

function Announcement() {
  return (
    <Container>
      <Heading>
        <h2>Announcement</h2>
        <select>
          <option value="today">Today, 13 Sep 2021</option>
          <option value="yesterday">Yester, 12 Sep 2021</option>
        </select>
      </Heading>
      <AnnounceInfo>
        {
          AnnouncementData.map((element) => (
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
      </AnnounceInfo>
      <SeeAll>
        <a>See All Announcement</a>
      </SeeAll>
    </Container>
  )
}

export default Announcement

const Container = styled.div`
  max-width: 640px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  margin-top: 20px;
  padding: 15px 20px;

  @media screen and (max-width: 1024px){
    max-width: 900px;
  }
  @media screen and (max-width: 400px){
    max-width: 500px;
    width: 100%;
    
  }
`
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  }
  select {
    border: none;
    outline: none;
    border: 1px solid #EFEFEF;
    border-radius: 4px;
    padding: 5px 5px;
    color: #686868;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;

    option {
      font-size: 12px;
      background-color: #FAFAFA;
      color: #161E54;
    }
  }

`
const AnnounceInfo = styled.div`
  height: 250px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
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
`
const SeeAll = styled.div`
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

