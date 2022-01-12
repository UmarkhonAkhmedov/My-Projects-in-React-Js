import styled from "styled-components"
import FooterItems from "./FooterItems"
import Copyright from "./Copyright"

function Footer() {
  return (
    <Container>
      <FooterItems/>
      <Copyright/>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  padding: 40px 51px 20px 51px;
  margin-top: 40px;
  background-color: #F6F8FB;
  @media screen and (min-width:1400px){
    padding: 40px 88px 20px 88px;
  }
`
