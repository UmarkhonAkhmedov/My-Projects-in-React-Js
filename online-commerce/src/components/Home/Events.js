import styled from "styled-components"

const EventItems = [
  {
    id: 1,
    img: "first",
    title: "Electrician course for electricians with SEP licence",
    date: "23.05.2021",
    text: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in",
  },
  {
    id: 2,
    img: "second",
    title: "Interior design and decoration",
    date: "04.06.2021",
    text: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in",
  },
  {
    id: 3,
    img: "third",
    title: "AutoCAD 2d basic level",
    date: "15.06.2021",
    text: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in",
  },
  {
    id: 4,
    img: "fourth",
    title: "Paving engineer with a road construction machine licence",
    date: "31.03.2021",
    text: "This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in This course is conducted in the form of lectures via the Internet and ends with an examination, also online is conducted in",
  }
]


function Events() {
  return (
    <Container>
      {
        EventItems.map((index) => (
          <Item>
            <img src={`/Images/Home/event__main--${index.img}.png`}/>
            <EventInfo>
              <h3>{index.title}</h3>
              <span>{index.date} | London, UK</span>
              <p>{index.text}</p>
              <a href="">Know more</a>
            </EventInfo>
          </Item>
        ))
      }
    </Container>
  )
}

export default Events

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 51px;
  margin-bottom: 40px;
  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }
`
const Item = styled.div`
  max-width: 290px;
  width: 100%;
  img {
    max-width: 290px;
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`
const EventInfo = styled.div`
  margin-top: -4px;
  border: 1px solid #F6F8FB;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px 8px;

  h3 {
    color: #0C0C0C;
    font-size: 19px;
    margin-bottom: 16px;
    height: 52px;
  }
  span {
    color: #1071FF;
  }
  p {
    margin: 16px 0 28px 0;
    line-height: 22px;
    max-width: 280px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis; 
    overflow: hidden;
  }
  a {
    display: inline-block;
    border: 2px solid #1071FF;
    color: #1071FF;
    padding: 10px 30px;
    border-radius: 30px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #1071FF;
      color: white;
    }
  }
`
