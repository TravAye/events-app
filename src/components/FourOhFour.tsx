import { Link } from "react-router-dom";
import "./FourOhFour.css";
import alienImg from "../assets/julia-borges-hd0ZKh8VjhQ-unsplash.jpg";

const FourOhFour = () => {
  return (
    <div className="FourOhFour">
      <h1>404 Page Not Found</h1>
      <Link className="et" to="/">
        ( ET Go Home!!!!!! )
      </Link>
      <img src={alienImg} alt="group of aliens" />
    </div>
  );
};

export default FourOhFour;
