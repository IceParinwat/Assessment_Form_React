import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// สร้าง root element ที่มี id="root" ในไฟล์ HTML

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
