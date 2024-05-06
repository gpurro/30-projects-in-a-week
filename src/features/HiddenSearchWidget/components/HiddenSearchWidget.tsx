import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export const HiddenSearchWidget = () => {
  const [isActive, setIsActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive) searchInputRef.current?.focus();
  }, [isActive]);

  return (
    <div /*"search"*/ className=" relative h-12 ">
      <input
        type="search"
        ref={searchInputRef}
        className={`bg-white border-0 text-lg p-4 h-12 transition-[width] duration-300 ease-in-out focus:outline-none ${
          isActive ? "w-[200px]" : "w-12 "
        }`}
        placeholder="Search..."
      />
      <button
        onClick={() => setIsActive(!isActive)}
        className={`bg-white border-0 cursor-pointer text-lg absolute top-0 left-0 m-auto h-12 w-12 transform duration-300 ease-in-out focus:outline-none ${
          isActive ? "translate-x-[200px]" : ""
        }`}
      >
        <FaSearch className="inline"></FaSearch>
      </button>
    </div>
  );
};
