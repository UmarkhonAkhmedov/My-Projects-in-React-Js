import styled from "styled-components"

const CategoryData = [
  {
    id: 1,
    img: "first",
    heading: "Photovoltaics"
  },
  {
    id: 2,
    img: "second",
    heading: "Electronics"
  },
  {
    id: 3,
    img: "third",
    heading: "Light Sources"
  },
  {
    id: 4,
    img: "fourth",
    heading: "Ventilation and Heating"
  },
]

function Category() {
  return (
    <Container>
      {CategoryData.map((element) => (
        <a href="">
          <img src={`/Images/Home/category__main--${element.img}.png`}/>
          <span>{element.heading}</span>
        </a>
      ))}
    </Container>
  )
}

export default Category

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 10px;
  padding: 0px 51px;
  margin: 0px 0 50px 0;
  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }
  @media screen and (max-width:1290px){
    justify-content: space-around;
  }
  @media screen and (max-width: 500px){
    padding: 0 30px;
  }

  a {
    max-width: 290px;
    width: 100%;
    @media screen and (max-width:1290px){
      margin-bottom: 20px;
    }
    @media screen and (max-width:700px){
      max-width: 200px;
    }
    @media screen and (max-width:510px){
      max-width: 130px;
    }
    img {
      max-width: 290px;
      width: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1071FF;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      height: 50px;
      margin-top: -4px;
      font-size: 18px;
      font-weight: 700;
      color: white;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
      @media screen and (max-width:510px){
        font-size: 13px;
        text-align: center;
      }
    }
  }
`
