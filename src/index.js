import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from './store'
import App from './App';
import { ThemeProvider } from "styled-components";
import {Global} from "./assets/global";


const theme = {
  colors: {
    mainBackground: "#181818",
    darkGray: "#808080",
    gray: "#a5a5a6",
    loulou: "#444537",
    brown: "#56271b",
    green: "#7b958f",
    strongRed: "#b04525",
    white: "#fff",
    button: "#00c1ed",
    graySpan: "#2d2d2d"
  },
  device: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 480px)`,
    tablet: `(max-width: 768px)`,
    laptopS: `(max-width: 992px)`,
    laptopM: `(max-width: 1024px)`,
    laptopL: `(max-width: 1440px)`,
    desktop: `(max-width: 1920px)`,
  }
}


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

