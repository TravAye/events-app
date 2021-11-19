import { Link } from "react-router-dom";
import "./Popup.css";

const Popup = () => {
  return (
    <div className="Popup">
      <Link to="/">
        <p className="home">Home</p>
      </Link>
      <p>Your search did not have any results. Please try a different query.</p>
    </div>
  );
};

export default Popup;
