import styled from "styled-components";

export const WatchBlock = styled.section`
  padding: 35px 0;
  min-height: 95vh;
  background: rgba(0, 0, 0, .95);
  

  .container {
    max-width: 90%;
    margin: 0 auto;
  }

  h1 {
    font-size: 52px;
    font-weight: bold;
    color: ${props => props.theme.colors?.white};
    margin-bottom: 30px;
  }
`

export const WatchContent = styled.article`
  width: 100%;
  min-height: 200px;
  background: ${props => props.theme.colors?.mainBackground};
  border-radius: 10px;

  .film-info {
    padding: 15px 25px;
  }
`

export const WatchFilmInfoHeader = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors?.darkGray};

  @media ${props => props.theme.device?.laptopS}{
    flex-direction: column;
  }

  h2 {
    color: ${props => props.theme.colors?.white};
    
    @media ${props => props.theme.device?.laptopS} {
      margin-bottom: 10px;
    }
  }
`

export const ButtonBlock = styled.div`

  display: flex;

  .button-block__point {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 25px;
    color: ${props => props.theme.colors?.white};
    background: ${props => props.theme.colors?.graySpan};
    border-radius: 10px;
  }

  button {
    padding: 5px 10px 5px 40px;
    position: relative;
    display: flex;
    margin-left: 10px;
    font-size: 14px;
    color: ${props => props.theme.colors?.white};
    outline: none;
    background: none;
    border: 2px solid ${props => props.theme.colors?.graySpan};
    border-radius: 10px;
    cursor: pointer;
    transition: .3s all linear;

    span {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 15%;
      fill: ${props => props.theme.colors?.white};
    }

    &:hover {
      opacity: .4;
    }
  }

`