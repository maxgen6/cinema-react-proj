import styled from "styled-components";

export const SidebarBlock = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${props => props.theme.colors?.mainBackground};
  min-height: 100vh;

  @media ${props => props.theme.device.laptopS} {
    background: none;
  }
  
  .logo {
    color: ${props => props.theme.colors?.darkGray};

    span {
      color: ${props => props.theme.colors?.darkGray};
    }

    &:hover, &:hover span {
      color: ${props => props.theme.colors?.white};
    }
  }

  .active {
    color: #fff;

    span {
      color: #fff;
    }
  }
`

export const SidebarList = styled.ul`
  padding: 20px 15px;

  @media ${props => props.theme.device?.laptopM} {
    padding: 20px 10px;
  }
`

export const SidebarListItem = styled.li`
  margin-bottom: 30px;
  text-align: center;
`