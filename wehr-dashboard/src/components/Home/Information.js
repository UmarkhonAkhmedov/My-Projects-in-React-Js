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

      </Total>
    </Container>
  )
}

export default Information

const Container = styled.div`
  max-width: 640px;
  width: 100%;
  box-sizing: border-box;
`
const InfoMain = styled.div`
  display: flex;

  .Common {
    width: 190px;
    background-color: #FFEFE7;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    color: #161E54;

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

`
