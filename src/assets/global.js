import styled, {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  body {
    font-family: "RobotoRegular";
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul,
  ol{
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`

export const WrapperContent = styled.div`
  padding-left: 70px;
  order: 1;

  @media ${props => props.theme.device?.laptopS} {
    padding-left: 0;
    flex-basis: 100%;
  }
`

export const WrapperSidebar = styled.div`
  width: 70px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  @media ${props => props.theme.device?.laptopS} {
    display: none;
  }
`