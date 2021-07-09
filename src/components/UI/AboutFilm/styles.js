import styled from "styled-components";

export const AboutFilmBLock = styled.div`
  padding-top: 20px;
`

export const AboutFilmContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.device?.laptopS} {
    flex-direction: column;
  }
`

export const AboutFilmPoster = styled.div`
  width: 25%;

  @media ${props => props.theme.device?.laptopS} {
    width: 100%;
  }

  img {
    width: 100%;
    min-height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }  
`

export const AboutFilmDescription = styled.div`
  width: 45%;

  @media ${props => props.theme.device?.laptopS} {
    width: 100%;
  }

  h2 {
    margin-bottom: 5px;
    color: ${props => props.theme.colors?.white};
  }

  .film-description {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors?.white};
  }

  .film-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid ${props => props.theme.colors?.graySpan};
    border-bottom: 1px solid ${props => props.theme.colors?.graySpan};

  @include ${props => props.theme.device?.mobileL} {
    display: block;
  }
  }

  .view {
    margin-right: -15px;
    width: 20%;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors?.white};

  @include _992 {
    width: 50%;
    margin-bottom: 10px;
  }

    svg {
      margin-right: 10px;
      width: 20%;
      fill: ${props => props.theme.colors?.white};
    }
  }

  .star {
    margin-left: 20px;
    width: 25%;
    display: flex;

  @include ${props => props.theme.device?.laptopS} {
    width: 45%;
    margin-bottom: 10px;
    margin-left: 0;
  }

    svg {
      margin-left: 3px;
    }
  }

  .information {
    margin-left: 10px;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.colors?.white};

    @include ${props => props.theme.device?.laptopS}  {
      font-size: 14px;
    }
  }

  .film-actors {
    display: flex;
  }
`

export const FilmDetails = styled.div`
    padding-top: 10px;
    width: 60%;

    h3 {
      color: ${props => props.theme.colors?.white};
    }

    ul > li {
      color: ${props => props.theme.colors?.white};
      font-size: 12px;
      margin-bottom: 3px;

      span {
        margin-left: 5px;
        font-weight: bold;
        color: ${props => props.theme.colors?.darkGray};
      }
    }
`

export const FilmCast = styled.div`

  padding-top: 10px;

  h3 {
    color: ${props => props.theme.colors?.white};
  }

  ul > li {
    display: flex;
    color: ${props => props.theme.colors?.white};
    font-size: 14px;
    align-items: center;
    margin-bottom: 5px;

    img {
      margin-right: 10px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
  }
`

export const AboutFimGallery = styled.div`
  width: 25%;

  @include ${props => props.theme.device?.laptopS} {
    width: 100%;
  }

  h2 {
    color: ${props => props.theme.colors?.white};
    margin-bottom: 5px;
  }
`

export const GalleryTrailer = styled.div`
  position: relative;
  display: block;
  transition: .3s all ease-in;

  &:hover {
    opacity: .8;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .2);
    color: #fff;

    &:after {
      content: '';
      position: absolute;
      border-top: 10px solid transparent;
      border-left: 15px solid ${props => props.theme.colors?.white};
      border-bottom: 10px solid transparent;
      left: 35%;
    }
  }`

export const SoundtracksBlock = styled.a`
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors?.graySpan};
  color: ${props => props.theme.colors?.white};
  transition: .5s all;

  &:hover {
    opacity: .5;
  }


  svg {
    color: ${props => props.theme.colors?.white};
    fill: ${props => props.theme.colors?.white};
    width: 10%;
    margin-right: 10px;
  }
`