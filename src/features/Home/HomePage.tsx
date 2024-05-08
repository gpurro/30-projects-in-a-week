import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="text-center p-6 m-0 mt-36">
      <h1>30 Projects in a Week!</h1>
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
          <li>
            <Link to="/hidden-search-widget">Hidden Search Widget</Link>
          </li>
          <li>
            <Link to="/form-input-wave">Form Input Wave</Link>
          </li>
          <li>
            <Link to="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
