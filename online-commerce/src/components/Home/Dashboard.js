import React from 'react'
import styled from 'styled-components'


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
      <ContactDetails>
        <div className='contact mobile'>
          <img src="/Images/Home/nav__icon--mobile.svg"/>
          <h3>+32 (0) 15 28 76 67</h3>
        </div>
        <div className='contact message'>
          <img src="/Images/Home/nav__icon--message.svg"/>
          <h3>Messages</h3>
          <span>
            12
          </span>
        </div>
        <div className='contact username'>
          <img src="https://avatars.githubusercontent.com/u/76143018?v=4"/>
          <h3>Umarkhon</h3>
          <span>
            <h4><a>Information</a></h4>
            <h4><a>My History</a></h4>
            <h4><a>Profile</a></h4>
            <h4><a href="/login">Sign Out</a></h4>
          </span>
        </div>
      </ContactDetails>
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
  z-index: 10;
  @media screen and (min-width:1400px){
    padding: 12px 88px;
  }
`
const SelectionLists = styled.div`
  display: flex;
  align-items: center;

  .selection {
    display: flex;
    color: #0C0C0C;
    &:hover {
      select {
        color: #1071FF;
      }
    }
    
    h3 {
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
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
const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
  .contact {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .mobile {
    img {

    }
    h3 {
      color: #1071FF; 
      margin-left: 8px;
      font-size: 14px;
      padding-right: 16px;
      &:hover {
        color: #005BDF;
      }
    }
  }
  .message {
    position: relative;
    border-left: 1px solid #434447;
    border-right: 1px solid #434447;
    padding: 5px 16px;

    h3 {
      margin-left: 12px;
      transition: all 0.3s ease;
      color: #0C0C0C;
      font-weight: 500;
      &:hover {
        color: #1071FF;
      }
    }
    span {
      position: absolute;
      top: -2px;
      left: 28px;
      background-color: #FF4E00;
      color: white;
      font-size: 10px;
      padding: 2px 3px;
      border-radius: 50%;
    }
  }
  .username {
    position: relative;
    padding-left: 16px;
    transition: all 0.3s ease;
    padding: 10px 0 0 16px 10px;
    &:hover {
      span {
        display: flex;
        z-index: 100;
      }
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    h3 {
      margin-left: 8px;
      color: #0C0C0C;
      &:hover {
        color: #1071FF;
      }
    }
    span {
      position: absolute;
      display: none;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      top: 30px;
      left: 15px;
      width: 150px;
      height: 200px;
      background-color: white;
      font-weight: 500;
      color: #1071FF;
      background-color: #F6F8FB;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
      h4 {
        padding: 10px 0;
        transition: all 0.3s ease;
        &:hover {
        color: #0C0C0C;
        }
        a {
          color: #1071FF;
        }
      }
    }
  }
`
