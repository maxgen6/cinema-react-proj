import styled from "styled-components";

export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`

SearchBlock.Image = styled.img`
  display: block;
  width: 250px;
  height: 90px;
  object-fit: cover;
`

export const SearchSelectDescription = styled.div`
  width: 100%;
  margin-left: 10px;
`
SearchSelectDescription.Title = styled.p`
  width: 100%;
  color: ${props => props.theme.colors?.mainBackground};
  font-size: 14px;
  font-weight: bold;
`
SearchSelectDescription.Info = styled.p`
  display: flex;
  align-items: center;
`
SearchSelectDescription.Span = styled.span`
  display: block;

  &:first-child {
    color: ${props => props.theme.colors?.strongRed};
  }

  &:last-of-type {
    margin-left: 5px;
  }
`


