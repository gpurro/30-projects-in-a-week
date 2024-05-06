import { PropsWithChildren, useState } from "react";
import { PanelsContext } from "../contexts/PanelsConext";

export const Panels = ({ children }: PropsWithChildren) => {
  const [selectedTabId, setSelectedTabId] = useState<string>("");

  return (
    <ul className=" flex w-screen mx-[5%] cursor-pointer ">
      <PanelsContext.Provider value={{ selectedTabId, setSelectedTabId }}>
        {children}
      </PanelsContext.Provider>
    </ul>
  );
};
