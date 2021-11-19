import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <div className="Footer">
        {showScroll && (
          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Scroll To Top
          </button>
        )}
      </div>
    </>
  );
};

export default Footer;
