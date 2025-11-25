import React from "react";
import ReactDOM from "react-dom/client";
import { AppCliente } from "../AppCliente";
import { UserProvider } from "../context/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AppCliente/>
    </UserProvider>
  </React.StrictMode>
)