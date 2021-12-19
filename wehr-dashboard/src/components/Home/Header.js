import React from 'react'
import styled from 'styled-components'


function Header() {

  return (
    <Navbar>
      <Search>
        <input type="text" placeholder='Search'/>
        <img src="/images/Home/navbar__search.svg"/>
      </Search>
      <MainInfo>
        <img className='icons' src="/images/Home/navbar__bell.svg"/>
        <img className='icons' src="/images/Home/navbar__text.svg"/>
        <span className='nameInfo'>
          <img src="https://avatars.githubusercontent.com/u/76143018?v=4"/>
          <select name="Overview" id="overview">
            <option value="/name">Umarkhon</option>
            <option value="/info">Information</option>
            <option value="/settings">Settings</option>
            <option value="/signup">Sign Up</option>
          </select>
        </span>
      </MainInfo>
    </Navbar>
  )
}

export default Header

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
`
const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    height: 35px;
    width: 280px;
    background-color: #FAFAFA;
    border: none;
    outline: none;
    border: 1px solid #DEDEDE;
    padding-left: 15px;
    border-radius: 4px;

    &::placeholder {
      color: #B2B2B2;
      font-size: 14px;
    }
  }
  img {
    transform: scale(0.9);
    position: absolute;
    top: 5px;
    right: 8px;
  }
`
const MainInfo = styled.div`
  display: flex;
  align-items: center;
  
  
  .icons {
    width: 23px;
    height: 23px;
    margin: 0 10px;
  }
  .nameInfo {
    display: flex;
    align-items: center;
    margin-left: 15px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
    select {
      border: none;
      outline: none;
      font-size: 16px;
      font-weight: 600;
      color: #161E54;
      option {
        font-size: 16px;
        background-color: #FAFAFA;
        color: #161E54;
      }
    }
  }
`
