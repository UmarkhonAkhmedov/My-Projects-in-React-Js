import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import styled from 'styled-components';

const SliderImages = ["/Images/Home/logo__sharp.svg", "/Images/Home/logo__panasonic.svg", "/Images/Home/logo__huawei.svg", "/Images/Home/logo__legrand.svg", "/Images/Home/logo__sharp.svg", "/Images/Home/logo__panasonic.svg", "/Images/Home/logo__huawei.svg", "/Images/Home/logo__legrand.svg", "/Images/Home/logo__sharp.svg", "/Images/Home/logo__panasonic.svg", "/Images/Home/logo__huawei.svg", "/Images/Home/logo__legrand.svg"]

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
      sidesOpacity={1}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    > 
    {
      SliderImages.map((img) => (
        <div className='block'><img alt="" src={img}/></div>
      ))
    }
      </InfiniteCarousel>
    </Container>
  )
}

export default SliderBrands

const Container = styled.div`
  padding: 0px 51px;
  margin-bottom: 50px;
  position: relative;


  @media screen and (min-width:1400px){
    padding: 0px 88px;
  }

  .block {
    width: 300px;
    padding: 10px 48px;
    transform: translateX(20px);

    img {
      width: 147px;
      height: 56px;
    }
  }

  .InfiniteCarouselDots {
    position: absolute;
    left: 50%;
    bottom: -40px;
    padding: 0;
    transform: translateX(-50%);
  }
  .InfiniteCarouselArrow {
    width: 50px;
    height: 50px;
    background-color: #E6EFFB;
    border-radius: 8px;
    padding: 5px;
    margin-left: -15px; 
    margin-right: -15px; 
  }
  .InfiniteCarouselArrowNextIcon {
      transform: rotate(-45deg);
      margin-right: 2px; 
  }
  .InfiniteCarouselArrowIcon {
    display: inline-block;
    padding: 5px;
    border: solid #0C0C0C;
    border-width: 0 3px 3px 0;
  }
  .InfiniteCarouselDotIcon {
    display: block;
    background-color: #E6EFFB;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .InfiniteCarouselDotActiveIcon {
    background-color: #1071FF;
  } 

`



