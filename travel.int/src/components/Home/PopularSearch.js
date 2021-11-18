import React from 'react'
import styled from 'styled-components'


function PopularSearch() {
  const searches = ['Eiffel tower', 'Bali', 'Eiffel tower', 'Egypt', 'Turkey', 'The Grand Canyon', 'Cappadocia', 'UAE', 'The Grand Canyon', 'London', 'USA', 'Temple Japan'];

  return (
    <Container className="container">
      <Header>Popular Search</Header>
      <List>
        {searches.map((search) => (
          <li><a href="#">{search}</a></li>
        ))}

      </List>
    </Container>
  )
}

export default PopularSearch

const Container = styled.div`
  padding: 0 140px;
  margin: 150px 0 20px 0;

  @media screen and (max-width: 768px){
    padding: 0 40px;
    margin: 350px 0 20px 0;
  }
  @media screen and (max-width: 500px){
    padding: 0 30px;
    margin: 300px 0 20px 0;
  }
`
const Header = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  background: url('/images/Home/popular__background--blue.svg'), 
  url('/images/Home/popular__background--green.svg'), 
  url('/images/Home/popular__background--red.svg');
  background-repeat: no-repeat;
  background-position: left calc(50% + 125px) top 0, left calc(50% + 135px) top 30px, left calc(50% + 140px) top 15px;

  @media screen and (max-width: 650px){
    font-size: 28px;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;

  li {
    border: 2px solid #AEAEAE;
    padding: 7px 20px;
    border-radius: 15px;
    margin: 10px;
    transition: all 0.3s ease;

    a {
      font-size: 21px;
      color: #AEAEAE;
    }

    &:hover {
      background-color: #AEAEAE;

      a {
        color: white;
      }
    }
  }
  @media screen and (max-width: 650px){
    margin-top: 20px;
    li {
      margin: 5px;
      padding: 5px 15px;
      a {
        font-size: 18px;
      }
    }
  }
`
