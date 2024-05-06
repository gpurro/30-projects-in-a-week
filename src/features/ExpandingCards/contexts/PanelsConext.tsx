import { createContext } from "react";

interface PanelContextType {
  selectedTabId: string;
  setSelectedTabId?: (id: string) => void;
}

const initialVale: PanelContextType = {
  selectedTabId: "",
  setSelectedTabId: () => {},
};
export const PanelsContext = createContext<PanelContextType>(initialVale);
