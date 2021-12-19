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
        <div>
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
  max-width: 1126px;
  width: 100%;
  padding-bottom: 50px;
  .dashboard {
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;

    .right {
      width: 400px;
      padding-left: 20px;
    }
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
`
