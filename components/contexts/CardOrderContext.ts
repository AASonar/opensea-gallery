import { createContext } from "react";

enum CardOrder {
  "creatorAZ",
  "creatorZA",
  "nameAZ",
  "nameZA",
  "highest",
  "lowest",
}

interface CardOrderProps {
  cardOrder?: CardOrder;
  setCardOrder?(cardView: CardOrder): void;
}

export const CardOrderContext = createContext<CardOrderProps>({});
