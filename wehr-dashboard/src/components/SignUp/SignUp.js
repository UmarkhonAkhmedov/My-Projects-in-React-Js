import React from 'react'
import styled from 'styled-components'

function SignUp() {
  return (
    <SignAllInfo>
      <Container className="container">
        <Navbar>
          <img src=""/>
        </Navbar>
        <MainContent>
          Main Content
        </MainContent>
      </Container>
    </SignAllInfo>
  )
}

export default SignUp

const SignAllInfo = styled.div`
  background-color: #FFEFE7;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px; 
  background-color: #ffffff;
`
const Navbar = styled.nav`

`
const MainContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const CreateAccount = styled.div`

`
