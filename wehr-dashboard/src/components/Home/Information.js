import React from 'react'
import styled from 'styled-components'

function Information() {
  return (
    <Container>
      <InfoMain>
        <div className='Common Position'>
          <h4>Available Position</h4>
          <h2>24</h2>
          <h5>4 Urgently needed</h5>
        </div>
        <div className='Common Job'>
          <h4>Job Open</h4>
          <h2>10</h2>
          <h5>4 Active hiring</h5>
        </div>
        <div className='Common Employees'>
          <h4>New Employees</h4>
          <h2>24</h2>
          <h5>4 Department</h5>
        </div>
      </InfoMain>
      <Total>
        <div className='total worker'>
          <h4>Total Employees</h4>
          <h2>216</h2>
          <div className='bottom'>
            <span className='gender'>
              <h5>120 Men</h5>
              <h5>96 Women</h5>
            </span>
            <span className='month'>
              +2% Past month
            </span>
          </div>
          <div className='increase'>
            <img src="/images/Home/lineWithWater.svg.png"/>
          </div>
        </div>
        <div className='total request'>
        <h4>Talent Request</h4>
          <h2>16</h2>
          <div className='bottom'>
            <span className='gender'>
              <h5>6 Men</h5>
              <h5>10 Women</h5>
            </span>
            <span className='month'>
              +5% Past month
            </span>
          </div>
          <div className='increase'>
            <img src="/images/Home/lineWithWater.svg.png"/>
          </div>
        </div>
      </Total>
    </Container>
  )
}

export default Information

const Container = styled.div`
  max-width: 640px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 1024px){
    max-width: 900px;
  }
`
const InfoMain = styled.div`
  display: flex;
  
  @media screen and (max-width: 1024px){
    justify-content: space-between;
  }
  @media screen and (max-width: 500px){
    flex-direction: column;
  }

  .Common {
    width: 190px;
    background-color: #FFEFE7;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    color: #161E54;
    @media screen and (max-width: 500px){
      width: 100%;
      margin: 10px 0;
    }

    h4 {
      margin: 0 0 5px 0;
      font-size: 17px;
      font-weight: 500;
    }
    h2 {
      margin: 0 0 5px 0;
      font-weight: 500;
      font-size: 32px;
    }
    h5 {
      margin: 0;
      font-weight: 400;
      font-size: 15px;
      color: #FF5151;
    }
  }
  .Job {
    background-color: #E8F0FB;
    margin: 0 12px;
    @media screen and (max-width: 500px){
      margin: 0px;
    }
    h5 {
      color: #3786F1;
    }
  }
  .Employees {
    h5 {
      color: #EE61CF;
    }
  }

`
const Total = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 500px){
    flex-direction: column;
    .request {
      margin-top: 20px;
    }
  }


  .total {
    position: relative;
    width: 310px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    color: #161E54;
    border: 1px solid #E0E0E0;
    @media screen and (max-width: 500px){
      width: 100%;
    }

    h4 {
      font-size: 17px;
      margin: 0 0 0 0;
      font-weight: 600;
    }
    h2 {
      font-size: 44px;
      font-weight: 500;
    }
    .bottom {
      display: flex;
      justify-content: space-between;

      .gender {
        color: #686868;
        h5 {
          font-weight: 400;
          font-size: 12px;
        }
      }
      .month {
        display: inline-block;
        height: 20px;
        border-radius: 4px;
        padding: 3px 8px;
        background-color: #FFEFE7;
        margin: 0;
        color: #303030;
        font-size: 13px;

      }
    }
    .increase {
      position: absolute;
      top: 25px;
      right: 20px;
      
      img {
        width: 100px;
        height: 50px;
      }
    }
  }
  .worker {
    margin-right: 18px;
  }
`
