import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppProvider } from "./context/AppContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </AppProvider>
  </QueryClientProvider>
);
