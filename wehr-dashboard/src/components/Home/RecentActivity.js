import React from 'react'
import styled from 'styled-components'


function RecentActivity() {
  return (
    <Container>
      <h3>Recently Activity</h3>
      <h5>10.40 AM, Fri 10 Sept 2021</h5>
      <h3>You Posted a New Job</h3>
      <p>Kindly check the requirements and terms of work and make sure everything is right.</p>
      <div className='button'>
        <h4>Today you makes 12 Activity</h4>
        <a href="#">See All Activity</a>
      </div>
    </Container>
  )
}

export default RecentActivity

const Container = styled.div`
  background-color: #1B204A;
  color: white;
  border-radius: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px){
    margin-right: 20px;
  }

  h3 {
    font-size: 17px;
    margin: 0 0 6px 0;
    font-weight: 500;
  }
  h5 {
    font-size: 10px;
    font-weight: 500;
    color: #A0A3B4;
    margin: 25px 0 6px 0;
  }
  p {
    font-size: 13px;
    font-weight: 400;
  }
  .button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;

    @media screen and (max-width: 1024px){
      flex-direction: column;
      align-items: flex-start;
      margin-top: 50px;
      a {
        margin-top: 30px;
      }
    }
    h4 {
      font-size: 14px;
      font-weight: 400;
    }
    a {
      background-color: #FF5151;
      text-decoration: none;
      color: white;
      font-weight: 500;
      font-size: 14px;
      padding: 10px 15px; 
      border-radius: 4px;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background-color: #FF2D2D;
      }
    }
  }
`
