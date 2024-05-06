import { Panel } from "../components/Panel";
import { Panels } from "../components/Panels";

export const ExpandingCardsPage = () => {
  return (
    <div className=" box-border flex items-center justify-center h-screen overflow-hidden m-0">
      <Panels>
        <Panel
          active
          title="Mountains and Clouds"
          img="/public/expanding-cards/image1.avif"
          id="panel-1"
        />
        <Panel
          title="City on Winter"
          img="/public/expanding-cards/image2.avif"
          id="panel-2"
        />
        <Panel
          title="Sunny Beach"
          img="/public/expanding-cards/image3.avif"
          id="panel-3"
        />
        <Panel
          title="Wild Forest"
          img="/public/expanding-cards/image4.avif"
          id="panel-4"
        />
        <Panel
          title="Explore the World"
          img="/public/expanding-cards/image5.avif"
          id="panel-5"
        />
      </Panels>
    </div>
  );
};
