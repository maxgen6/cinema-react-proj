import styled from "styled-components";

export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  img {
    display: block;
    width: 250px;
    height: 90px;
    object-fit: cover;
  }
`

export const SearchSelectDescription = styled.div`
  width: 100%;
  margin-left: 10px;

  .title {
    width: 100%;
    color: ${props => props.theme.colors?.mainBackground};
    font-size: 14px;
    font-weight: bold;
  }

  .info {
    display: flex;
    align-items: center;
    span {
      display: block;

      &:first-child {
        color: ${props => props.theme.colors?.strongRed};
      }

      &:last-of-type {
        margin-left: 5px;
      }
    }
  }
`