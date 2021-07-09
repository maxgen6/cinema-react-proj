import styled from "styled-components";

export const ContentHome = styled.section`
  display: flex;
  background: ${props => props.theme.colors?.mainBackground};

  @media ${props => props.theme.device?.laptopS} {
    flex-direction: column;
  }
`

export const ContentMain = styled.article`
  flex-basis: 75%;
  box-shadow: 7px 0 7px -1px rgba(0, 0, 0, .3),
  -26px 15px 18px -22px rgba(0, 0, 0, .3);

  @media ${props => props.theme.device?.laptopS}  {
    flex-basis: 100%;
  }

  .content__block {
    padding: 30px 20px;
  }
`

export const ContentSidebar = styled.article`
  width: 25%;
  padding: 10px 15px;

  .card-item {
    img {
      height: 150px;
    }
  }

  @media ${props => props.theme.device?.laptopS} {
    width: 100%;
    flex-basis: 100%;
  }
  
`

export const ContentSidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid ${props => props.theme.colors?.darkGray};

    h4 {
      color: ${props => props.theme.colors?.white};
    }

    a {
      font-size: 12px;
      text-transform: uppercase;
      color: ${props => props.theme.colors?.darkGray};
    }
`