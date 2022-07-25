import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      Made with{" "}
      <span className="love">
        <FontAwesomeIcon icon={faHeart} />
      </span>{" "}
      for Xing
    </div>
  );
};

export default Footer;
