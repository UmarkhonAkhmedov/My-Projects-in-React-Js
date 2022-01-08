import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import styled from 'styled-components';

function SliderBrands() {
  return (
    <Container>
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=""
        src="/Images/Home/logo__sharp.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__panasonic.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__huawei.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__legrand.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__sharp.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__panasonic.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__huawei.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__legrand.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__sharp.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__panasonic.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__huawei.svg"
      />
    </div>
    <div>
      <img
        alt=""
        src="/Images/Home/logo__legrand.svg"
      />
    </div>
    
      </InfiniteCarousel>
    </Container>
  )
}

export default SliderBrands

const Container = styled.div`
  margin: 50px auto;
`



