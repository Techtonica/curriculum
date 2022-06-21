import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="flex">
        <h1 className="header">Animal Sighting tracker</h1>
        <div className="navbar">
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>

            <li>
              <Link to="add">Add Sighting</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
