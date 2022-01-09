import styled from "styled-components"

const RecommendedData = [
  {
    id: 1,
    img: "/Images/Home/rec__main--first.png",
    discount: 30,
    subtitle: "Omnires",
    stock: "In stock",
    number: "2123532",
    title: "Connection with a handle Omnires round",
    width: 34,
    heihgt: 45,
    depth: 45,
    price: 45.00,
    priceDiscount: 55.00,
  },
  {
    id: 2,
    img: "/Images/Home/rec__main--second.png",
    discount: 15,
    subtitle: "GoodHome",
    stock: "Out of stock",
    number: "129565",
    title: "Countertop washbasin GoodHome Tekapo",
    width: 32,
    heihgt: 21,
    depth: 75,
    price: 51.00,
    priceDiscount: 64.00,
  },
  {
    id: 3,
    img: "/Images/Home/rec__main--third.png",
    discount: 45,
    subtitle: "GoodHome",
    stock: "In stock",
    number: "833565",
    title: "Perforated Simpson tape 25 x 2500 x 2 mm",
    width: 45,
    heihgt: 12,
    depth: 35,
    price: 79.00,
    priceDiscount: 70.00,
  },
  {
    id: 4,
    img: "/Images/Home/rec__main--fourth.png",
    discount: 18,
    subtitle: "GoodHome",
    stock: "Out of stock",
    number: "634465",
    title: "AMBER DECOR Bulb 60W, E27 590",
    width: 45,
    height: 12,
    depth: 35,
    price: 38.00,
    priceDiscount: 30.00,
  }
]

function RecommendedElements(){
  return (
    <Main>
      {RecommendedData.map((element) => (
        <Element className="element" id={element.id}>
          <ElementTop className="main__img">
            <img src={element.img}/>

              <h4>-{element.discount}%</h4>
              <span className="star"><img src="/Images/Home/rec__icon--star.svg"/></span>

              <span className="stock">
                <img src="/Images/Home/rec__icon--tick__green.svg"/>
                <p>{element.stock}</p>
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
              Your price ${element.price} net <span><strike>${element.priceDiscount} net</strike></span>
            </div>
            <div className="amount__item">
              <span>1</span>
              <select>
                <option>Item</option>
                <option>Unit</option>
                <option>Third</option>
              </select>
            </div>
            <button className="add__button">Add to cart</button>
            <div className="Added__cart">
              <img src="/Images/Home/rec__icon--tick__blue.svg"/>
              <p>Added to cart</p>
            </div>
          </ElementBottom>
        </Element>
      ))}
    </Main>
  )
}

export default RecommendedElements

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;
`
const Element = styled.div`
  max-width: 300px;
  width: 100%;
`
const ElementTop = styled.div`
  position: relative;

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
  border: 1px solid #F6F8FB;
  margin-top: -5px;
  padding-top: 25px;
  .title {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
  }
`

