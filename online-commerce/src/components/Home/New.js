import styled from "styled-components"

function Item ({heading, img}){
  return (
    <a href="#" className="Item">
      <h3>{heading}</h3>
      <img src={`/Images/Home/new__main--${img}.png`}/>
    </a>
  )
}

function New() {
  return (
    <Container>
      <Items>
        <Item heading="New tool kits!" img="first"/>
        <Item heading="New rules for wind farms!" img="second"/>
        <Item heading="New iPhone now available!" img="third"/>
      </Items>
    </Container>
  )
}

export default New

const Container = styled.div`
  padding: 0px 51px;
  margin: 40px 0;
  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }
`

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  @media screen and (max-width:768px){
    justify-content: center;
    flex-wrap: wrap;
  }

  .Item {
    display: flex;
    align-items: center;
    background-color: #FF7E27;
    max-width: 390px;
    width: 100%;
    border-radius: 8px;
    @media screen and (max-width:768px){
      max-width: 250px;
      margin-bottom: 10px;
    }
    h3 {
      width: 50%;
      text-align: center;
      color: white;
      font-size: 19px;
      @media screen and (max-width:1024px){
        font-size: 14px;
      }
    }
    img {
        width: 50%;
      }
  }
`

