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
      <div>
        <img src="/Images/Home/data__heading--icon.svg"/>
        <h4>{name}</h4>
      </div>
      <ul>
        {data.map((element, index) => (
        <li>{element}</li>
        ))}
      </ul>
    </>
  )
}

function NavbarData() {
  return (
    <Container>
      <Items>
        <div>
          <ItemsData name="Kitchen" data={kitchen}/>
        </div>
        <div>
          <div>
            <ItemsData name="Smart Home" data={smartHome}/>
          </div>
          <div>
            <ItemsData name="Home Decor" data={homeDecor}/> 
          </div>
        </div>
        <div>
          <div>
              <ItemsData name="Improvements" data={improvements}/>
          </div>
          <div>
            <ItemsData name="Garden & Outdoor" data={garden}/> 
          </div>
        </div>
      </Items>
      <ScrollingBar>
      </ScrollingBar>
    </Container>
  )
}

export default NavbarData

const Container = styled.div`
  background-color: lightblue;
  padding: 32px 51px;
  @media screen and (min-width:1400px){
    padding: 32px 88px;
  }
`

const Items = styled.div`

`  
const ScrollingBar = styled.div`

`
