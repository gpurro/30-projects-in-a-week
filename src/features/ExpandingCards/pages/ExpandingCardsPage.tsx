import { Panel } from "../components/Panel";
import { Panels } from "../components/Panels";

export const ExpandingCardsPage = () => {
  const style = {
    fontFamily: "'Muli', sans-serif",
  };
  
  return (
    <div
      className=" box-border bg-[#f1f1f1] flex items-center justify-center h-screen overflow-hidden m-0 "
      style={style}
    >
      <Panels>
        <Panel
          active
          title="Mountains and Clouds"
          img="/expanding-cards/image1.avif"
          id="panel-1"
        />
        <Panel
          title="City on Winter"
          img="/expanding-cards/image2.avif"
          id="panel-2"
        />
        <Panel
          title="Sunny Beach"
          img="/expanding-cards/image3.avif"
          id="panel-3"
        />
        <Panel
          title="Wild Forest"
          img="/expanding-cards/image4.avif"
          id="panel-4"
        />
        <Panel
          title="Explore the World"
          img="/expanding-cards/image5.avif"
          id="panel-5"
        />
      </Panels>
    </div>
  );
};
