import React from 'react'
import styled from 'styled-components'

function SelectCompoments({}){

}

function Dashboard() {
  return (
    <Container>
      <SelectionLists>
        <div className='selection country'>
          <h3>Country: </h3>
          <select>
            <option value="SE">Sweden</option>
            <option value="AU">Australia</option>
            <option value="BR">Brazil</option>
            <option value="CA">Canada</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="IT">Italy</option>
            <option value="KW">Kuwait</option>
            <option value="SA">Arabia</option>
            <option value="CH">Swit</option>
            <option value="AE">UAE</option>
            <option value="GB">UK</option>
            <option value="US">US</option>
          </select>
        </div>
        <div className='selection language'>
          <h3>Language: </h3>
          <select>
            <option value="Eng">Eng</option>
            <option value="Rus">Rus</option>
            <option value="Arb">Arb</option>
          </select>
        </div>

        <div className='selection currency'>
          <h3>Currency: </h3>
          <select>
            <option value="USD">&#36;</option>
            <option value="EURO">&#8364;</option>
            <option value="POUND">&#163;</option>
          </select>
        </div>
      </SelectionLists>
      <Contact>

      </Contact>
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F6F8FB;
  padding: 8px 51px;

  @media screen and (min-width:1400px){
    padding: 0 88px;
  }
`
const SelectionLists = styled.div`
  display: flex;
  align-items: center;

  .selection {
    display: flex;
    color: #0C0C0C;
    
    h3 {
      font-size: 14px;
      font-weight: 400;
    }
    select {
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 14px;
      color: #0C0C0C;
      option {
        font-size: 14px;
      }
    }
  }
  .language {
    margin: 0 16px;
    select {
      padding-right: 3px;
    }
  }
  .currency {
    select {
      padding-right: 5px;
    }
  }
`
const Contact = styled.div`

`
