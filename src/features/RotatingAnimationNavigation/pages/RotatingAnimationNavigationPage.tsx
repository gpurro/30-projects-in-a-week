import { FaBars, FaTimes } from "react-icons/fa";

import { NavMenu } from "../components/NavMenu";
import "./RotatingAnimationNavigationPage.css";
import { useState } from "react";

export const RotatingAnimationNavigationPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={` bg-[#fafafa] origin-top-left transform duration-500 linear w-full min-h-screen p-[50px] ${
          isMenuOpen ? " -rotate-[20deg] " : ""
        }`}
      >
        <div className=" fixed -top-[100px] -left-[100px]">
          <div
            className={`bg-[#ff7979] h-[200px] w-[200px] rounded-[50%] relative transform duration-500 ease-linear ${
              isMenuOpen ? " -rotate-[70deg] " : ""
            }`}
          >
            <button
              id="close"
              className=" cursor-pointer absolute top-[60%] h-[100px] bg-transparent border-0 text-white text-[26px] focus:outline-none left-1/2 origin-top-left rotate-90 "
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <button
              id="open"
              className=" cursor-pointer absolute top-1/2 h-[100px] bg-transparent border-0 text-white text-[26px] focus:outline-none left-[60%]"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>

        <div className=" max-w-[1000px] my-[50px] mx-auto">
          <h5>Amazing Article</h5>
          <small>Florin Pop</small>
          <p className=" text-[#555] text-lg py-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>

          <h6 className=" my-3 ">My Dog</h6>
          <img
            className=" max-w-full "
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            alt="doggy"
          />
          <p className=" text-[#555] text-lg py-3 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>
      <NavMenu isMenuOpen={isMenuOpen} />
    </>
  );
};
