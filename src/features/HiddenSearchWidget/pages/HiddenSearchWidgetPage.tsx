import { HiddenSearchWidget } from "../components/HiddenSearchWidget";

export const HiddenSearchWidgetPage = () => {
  const style = {
    fontFamily: "Roboto', sans-serif",
    backgroundImage: "linear-gradient(90deg, #7d5fff, #7158e2)",
  };
  return (
    <div
      className="flex items-center justify-center h-screen overflow-hidden"
      style={style}
    >
      <HiddenSearchWidget></HiddenSearchWidget>
    </div>
  );
};
