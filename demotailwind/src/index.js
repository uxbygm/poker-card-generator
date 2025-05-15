import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { PokerDeck } from "./pokerDeck.js";
import { PokerCard } from "./pokerCard.js";

// Create a client
const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <PokerDeck />
    <PokerCard />
  </QueryClientProvider>
);