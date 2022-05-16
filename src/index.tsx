import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/authContext";
import { CardsProvider } from "./contexts/cadsBattling";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CardsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CardsProvider>
  </React.StrictMode>
);
