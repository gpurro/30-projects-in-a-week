import { PropsWithChildren, useState } from "react";
import { PanelsContext } from "../contexts/PanelsConext";
import "./Panels.css";

export const Panels = ({ children }: PropsWithChildren) => {
  const style = {
    fontFamily: "'Muli', sans-serif",
  };
  const [selectedTabId, setSelectedTabId] = useState<string>("");

  return (
    <ul className=" flex w-screen mx-[5%] cursor-pointer " style={style}>
      <PanelsContext.Provider value={{ selectedTabId, setSelectedTabId }}>
        {children}
      </PanelsContext.Provider>
    </ul>
  );
};
