import styled from "styled-components"
import RecommendedElements from "./RecommendedData"

function Recommended() {
  return (
    <Container>
      <RecommendedElements/>
    </Container>
  )
}

export default Recommended

const Container = styled.div`
  padding: 0px 51px;
  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }
`