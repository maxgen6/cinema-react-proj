import styled from "styled-components";

export const ModalBlock = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 55;
  transition: .5s all;
  
  ${props => props._active && `display: block;`}
`

ModalBlock.Content = styled.div`
  width: 50%;
  height: 500px;
  position: relative;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  z-index: 60;

  @media ${props => props.theme.device?.laptopM} {
    width: 80%;
  }
`

ModalBlock.Close = styled.span`
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  right: -30px;
  top: -10px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${props => props.theme.colors?.darkGray};
    transform: rotate(45deg);
  }
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${props => props.theme.colors?.darkGray};
    transform: rotate(-45deg);
  }
`

