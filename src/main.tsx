import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import React from "react";
import "./index.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./core/query-client.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
