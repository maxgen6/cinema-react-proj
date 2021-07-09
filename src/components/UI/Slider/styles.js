import styled from "styled-components";

export const SliderBlock = styled.div`
  position: relative;
  padding-top: 20px;

  .disabled {
    color: ${props => props.theme.colors?.darkGray};
    cursor: not-allowed;
    pointer-events: none;
  }

  .arrows {
    span {
      cursor: pointer;
      color: ${props => props.theme.colors?.white};
      transition: .3s all;

      &:hover {
        opacity: .5;
      }
    }
  }

  .card-item {
    margin-right: 10px;
    width: 24%!important;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, .3);
    transition: .3s all;

    @media ${props => props.theme.device?.laptopS} {
      width: 49%!important;
    }
  }

  .swiper-container {
    position: static;
  }
`

export const SliderHeader = styled.div`
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors?.darkGray};

  h4 {
    text-transform: uppercase;
    color: ${props => props.theme.colors?.white};
  }
`

export const SwiperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  overflow: hidden;

  @media ${props => props.theme.device?.desktop} {
    max-width: 1300px;
  }
  
  @media ${props => props.theme.device?.laptopL} {
    max-width: 980px;
  }
  
  @media (max-width: 1280px) {
    max-width: 800px;
  }
  
  @media ${props => props.theme.device?.laptopM}  {
    max-width: 665px;
  }
  
  @media ${props => props.theme.device?.laptopS} {
    max-width: 955px;
  }
  
  @media ${props => props.theme.device?.tablet} {
    max-width: 720px;
  }
  
  @media ${props => props.theme.device?.mobileL} {
    max-width: 370px;
  }
  
  @media ${props => props.theme.device?.mobileM}{
    max-width: 335px;
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    position: absolute;
    right: 0;
    top: 30px;
    background: none;
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    position: absolute;
    left: auto;
    right: 23px;
    top: 30px;
    background: none;
  }

  .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
    background: ${props => props.theme.colors?.mainBackground};
    opacity: .7;
    cursor: not-allowed;
  }
`