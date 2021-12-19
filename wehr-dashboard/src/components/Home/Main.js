import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement'
import Header from './Header'
import Information from './Information'
import RecentActivity from './RecentActivity'
import Upcoming from './Upcoming'


function Main() {
  return (
    <Container>
      <Header/>
      <BreakLine/>
      <Heading>Dashboard</Heading>
      <div className='dashboard'>
        <div className='left'>
          <Information/>
          <Announcement/>
        </div>
        <div className='right'>
          <RecentActivity/>
          <Upcoming/>
        </div>
      </div>
    
    </Container>
  )
}

export default Main

const Container = styled.div`
  position: relative;
  margin-left: 220px;
  top: 0;
  right: 0;
  width: 100%;
  padding-bottom: 50px;
  @media screen and (max-width: 1024px){
    left: -120px;
  }
  @media screen and (max-width: 500px){
    left: -150px;
    margin-left: 200px;
  }
  @media screen and (max-width: 400px){
    left: -140px;
    margin-left: 150px;
    width: 320px;
  }

  
  .dashboard {
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    @media screen and (max-width:700px){
      padding-left: 20px;
      padding-right: 0px;
    }
    @media screen and (max-width:500px){
      padding-left: 10px;
      padding-right: 10px;
    }
    @media screen and (max-width: 500px){
      .left {
        margin-right: 10px;
      }
    }

    .right {
      width: 400px;
      padding-left: 20px;
    }
    @media screen and (max-width: 1024px){
      flex-direction: column;
      .right {
        display: flex;
        align-items: stretch;
        width: 100%;
        padding-top: 25px;
        padding-left: 0;
    }
    };
    @media screen and (max-width: 500px){
      flex-direction: column;
      .right {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        max-width: 500px;
        width: 100%;
        
        padding-top: 25px;
        padding-left: 0;
    }
    };
  }
`
const BreakLine = styled.div`
  display: block;
  height: 1px;
  background-color: #F1F1F1;
  transform: translateX(40px);
  overflow-x: hidden;
`
const Heading = styled.h2`
  font-size: 22px;
  font-weight: 500;
  color: #161E54;
  padding: 15px 0 10px 40px;
  @media screen and (max-width:700px){
    padding: 15px 0 10px 20px;
  }
`
