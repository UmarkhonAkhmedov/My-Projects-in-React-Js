import { style } from '@mui/system'
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
            <div id={element.id}>
              <div> 
                <h3>{element.text}</h3>
                <span>{element.time}</span>
              </div>
              <div>
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

`
const AnnounceInfo = styled.div`

`
const SeeAll = styled.div`

`

