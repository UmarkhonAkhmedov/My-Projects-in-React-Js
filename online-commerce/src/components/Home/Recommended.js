import { useState } from "react";
import styled from "styled-components"
import ProductItem from "../Product";

const RecommendedData = [
  {
    id: 1,
    img: "/Images/Home/rec__main--first.png",
    discount: 30,
    subtitle: "Omnires",
    tick: "/Images/Home/rec__icon--tick__green.svg",
    stock: "In stock",
    number: "2123532",
    title: "Connection with a handle Omnires round",
    width: 34,
    height: 45,
    depth: 45,
    price: "45.00",
    priceDiscount: "55.00",
  },
  {
    id: 2,
    img: "/Images/Home/rec__main--second.png",
    discount: 15,
    subtitle: "GoodHome",
    stock: "Out of stock",
    number: "129565",
    tick: "/Images/Home/rec__icon--tick__red.svg",
    title: "Countertop washbasin GoodHome Tekapo",
    width: 32,
    height: 21,
    depth: 75,
    price: "51.00",
    priceDiscount: "64.00",
  },
  {
    id: 3,
    img: "/Images/Home/rec__main--third.png",
    discount: 45,
    subtitle: "GoodHome",
    stock: "In stock",
    number: "833565",
    tick: "/Images/Home/rec__icon--tick__green.svg",
    title: "Perforated Simpson tape 25 x 2500 x 2 mm",
    width: 45,
    height: 12,
    depth: 35,
    price: "79.00",
    priceDiscount: "70.00",
  },
  {
    id: 4,
    img: "/Images/Home/rec__main--fourth.png",
    discount: 18,
    subtitle: "GoodHome",
    stock: "Out of stock",
    number: "634465",
    tick: "/Images/Home/rec__icon--tick__red.svg",
    title: "AMBER DECOR Bulb 60W, E27 590",
    width: 45,
    height: 12,
    depth: 35,
    price: "38.00",
    priceDiscount: "30.00",
  }
]

function RecommendedElements(){
  return (
    <Container>
      <Main>
        {RecommendedData.map((element) => (
        <ProductItem 
        discount={element.discount} img={element.img} stock={element.stock} title={element.title} subtitle={element.subtitle} width={element.width} height={element.height} price={element.price} priceDiscount={element.priceDiscount} tick={element.tick}
        />
        ))}
    </Main>
    </Container>
  )
}

export default RecommendedElements
const Container = styled.div`
  padding: 0px 51px;
  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }
`
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px 0;
`
