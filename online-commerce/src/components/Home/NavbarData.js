import React from 'react'
import styled from 'styled-components'

const kitchen = ["Kitchen, Dining & Bar", "Small kitchen Appliances", "Kitchen Tools and Gadgets", "Cookware", "Bakeware", "Kitchen Storage", "Flatware", "Knives and cutlery", "Bar accessories"];
const smartHome = ["Smart door lock", "Smart plugs", "Smart TVs", "Media Steamers"];
const homeDecor = ["Blankets", "Lamps", "Pillows"];
const improvements = ["Power tools", "Ceiling fans", "Home security"];
const garden = ["Gardening Tools", "Grills", "Fire pits", "Hydroponics"];
const logodata = ["/Images/Home/logo__sharp.svg", "/Images/Home/logo__panasonic.svg", "/Images/Home/logo__huawei.svg", "/Images/Home/logo__legrand.svg", "/Images/Home/logo__huawei.svg", "/Images/Home/logo__sharp.svg"]

function ItemsData({ name, data }){
  return (
    <>
      <div className='heading'>
        <img src="/Images/Home/data__heading--icon.svg"/>
        <h4>{name}</h4>
      </div>
      <ul className='lists'>
        {data.map((element, index) => (
        <li><a href="#">{element}</a></li>
        ))}
      </ul>
    </>
  )
}
function DiscountItems({img, text, discount}){
  return (
    <div className='discountItem'>
      <img src={img}/>
      <span>
        <p>{text}<span>{discount}</span></p>
      </span>
    </div>
  )
}

function NavbarData() {
  return (
    <Container>
      <Top>
        <Items>
        <div className='block'>
          <ItemsData name="Kitchen" data={kitchen}/>
        </div>
        <div className='block'>
          <div>
            <ItemsData name="Smart Home" data={smartHome}/>
          </div>
          <div className='block__bottom'>
            <ItemsData name="Home Decor" data={homeDecor}/> 
          </div>
        </div>
        <div className='block'>
          <div>
              <ItemsData name="Improvements" data={improvements}/>
          </div>
          <div className='block__bottom'>
            <ItemsData name="Garden & Outdoor" data={garden}/> 
          </div>
        </div>
        </Items>
        <ScrollingBar>
          <Left>
            <Logo>
              {logodata.map((logo) => (
                <a href="#">
                  <img src={logo}/>
                </a>
              ))}
            </Logo>
            <Discount>
              <DiscountItems img="/Images/Home/data__right--elect.svg" text="ELECTRICAL Grill Mastergrill SUP412" discount="-30%"/>
              <DiscountItems img="/Images/Home/data__right--garden.svg" text="All products in “Home & Garden” Category" discount="20% off"/>
              <DiscountItems img="/Images/Home/data__right--elect.svg" text="ELECTRICAL Grill Mastergrill SUP412" discount="-30%"/>
              <DiscountItems img="/Images/Home/data__right--garden.svg" text="All products in “Home & Garden” Category" discount="20% off"/>
              <DiscountItems img="/Images/Home/data__right--elect.svg" text="ELECTRICAL Grill Mastergrill SUP412" discount="-30%"/>
              <DiscountItems img="/Images/Home/data__right--garden.svg" text="All products in “Home & Garden” Category" discount="20% off"/>
            </Discount>
          </Left>
          <Right></Right>
        </ScrollingBar>
      </Top>
      <AllMarkets href="#">
        <span>View all markets</span>
        <img src="/Images/Home/data__view--right.svg"/>
      </AllMarkets>
    </Container>
  )
}

export default NavbarData

const Container = styled.div`
  background-color: lightblue;
  padding: 32px 20px 32px 51px;
  @media screen and (min-width:1400px){
    padding: 32px 50px 32px 88px;
  }
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  width: 100%;
  .block {

    .heading {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      h4 {
        font-size: 16px;
        font-weight: 500;
        color: #1071FF;
      }
      img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
    }
    .lists {
      li {
        font-size: 14px;
        margin: 6px 0;
        a {
          color: #0C0C0C;
          transition: all 0.3s ease;
          &:hover {
            color: #1071FF;
          }
        }
      }
    }
    .block__bottom {
      margin-top: 22px;
    }
  }
`  
const ScrollingBar = styled.div`
  display: flex;
  max-width: 338px;
  width: 100%;
  margin-left: 50px;
  height: 280px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #F6F8FB;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #CFD2D5;
    border-radius: 3px;
  }
`
const Left = styled.div`

`
const Right = styled.div`
  width: 40px;
`
const Logo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;


  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E6EFFB;
    width: 95px;
    height: 45px;
    margin-bottom: 5px;
    border-radius: 8px;
    cursor: pointer;
    img {
      width: 70px;
      height: auto;
    }
  }
`
const Discount = styled.div`
  margin-top: 20px;
  .discountItem {
    display: flex;
    align-items: center;
    border: 2px solid #1071FF;
    border-radius: 32px;
    padding: 10px 10px;
    margin: 6px 0;
    cursor: pointer;

    img {
      margin-right: 8px;
    }
    span {
      p {
        font-weight: 500;
      }
      span {
        color: #FF7E27;
        font-weight: 500;
        margin-left: 5px;
      }
    }
  }
`
const AllMarkets = styled.a`
  display: flex;

  span {
    color: #1071FF;
    font-size: 15px;
    font-weight: 500;
  }
  img {
    margin-left: 5px;
    transform: scale(0.9);
  }
  &:hover {
    opacity: 0.7;
  }
`
