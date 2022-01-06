import React from 'react'
import styled from 'styled-components'

const kitchen = ["Kitchen, Dining & Bar", "Small kitchen Appliances", "Kitchen Tools and Gadgets", "Cookware", "Bakeware", "Kitchen Storage", "Flatware", "Knives and cutlery", "Bar accessories"];
const smartHome = ["Smart door lock", "Smart plugs", "Smart TVs", "Media Steamers"];
const homeDecor = ["Blankets", "Lamps", "Pillows"];
const improvements = ["Power tools", "Ceiling fans", "Home security"];
const garden = ["Gardening Tools", "Grills", "Fire pits", "Hydroponics"];

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

function NavbarData() {
  return (
    <Container>
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
        <h4>fjwojfoiejfpwekfpewjf0ewpofkwfkhsdfihuifhsigfu</h4>
        <h4>fjwojfoiejfpwekfpewjf0ewpofkwfk</h4>
        <h4>fjwojfoiejfpwekfpewjf0ewpofkwfk</h4>
        <h4>fjwojfoiejfpwekfpewjf0ewpofkwfk</h4>
        <h4>fjwojfoiejfpwekfpewjf0ewpofkwfk</h4>
        <h4>fjwojfoiejfpwekfpewjf0ewpofkwfk</h4>
        <h4>fjwojfoiejfpwekfpewjf0ewpofkwfk</h4>
      </ScrollingBar>
    </Container>
  )
}

export default NavbarData

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
  padding: 32px 51px;
  @media screen and (min-width:1400px){
    padding: 32px 88px;
  }
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
  max-width: 300px;
  width: 100%;
  margin-left: 50px;
`
