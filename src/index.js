import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/Redux/store";
import { Root } from "./app/Root";
import { GlobalStyle } from "./app/theme/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
