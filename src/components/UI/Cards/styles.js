import styled from "styled-components";

import { Link } from 'react-router-dom'

export const LinkBlock = styled(Link)`
    position: relative;
    display: block;
    margin-bottom: 10px;
    transition: .3s all;
    z-index: 10;
    overflow: hidden;
  
    &:hover img {
      opacity: .5;
    }

    p {
      padding: 2px 10px 0;
    }
`

LinkBlock.Image = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  transition: .3s all;
`

LinkBlock.Title = styled.p`
  color: ${props => props.theme.colors?.white};
  position: relative;
  z-index: 5;
`

LinkBlock.Genres = styled.p`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  margin-top: 5px;
  font-size: 12px;
  color: ${props => props.theme.colors?.darkGray};
  text-transform: uppercase;

  @media ${props => props.theme.device?.mobileL} {
    font-size: 10px;
  }
`
