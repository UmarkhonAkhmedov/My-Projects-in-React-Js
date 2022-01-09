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
        <div id={element.id}>
          <div>
            <img src={element.img}/>
            <div>
              <h4>-{element.discount}%</h4>
              <img src="/Images/Home/rec__icon--star.svg"/>
              <div>
                <span>
                  <img src="/Images/Home/rec__icon--tick__green.svg"/>
                  <p>{element.stock}</p>
                </span>
                <span>
                  <img src="/Images/Home/rec__icon--window.svg"/>
                  <img src="/Images/Home/rec__icon--share.svg"/>
                </span>
              </div>
            </div>
          </div>
          <p>{element.subtitle} | Part No. {element.number}</p>
          <h3>{element.title}</h3>
          <div>
            <p>Basin width : {element.width} cm</p>
            <p>Basin height: {element.height} cm</p>
            <p>Basin depth: {element.depth} cm</p>
          </div>
          <div>
            Your price ${element.price} net <span><strike>${element.priceDiscount} net</strike></span>
          </div>
          <div>
            <span>1</span>
            <select>
              <option>Item</option>
              <option>Unit</option>
              <option>Third</option>
            </select>
          </div>
          <button>Add to cart</button>
          <div>
            <img src="/Images/Home/rec__icon--tick__blue.svg"/>
            <p>Added to cart</p>
          </div>
        </div>
      ))}
    </Main>
  )
}

export default RecommendedElements

const Main = styled.div`

`


