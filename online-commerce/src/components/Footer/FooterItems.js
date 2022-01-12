import styled from "styled-components"

const BuyData = ["Payment methods", "Order and pick up", "Order with delivery", "Shopping over the phone", "Returns"]
const HelpData = ["Contact", "Online Help", "Our Commitments", "Give feedback"]
const ServicesData = ["Transport", "Design service", "Paint an plaster mixing service", "Dimensioning and assemly service", "Return of used equipment", "Additional services"]
const AboutData = ["About us", "Press Office", "For suppliers", "Regulations", "Privacy Policy", "Cookies", "Cookies"]

function CommonItem({data, heading}){
  return (
    <>
      <h3 className="footer__heading">{heading}</h3>
      <ul>
        {data.map((element) => (
          <li><a>{element}</a></li>
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
        <input type="email"/>
        <button type="submit">Sign up for newsletter</button>
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <p>I accept <span>the personal data treatment.</span></p>
        </div>
      </SignUp>
      <Links>
        <div>
          <CommonItem data={BuyData} heading="How to buy"/>
        </div>
        <div>
          <CommonItem data={HelpData} heading="Help"/>
        </div>
        <div>
          <CommonItem data={ServicesData} heading="Services"/>
        </div>
        <div>
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

  .footer__heading {
    color: #0C0C0C;
    font-size: 19px;
  }

`
const SignUp = styled.div`
  max-width: 300px;
  width: 100%;
`
const Links = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

