import styled from "styled-components";

export const TabsBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
  }

`
TabsBlock.Item = styled.span`
  position: relative;
  color: ${props => props.theme.colors?.darkGray};
  text-transform: uppercase;
  cursor: pointer;
  transition: .3s all;

  @media ${props => props.theme.device?.laptopS} {
    font-size: 14px;
  }

  @media ${props => props.theme.device?.mobileM} {
    font-size: 12px;
  }

  &:hover {
    color: ${props => props.theme.colors?.white};
    &:after {
      content: '';
      position: absolute;
      width: 40%;
      height: 1px;
      background: #076f78;
      bottom: -3px;
      left: 30%;
    }
  }
  
  ${props => props._active &&  `
    color: #fff;
    &:after {
        content: '';
        position: absolute;
        width: 40%;
        height: 1px;
        background: #076f78;
        bottom: -3px;
        left: 30%;
      }
  `}
`
