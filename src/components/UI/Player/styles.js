import styled from "styled-components";

export const PLayerBlock = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;

  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`