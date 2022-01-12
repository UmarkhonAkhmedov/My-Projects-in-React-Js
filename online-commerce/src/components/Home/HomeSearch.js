import React, {useState} from 'react'
import styled from 'styled-components'
import QuickOrder from '../QuickOrder/QuickOrder'

function HomeSearch() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Logo href="#"><img src="/Images/Home/nav__logo.svg"/></Logo>
      <Searching>
        <img src="/Images/Home/nav__search.svg"/>
        <input type="search" placeholder='Search by product or SKU'/>
      </Searching>
      <OrderForm  onClick={()=>setIsOpen(true)}>Quick Order Form</OrderForm>
      <QuickOrder isOpen={isOpen} setIsOpen={setIsOpen}/>
    </Container>
  )
}

export default HomeSearch

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 51px;
  background-color: white;
  z-index: 10;
  @media screen and (min-width:1400px){
    padding: 20px 88px;
  }
`
const Logo = styled.a`

`
const Searching = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #EAECEE;
  border-radius: 8px;
  padding: 6px 16px;
  width: 40%;
  font-size: 14px;

  input {
    margin-left: 10px;
    border: none;
    outline: none;
    height: 24px;
    width: 100%;
    &::placeholder {
      color: #737B7D;
      font-size: 14px;
    }
  }
`
const OrderForm = styled.button`
  display: block;
  background-color: #1071FF;
  padding: 12px 24px;
  border: none;
  color: white;
  font-weight: 500;
  border-radius: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
