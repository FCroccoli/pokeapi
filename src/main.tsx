import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PokeProvider } from "./contexts/pokeContext.tsx";
import GlobalStyle from "./styles/globalStyle.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokeProvider>
        <GlobalStyle />
        <App />
      </PokeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
