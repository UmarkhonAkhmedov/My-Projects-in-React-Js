import styled from "styled-components"

const BuyData = ["Payment methods", "Order and pick up", "Order with delivery", "Shopping over the phone", "Returns"]
const HelpData = ["Contact", "Online Help", "Our Commitments", "Give feedback"]
const ServicesData = ["Transport", "Design service", "Paint an plaster mixing service", "Dimensioning and assemly service", "Return of used equipment", "Additional services"]
const AboutData = ["About us", "Press Office", "For suppliers", "Regulations", "Privacy Policy", "Cookies", "Personal Data Request"]

function CommonItem({data, heading}){
  return (
    <>
      <h3 className="footer__heading">{heading}</h3>
      <ul>
        {data.map((element) => (
          <li><a href="#">{element}</a></li>
        ))}
      </ul>
    </>
  )
}

function FooterItems() {
  return (
    <Items>
      <SignUp>
        <h3 className="footer__heading">Sign up for news</h3>
        <p>Keep up to date with the latest product launches and news. 
          Find out more about our brands and get special promo codes.</p>
        <input className="footer__email" type="email" placeholder="Your e-mail address"/>
        <button type="submit">Sign up for newsletter</button>
        <div className="agreement">
          <input type="checkbox" id="id" name="name" value="value"/>
          <p>I accept <span>the personal data treatment.</span></p>
        </div>
      </SignUp>
      <Links>
        <div className="Link">
          <CommonItem data={BuyData} heading="How to buy"/>
        </div>
        <div className="Link">
          <CommonItem data={HelpData} heading="Help"/>
        </div>
        <div className="Link">
          <CommonItem data={ServicesData} heading="Services"/>
        </div>
        <div className="Link">
          <CommonItem data={AboutData} heading="About"/>
        </div>
      </Links>
      
    </Items>
  )
}

export default FooterItems

const Items = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  color: #0C0C0C;

  .footer__heading {
    font-size: 19px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 850px){
    flex-direction: column;
  }

`
const SignUp = styled.div`
  max-width: 300px;
  width: 100%;
  margin-right: 20px;
  @media screen and (max-width: 850px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }
  p {
    line-height: 22px;
  }
  .footer__email {
    border: none;
    outline: none;
    border: 1px solid #EAECEE;
    padding: 12px 16px;
    width: 100%;
    border-radius: 8px;
    margin: 24px 0;

    &::placeholder {
      color: #737B7D;
      font-size: 14px;
      
    }
  }
  button {
    border: none;
    background-color: #1071FF;
    color: white;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    padding: 12px 0;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  }
  .agreement {
    display: flex;
    align-items: center;
    input {
      margin-right: 8px;
    }
  }
  p {
    font-size: 14px;
    margin-top: 3px;
    span {
      color: #1071FF;
    }
  }
`
const Links = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  .Link {
    max-width: 210px;
    margin-left: 60px;

    ul {
      display: flex;
      flex-direction: column;
      color: #0C0C0C;
      li {
        margin-bottom: 10px;
        a {
          color: #0C0C0C;
          cursor: pointer;
          transition: all 0.2s ease;
          &:hover {
            color: #1071FF;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px){
    flex-wrap: wrap;

    .Link {
      margin: 5px 10px;
    }
  }
  @media screen and (max-width: 850px){
    margin-top: 40px;
    justify-content: center;
    .Link {
      margin: 10px 15px;
    }
  }
  @media screen and (max-width: 400px){
    text-align: center;
    .Link {
      ul {
        justify-content: center;
        text-align: center;
      }
    }
  }
`

