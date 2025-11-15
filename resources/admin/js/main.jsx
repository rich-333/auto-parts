import React, { StrictMode } from "react";
import ReacDOOM, { createRoot } from "react-dom/client";
import {AppAdmin} from "../AppAdmin"

const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppAdmin/>
  </StrictMode>
)