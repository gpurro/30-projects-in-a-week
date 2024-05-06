import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="text-center p-6 m-0 mt-36">
      <h1>30 projects in a Week</h1>
      <div className="p-6 mt-16">
        <ul>
          <li>
            <Link to="/expanding-cards">Expanding Cards</Link>
          </li>
          <li>
            <Link to="/progress-steps">Progress Steps</Link>
          </li>
          <li>
            <Link to="/rotating-animation-navigation">
              Rotating Animation Navigation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
