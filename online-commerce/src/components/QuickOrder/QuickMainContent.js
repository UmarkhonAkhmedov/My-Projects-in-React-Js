import React from 'react'
import styled from 'styled-components'

function Elements() {
  return [...Array(6)].map((e, i) => 
    <div className='element'>
      <input className='item element__input' type="text" key={i} placeholder='Enter SKU or name of product'/>
      <input className='qty element__input' type="number" key={i} placeholder='Quantity'/>
      <select className='element__input' type="text" key={i}>
        <option>Unit</option>
        <option>item</option>
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
        <div className='adding order__buttons'>
          <span>Add to cart</span>
          <img src="/Images/Home/order__cart--select.svg"/>
          <div className='selecting'>
            <span>Name SKU</span>
            <span>Name of Product</span>
          </div>
        </div>
        <a className='quoting order__buttons'>Get Quote</a>
        <a className='creating order__buttons'>Create Order</a>
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
      &::placeholder {
        color: #737B7D;
        font-size: 14px;
      }
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
      color: #737B7D;
      max-width: 180px;
      width: 25%;
      margin-right: 25px;
      option {
        color: #0C0C0C;
      }
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
  display: flex;
  align-items: center;
  margin-top: 40px;
  .order__buttons {
    display: flex;
    justify-content: center;
    border-radius: 30px;
    color: white;
    padding: 12px 0;
    max-width: 170px;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }
  .adding {
    position: relative;
    background-color: #1071FF;
    &:hover {
      .selecting {
        display: flex;
      };
    }
    img {
      margin-left: 8px;
    }

    .selecting {
      position: absolute;
      top: 30px;
      display: none;
      justify-content: center;
      text-align: center;
      background-color: white;
      color: #1071FF;
      flex-direction: column;
      padding: 15px 15px;
      border-radius: 5px;
      span {
        transition: all 0.3s ease;
        margin: 5px 0;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  .quoting {
    background-color: white;
    color: #1071FF;
    margin: 0 16px 0 16px;
  }
  .creating {
    background-color: #FF4E00;

  }
`
