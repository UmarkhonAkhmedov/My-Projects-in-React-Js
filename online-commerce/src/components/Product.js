import { useState } from "react"
import styled from "styled-components"

export default function ProductItem(element){
  const [clicking, setClick] = useState(true)

  return (
    <Element className="element" id={element.id}>
    <ElementTop className="main__img" >
      <img src={element.img}/>

        <h4>-{element.discount}%</h4>
        <span className="star"><img src="/Images/Home/rec__icon--star.svg"/></span>

        <span className="stock">
          <img src="/Images/Home/rec__icon--tick__green.svg"/>
          <p style={element.stock === "Out of stock" ? {color: "red"} : {color: "green"}}>{element.stock}</p>
        </span>
        <span className="share__icons">
          <img src="/Images/Home/rec__icon--window.svg"/>
          <img src="/Images/Home/rec__icon--share.svg"/>
        </span>
    </ElementTop>
    <ElementBottom>
      <p className="subtitle">{element.subtitle} | Part No. {element.number}</p>
      <h3 className="title">{element.title}</h3>
      <div className="element__info">
        <p>Basin width : {element.width} cm</p>
        <p>Basin height: {element.height} cm</p>
        <p>Basin depth: {element.depth} cm</p>
      </div>
      <div className="price">
        Your price <span className="blue">${element.price}</span> net <span className="orange"><strike>${element.priceDiscount} net</strike></span>
      </div>
      <div className="amount__item">
        <input type="number" placeholder="1"/>
        <select>
          <option>Item</option>
          <option>Unit</option>
          <option>Third</option>
        </select>
      </div>
      <Button clicking={clicking} onClick={() => setClick(false)} className="add__button" >{!clicking ?"Update card": "Add to cart"}</Button>
      {!clicking && (
      <div onClick={() => setClick(true)} className="added__cart">
        <img src="/Images/Home/rec__icon--tick__blue.svg"/>
        <p>Added to cart</p>
      </div>
      )}
    </ElementBottom>
  </Element>
  )
}

const Element = styled.div`
  max-width: 301px;
  width: 100%;
`
const ElementTop = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  h4 {
    position: absolute;
    top: 16px;
    left: 0px;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background-color: #FF7E27;
  }
  .star {
    position: absolute;
    top: 6px;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3px;
    width: 30px;
    height: 30px;
    background-color: #E6EFFB;
    border-radius: 50%;

  }
  .stock {
    position: absolute;
    left: 8px;
    bottom: 10px;
    display: flex;
    align-items: center;
    color: #00893A;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #F6F8FB;
    padding: 6px 8px;
    border-radius: 4px;
    img {
      margin-right: 4px;
    }
  }
  .share__icons {
    position: absolute;
    right: 6px;
    bottom: 13px;
    display: flex;
    align-items: center;
    img:first-child{
      margin-right: 10px;
    }
  }
  
`
const ElementBottom = styled.div`
  width: 100%;  
  border: 1px solid #F6F8FB;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: -5px;
  padding: 14px 8px 0px 8px;
  .subtitle {
    color: #737B7D;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .title {
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    color: #0C0C0C;
    line-height: 24px;
    margin-bottom: 12px;
  }
  .element__info {
    color: #0C0C0C;
    margin-bottom: 12px;
    p {
      margin-bottom: 4px;
    }
  }
  .price {
    color: #1071FF;
    font-weight: 700;

    .blue {
      font-size: 24px;
    }
    .orange {
      color: #FF7E27;
      font-size: 16px;
      font-weight: 500;
      margin-left: 4px;
    }
  }
  .amount__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    input {
      border: none;
      outline: none;
      border: 1px solid #EAECEE;
      border-radius: 8px;
      max-width: 100px;
      width: 100%;
      height: 40px;
      text-align: center;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &::placeholder {
        color: #0C0C0C;
      }
    }
    select {
      max-width: 170px;
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      border: 1px solid #EAECEE;
      border-radius: 8px;
      padding: 0 16px;
      background: url("/Images/Home/rec__select--arrow.svg") no-repeat right transparent;
      background-position: right calc(10% + 3px) top 13px;
      background-size: 13px 10px;
      -webkit-appearance: none;
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .added__cart {
    display: ${(props) => props.clicking ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    background-color: #E6EFFB;
    margin: -5px -8px 0 -8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #1071FF;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 0;
    img {
      margin-right: 8px;
    }
  }
`
const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 30px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  background-color: ${(props) => props.clicking ? "#1071FF" : "transparent"};
  color:  ${(props) => props.clicking ? "white" : "#1071FF"};
  margin-bottom: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid #1071FF;
  &:hover {
    opacity: 0.8;
  }
`

