import { useContext, useEffect } from "react";
import { PanelsContext } from "../contexts/PanelsConext";

export interface PanelProps {
  title: string;
  img: string;
  active?: boolean;
  id: string;
}
export const Panel = ({ id, title, img, active }: PanelProps) => {
  const { selectedTabId, setSelectedTabId } = useContext(PanelsContext);

  const handleClick = () => {
    if (setSelectedTabId) setSelectedTabId(id);
  };

  useEffect(() => {
    if (active && setSelectedTabId) setSelectedTabId(id);
  }, [active]);

  const isActive = id === selectedTabId;

  return (
    <li
      className={` bg-cover bg-center bg-no-repeat h-[80vh] rounded-3xl text-white pointer m-2.5 relative easy-in duration-700 ${
        isActive ? "flex-[5]" : "flex-[.5]"
      } `}
      style={{ backgroundImage: `url(${img})` }}
      onClick={handleClick}
    >
      <h3
        className={`text-2xl absolute m-0 bottom-10 left-10 ${
          isActive ? "opacity-1" : "opacity-0"
        } `}
      >
        {title}
      </h3>
    </li>
  );
};
