import styled from "styled-components";

export const BigPromoBlock = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

export const BigPromoPlay = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 70px;
  left: 70px;
  cursor: pointer;
  transition: .3s all;

  &:hover  {
    opacity: .7;
  }
  
  .play {
    position: relative;
    margin-right: 10px;
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: ${props => props.theme.colors?.white};
    transition: .3s all;

    &:after {
      content: '';
      display: block;
      position: absolute;
      border-top: 15px solid transparent;
      border-left: 25px solid ${props => props.theme.colors?.darkGray};
      border-bottom: 15px solid transparent;
      top: 50%;
      left: 55%;
      transform: translate(-50%, -50%);
    }
  }

  .play-text {
    color: ${props => props.theme.colors?.white};

    p {
      font-size: 24px;
      line-height: 28px;
    }

    span {
      margin-top: 5px;
      font-size: 14px;
    }
  }
`