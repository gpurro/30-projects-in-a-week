import { createHashRouter } from "react-router-dom";
import { HomePage } from "./features/Home/HomePage";
import { ExpandingCardsPage } from "./features/ExpandingCards/pages/ExpandingCardsPage";
import { ProgressStepsPage } from "./features/ProgressSteps/pages/ProgressStepsPage";
import { RotatingAnimationNavigationPage } from "./features/RotatingAnimationNavigation/pages/RotatingAnimationNavigationPage";
import { HiddenSearchWidgetPage } from "./features/HiddenSearchWidget/pages/HiddenSearchWidgetPage";
import { FormInputWavePage } from "./features/FormInputWave/pages/FormInputWavePage";
import { PokedexPage } from "./features/Pokedex/pages/PokedexPage";

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
      path: "/rotating-animation-navigation",
      element: <RotatingAnimationNavigationPage />,
    },
    {
      path: "/hidden-search-widget",
      element: <HiddenSearchWidgetPage />,
    },
    {
      path: "/form-input-wave",
      element: <FormInputWavePage />,
    },
    {
      path: "/pokedex",
      element: <PokedexPage />,
    },
    {
      path: "*",
      element: <HomePage />,
    },
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);
