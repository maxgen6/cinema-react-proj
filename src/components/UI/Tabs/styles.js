import styled from "styled-components";

export const TabsBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
  }

  .tabs__item {
    position: relative;
    color: ${props => props.theme.colors?.darkGray};
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s all;

    @include _992 {
      font-size: 14px;
    }
  
    @include _375 {
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

    .tabs__item--active {
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
  }
`