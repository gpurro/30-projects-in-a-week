import { createHashRouter } from "react-router-dom";
import { HomePage } from "./features/Home/HomePage";
import { ExpandingCardsPage } from "./features/ExpandingCards/pages/ExpandingCardsPage";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/expanding-cards",
      element: <ExpandingCardsPage />,
    },
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);
