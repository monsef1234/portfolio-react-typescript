import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ActiveSectionProvider from "./context/active-section-context.tsx";
import ThemeSwitchProvider from "./context/theme-switch-context.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <ActiveSectionProvider>
        <App />
      </ActiveSectionProvider>
    </ThemeSwitchProvider>
  </React.StrictMode>
);
