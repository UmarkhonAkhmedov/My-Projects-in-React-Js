import styled from "styled-components"

function Copyright() {
  return (
    <Items>
      <span className="copyright">
        <img src="/Images/Home/footer__copyright--icon.svg"/>
        <p>2021 Divante S.A.</p>
      </span>
      <SocialLinks>
        <div className="links">
          <a href="#"><img src="/Images/Home/footer__facebook.svg"/></a>
          <a href="#"><img src="/Images/Home/footer__instagram.svg"/></a>
          <a href="#"><img src="/Images/Home/footer__youtube.svg"/></a>
        </div>
        <a className="footer__logo" href="#"><img src="/Images/Home/footer__logo.svg"/></a>
      </SocialLinks>
    </Items>
  )
}

export default Copyright

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1.5px solid #E6EFFB;
  margin-top: 30px;
  padding-top: 10px;

  .copyright {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
    p {
      color: #434447;
    }
  }
  @media screen and (max-width: 650px){
    justify-content: center;
    flex-wrap: wrap;
    .copyright {
      margin-right: 20px;
      margin-bottom: 10px;
    } 
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width:500px){
    flex-direction: column;
    
    .links {
      a {
        margin: 0 8px;
      }
    }
    .footer__logo {
      transform: translateX(-20px);
    }
  }
  

  .links {
    a {
      margin-right: 16px;
      img {
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }
  .footer__logo {
    margin-left: 24px;
    img {
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.1);
        }
    }
  }
`
