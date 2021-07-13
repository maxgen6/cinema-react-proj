import styled from "styled-components";

export const HeaderBlock = styled.header`
  padding: 15px 20px;
  background: ${props => props.theme.colors?.mainBackground || "#181818"};
  box-shadow: -7px 3px 17px -6px rgba(0, 0, 0, .3);
  
  .drop-down-menu {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background: ${props => props.theme.colors?.mainBackground || "#181818"};
    top: 128%;
    left: 0;
    width: 100%;
    z-index: 11;
    text-align: center;
    transition: .3s all linear;

    li {
      padding: 5px 10px;
      transition: .3s all ease-in;
      border-bottom: 1px solid rgba(${props => props.theme.colors?.white}, .3);

      &:hover {
        background: ${props => props.theme.colors?.gray};
      }
    }

    a {
      color: ${props => props.theme.colors?.white};
    }
  }
`

export const HeaderList = styled.ul`
  display: flex;
  
  @media ${props => props.theme.device?.laptopS} {
    justify-content: flex-end;
  }
`

export const HeaderListItem = styled.li`
  display: flex;
  align-items: center;
  width: 50%;

  &:first-child {
    height: 36px;
  }

  &:last-of-type {
    justify-content: flex-end;
  }

  @media ${props => props.theme.device?.laptopS} {
    &:first-child {
      display: none;
    }
  }

  .search-panel {
    position: relative;
    z-index: 90;
  }

  div:nth-child(1){
    width: 100%;
    max-width: 500px;
    font-size: 14px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.colors.darkGray || "#808080"};
    
    .css-26l3qy-menu {
      max-width: 500px;
      width: 100%;
      overflow-x: hidden;
    }
  }

  svg {
    position: relative;
    z-index: 55;
    height: 25px;
    fill: ${props => props.theme.colors.darkGray || "#808080"};
    cursor: pointer;
  }

  .search {
    display: block;
    margin-left: -35px;
    margin-top: 5px;
    cursor: pointer;
    color: ${props => props.theme.colors.darkGray || "#808080"};
  }

  .open-search-panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-search-panel {
    position: absolute;
    width: 20px;
    height: 20px;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 25;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 7px;
      width: 20px;
      height: 2px;
      background: ${props => props.theme.colors.darkGray || "#808080"};
      transform: rotate(45deg);
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 7px;
      width: 20px;
      height: 2px;
      background: ${props => props.theme.colors.darkGray || "#808080"};
      transform: rotate(-45deg);
    }
  }
}


${props => props._white && `color: red;`};

`

export const SubmenuList = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .user {
    padding: 5px 25px 5px 3px;
    border: none;
  }
  
  p {
    padding: 5px 25px;
    position: relative;
    color: ${props => props.theme.colors?.white};
    border: 1px solid ${props => props.theme.colors?.white};
    border-radius: 15px;
    cursor: pointer;

    @media ${props => props.theme.device?.laptopS} {
      font-size: 12px;
    }

    span {
      color: #42a5db;
    }

    .arrow-down {
      position: absolute;
      color: ${props => props.theme.colors?.white};

      @media ${props => props.theme.device?.laptopS} {
        top: 2px;
      }
    }
  }
`

export const SubmenuListItem = styled.li`
  margin-right: 40px;
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors?.white};
  cursor: pointer;

  @media ${props => props.theme.device?.laptopS} {
    margin-right: 10px;
  }

  .avatar {
    color: ${props => props.theme.colors?.white};
  }
  
  &:last-child {

    .drop-down-menu {
      width: 170%;
    }
  }

  &:hover .drop-down-menu {
    visibility: visible;
    opacity: 1;
  }
`

export const BurgerMenuOpen = styled.span`
  position: absolute;
  display: block;
  width: 25px;
  height: 2px;
  background: ${props => props.theme.colors?.white};
  z-index: 15;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    width: 25px;
    height: 2px;
    background: ${props => props.theme.colors?.white};
  }

  &:after{
    content: '';
    display: block;
    position: absolute;
    top: 14px;
    width: 25px;
    height: 2px;
    background: ${props => props.theme.colors?.white};
  }
`

export const BurgerMenuClose = styled.span`
  position: absolute;
  display: none;
  top: 25px;
  left: 20px;
  z-index: 15;
  width: 25px;
  height: 25px;
  ${props => props._active && `display: block;`};


  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    width: 25px;
    height: 2px;
    background: ${props => props.theme.colors?.white};
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    width: 25px;
    height: 2px;
    background: ${props => props.theme.colors?.white};
    transform: rotate(-45deg);
  }
`

export const BurgerMenuAction = styled.li`
  display: none;
  position: absolute;
  top: 25px;
  left: 10px;
  width: 25px;
  height: 25px;

  @media ${props => props.theme.device?.laptopS} {
    display: block;
  }
`

export const BurgerMenuContent = styled.li`
  position: absolute;
  left: 15px;
  top: 30px;
  transform: translateX(-100%);
  transition: .3s all;
  
  
  ${props => props._active && `
    width: 100%;
    height: 100%;
    z-index: 50;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .9);
    transform: translateX(0);

    div {
      display: block;
    }
  `}
  
  
`