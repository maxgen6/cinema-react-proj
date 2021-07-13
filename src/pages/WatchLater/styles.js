import styled from "styled-components";

export const LaterBlock = styled.div`
  width: 100%;
  min-height: 95vh;
  background: rgba(0, 0, 0, .85);
  padding: 30px 40px 0;
`
LaterBlock.H1 = styled.h1`
  font-size: 46px;
  color: ${props => props.theme.colors?.white};
  margin-bottom: 20px;
`

LaterBlock.Films = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a {
    width: 250px;
    margin-right: 20px;
    padding-bottom: 10px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors?.mainBackground};

    @media ${props => props.theme.device?.mobileM} {
      width: 100%;
    }
    
    img {
      height: 450px;

      @media ${props => props.theme.device?.mobileL} {
        height: 200px;
      }
    }
  }
`
