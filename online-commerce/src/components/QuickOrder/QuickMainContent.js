import React from 'react'
import styled from 'styled-components'

function Elements() {
  return [...Array(9)].map((e, i) => 
    <div className='element'>
      <input type="text" key={i}/>
      <input type="number" key={i}/>
      <select type="text" key={i}>
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
            <input type="file" id="myFile" name="filename"/>
          </form>
          <span>
            <img src=""/>
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
  
`
const Headings = styled.div`
  display: flex;
  h3:first-child {
    width: 250px;
  }
  h3:first-child {
    width: 250px;
  }
  h3:first-child {
    width: 250px;
  }
  h3:first-child {
    width: 250px;
  }
`
const Lists = styled.div`

  .element {
    
  }
`
const Buttons = styled.div`

`
const Upload = styled.div`

`