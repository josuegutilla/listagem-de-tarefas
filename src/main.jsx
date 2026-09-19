import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";

import "./index.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>

        {/* alertas globais, com estilo combinando com o tema escuro */}
        <Toaster
            position="bottom-center"
            toastOptions={{
                duration: 2600,
                style: {
                    background: "#070c0a",
                    color: "#e7f0ec",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    borderRadius: "14px",
                    fontSize: "14px",
                },
                success: {
                    iconTheme: { primary: "#34d399", secondary: "#040706" },
                },
                error: {
                    iconTheme: { primary: "#fb7185", secondary: "#040706" },
                },
            }}
        />
    </StrictMode>,
);
