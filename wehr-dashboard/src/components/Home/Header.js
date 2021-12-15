import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Navbar>
      <Search>
        <input type="search"/>
        <img src="/images/Home/navbar__search.svg"/>
      </Search>
      <MainInfo>
        <img src="/images/Home/navbar__bell.svg"/>
        <img src="/images/Home/navbar__text.svg"/>
        <span>
          <img src=""/>
          <select name="A" id="cars">
            <option value="volvo">Umarkhon</option>
            <option value="saab">Information</option>
            <option value="mercedes">Settings</option>
            <option value="audi">Quit</option>
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
  max-width: 1146px;
  width: 100%;
`
const Search = styled.div`

`
const MainInfo = styled.div`

`
