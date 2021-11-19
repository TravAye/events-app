import { Link } from "react-router-dom";
import "./Header.css";
import zebraImg from "../assets/fancy zebra 1.png";
import bubbleImg from "../assets/speech-bubble.svg";
import { useContext } from "react";
import BucketListContext from "../context/BucketListContext";

const Header = () => {
  const { bucketList } = useContext(BucketListContext);

  return (
    <header className="Header">
      <div className="title">
        <Link className="header-links" to="/">
          <h1>Sebra Events</h1>
        </Link>
        <Link className="header-links" to="/events/bucketlist">
          See your saved Bucket List!
        </Link>
      </div>

      {bucketList.length === 0 ? (
        <p className="text">Powered by Ticket Master</p>
      ) : (
        <Link to="/events/bucketlist">
          <p className="text">Nice Bucket List, Pal!</p>
        </Link>
      )}

      <img className="bubble" src={bubbleImg} alt="speech bubble" />
      <img className="zebra-pic" src={zebraImg} alt="fancy zebra" />
    </header>
  );
};

export default Header;
