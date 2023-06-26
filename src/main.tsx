import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PokeProvider } from "./contexts/pokeContext.tsx";
import GlobalStyle from "./styles/globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PokeProvider>
      <GlobalStyle />
      <App />
    </PokeProvider>
  </React.StrictMode>
);
