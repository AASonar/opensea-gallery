import { createContext } from "react";

export enum CardView {
  art = "art",
  detailed = "detailed",
}

interface CardViewProps {
  cardView?: CardView;
  setCardView?(cardView: any): void;
}

export const CardViewContext = createContext<CardViewProps>({});
