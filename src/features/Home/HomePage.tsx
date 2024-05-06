import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="text-center p-6 m-0 mt-36">
      <h1>30 projects in a Week</h1>
      <div className="p-6 mt-16">
        <Link to="/expanding-cards">Expanding Cards</Link>
      </div>
    </div>
  );
};
