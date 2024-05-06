import { createHashRouter } from "react-router-dom";
import { HomePage } from "./features/Home/HomePage";
import { ExpandingCardsPage } from "./features/ExpandingCards/pages/ExpandingCardsPage";
import { ProgressStepsPage } from "./features/ProgressSteps/pages/ProgressStepsPage";

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
    {
      path: "/progress-steps",
      element: <ProgressStepsPage />,
    },
    {
      path: "*",
      element: <HomePage />,
    },
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);
