import styled from "styled-components";

export const PromoBlock = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const PromoBg = styled.div`
  position: absolute;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    bottom: 7px;
    background: rgba(0, 0, 0, .5);
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }  `

export const PromoInfo = styled.div`
  position: relative;
  width: 500px;
  padding-right: 20px;

  @media ${props => props.theme.device?.laptopS} {
    width: 80%;
  }
  h1 {
    font-size: 32px;
    color: ${props => props.theme.colors?.white};
  }
  
  p {
    margin-bottom: 10px;
    font-weight: bold;
    color: ${props => props.theme.colors?.white};
  }
`

export const PromoActions = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    padding: 5px 15px;
    background: ${props => props.theme.colors?.button};
    color: ${props => props.theme.colors?.white};
    border-radius: 20px;
    transition: .3s all;

    &:hover {
      background: #205976;
    }
  }

  span {
    display: flex;
    color: ${props => props.theme.colors?.white};
    cursor: pointer;
    transition: .3s all;

    &:hover {
      transform: scale(1.2);
    }

    .play {
      margin-right: 5px;
    }
  }
`