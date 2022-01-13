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
  @media screen and (max-width: 500px){
    padding: 20px 30px;
  }
`
const Logo = styled.a`
  @media screen and (max-width: 900px){
    img {
      max-width: 300px;
    }
  }
  @media screen and (max-width:500px){
    img {
      max-width: 170px;
    }
  }
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
  @media screen and (max-width:768px){
    order: 3;
    width: 80%;
    margin: 20px auto 0 auto;

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
  @media screen and (max-width:500px){
    padding: 6px 12px;
    font-size: 12px;
  }
`
