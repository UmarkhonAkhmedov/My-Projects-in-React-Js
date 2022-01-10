import styled from "styled-components"

const HintsData = [
  {
    id: 1,
    img: "first",
    title: "How much does it cost to finish an apartment?",
    text: 'Are you standing on the threshold of your own "M", to which you have just picked up the keys, and with the eye picked up you have'
  },
  {
    id: 2,
    img: "second",
    title: "Demolition of the load-bearing wall",
    text: 'Are you planning a home renovation or renovation? Your vision is limited by the load-bearing wall, which you are renovation or renovation'
  },
  {
    id: 3,
    img: "third",
    title: "What color to paint a hall in a block of flats? ",
    text: 'Matching the right paint is a real challenge. If you are wondering what color to paint your hall with, you can believe that paint is a real challenge'
  },
  {
    id: 4,
    img: "fourth",
    title: "How does a concrete pump work?",
    text: 'A concrete pump is currently one of the most common equipment used on construction sites. Its operation most common equipment'
  }
]

function Hints() {
  return (
    <Container>
      {
        HintsData.map((element) => (
          <Hint id={element.id}>
            <img className="main__img" src={`/Images/Home/recCat__main--${element.img}.png`}/>
            <h3>{element.title}</h3>
            <p>{element.text}</p>
            <span>
              <a href="#">Read more</a>
              <img src="/Images/Home/hints__icon-arrow.svg"/>
            </span>
          </Hint>
        ))
      }
    </Container>
  )
}

export default Hints

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  padding: 0px 51px;
  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }
`
const Hint = styled.div`
  max-width: 290px !important;
  width: 100%;
  
  .main__img {
    max-width: 290px !important;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  h3 {
    font-size: 20px;
    color: #0C0C0C;
    margin: 16px 0;
  }
  p {
    font-size: 15px;
    color: #0C0C0C;
    margin-bottom: 16px;
    overflow: hidden;
    width: 290px; 
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; 
  }
  span {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.7;
      }
    a {
      color: #1071FF;
      font-size: 16px;
      font-weight: 500;
      margin-right: 5px;
    }
    img {
      transform: scale(0.9);
      margin-top: 3px;
    }
  }
`
