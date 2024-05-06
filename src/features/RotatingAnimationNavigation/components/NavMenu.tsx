import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";

export const NavMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const links = [
    {
      icon: <FaHome className=" inline text-xl mr-3" />,
      text: "Home",
      url: "#",
    },
    {
      icon: <FaUserAlt className=" inline text-xl mr-3" />,
      text: "About",
      url: "#",
    },
    {
      icon: <FaEnvelope className=" inline text-xl mr-3" />,
      text: "Contact",
      url: "#",
    },
  ];
  const margins = ["mx-0", "mx-[15px]", "mx-[30px]"];
  const translate = [
    "-translate-x-[100%]",
    "-translate-x-[150%]",
    "-translate-x-[200%]",
  ];

  return (
    <nav className=" fixed bottom-[40px] left-0 z-50">
      <ul className=" list-none pl-7">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={` uppercase text-white my-[40px] ${
                margins[index]
              } transform duration-300 ease-in ${
                isMenuOpen ? "" : translate[index]
              }`}
            >
              {link.icon}{" "}
              <a
                href={link.url}
                className=" text-[#fafafa] no-underline transition-all duration-500 hover:text-[#ff7979] hover:font-bold "
              >
                {" "}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
