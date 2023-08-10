import Tilt from "react-parallax-tilt";
import "./Logo.css"
import brain from "./brain.png"

const Logo = () => {
  return (
    <div  className="ma4 mt0">
      <Tilt className="tilt br2 shadow-2" style={{ height: "100px", width: "100px", backgroundColor: "darkgreen" }}>
          <img src={brain} alt="" />
      </Tilt>
    </div>
  );
};

export default Logo;
