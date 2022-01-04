import React from 'react'
import styled from 'styled-components'

function Elements() {
  return [...Array(6)].map((e, i) => 
    <div className='element'>
      <input className='item element__input' type="text" key={i}/>
      <input className='qty element__input' type="number" key={i}/>
      <select className='element__input' type="text" key={i}>
        <option>Item</option>
        <option>Second</option>
        <option>Third</option>
      </select>
      <span type="text" key={i}>unavailable</span>
    </div>
    
  );
}



function QuickMainContent() {
  return (
    <Container>
      <Headings>
          <h3>Item #</h3>
          <h3>Qty</h3>
          <h3>Unit</h3>
          <h3>Price</h3>
      </Headings>
      <Orders>
        <Lists>
          <Elements/>
        </Lists>
        <Upload>
          <h3>Upload your order</h3>
          <p>Here you can upload your own file XLS, XLSX or CSV and add products to cart.</p>
          <form action="/action_page.php">
            <input type="file" id="files" class="hidden"/>
            <label for="files">Upload your file</label>
          </form>
          <span>
            <img src="/Images/Home/order__download.svg"/>
            <a>Download your sample file</a>
          </span>
        </Upload>
      </Orders>
      <Buttons>

      </Buttons>
    </Container>
  )
}

export default QuickMainContent

const Container = styled.div`

`
const Orders = styled.div`
  display: flex;
  align-items: flex-start;
`
const Headings = styled.div`
  display: flex;
  margin: 20px 0 6px 0;
  max-width: 780px;
  width: 100%;
  h3 {
    font-size: 15px;
    font-weight: 400;
  }
  h3:nth-child(1) {
    max-width: 300px;
    width: 40%;
    margin-left: 2px;
    margin-right: 18px;
  }
  h3:nth-child(2) {
    max-width: 140px;
    width: 15%;
    margin-right: 18px;
  }
  h3:nth-child(3) {
    max-width: 180px;
    width: 25%;
    width: 25%;
    margin-right: 25px;
  }
  h3:nth-child(4) {
    max-width: 180px;
    width: 15%;
  }
`
const Lists = styled.div`
  max-width: 780px;
  width: 100%;
  margin-right: auto;
  .element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;

    .element__input {
      border-radius: 8px;
      border: none;
      outline: none;
      font-size: 14px;
      padding: 12px 16px;
    }
    .item {
      max-width: 300px;
      width: 40%;
      margin-right: 14px;
    }
    .qty {
      max-width: 140px;
      width: 15%;
      margin-right: 14px;
    }
    select {
      max-width: 180px;
      width: 25%;
      margin-right: 25px;
    }
    span {
      max-width: 180px;
      width: 15%;
      color: #737B7D;
      font-size: 14px;
      font-weight: 500;
    }
    
  }
`
const Upload = styled.div`
  width: 320px;
  background-color: white;
  margin: 7px 0 0 16px;
  padding: 30px 22px;
  text-align: center;
  border-radius: 8px;
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #0C0C0C;
    margin-bottom: 8px;
  }
  p {
    line-height: 20px;
  }

  form {
    margin-top: 5px;
    input {
      visibility: hidden;
    }
    label {
      background-color: #1071FF;
      color: white;
      font-weight: 500;
      padding: 10px 30px;
      border-radius: 30px;  
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 22px;
    cursor: pointer;
    

    &:hover {
      a {
        color: #1071FF;
      }
    }
    a {
      transition: all 0.3s ease;
    }
  }
`
const Buttons = styled.div`
  
`
