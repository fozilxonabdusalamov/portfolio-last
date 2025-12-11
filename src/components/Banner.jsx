import "../style/Banner.css";
import { FaArrowRight } from "react-icons/fa6";
import MyImage from '../assets/_MG_5802.jpg'

function Banner() {
  return (
    <div className="banner_container">
      <div>
        <h1>
          I'm Fozilxon Abdusalamov <span>Front-end</span> Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <button>
          Hire Me
          <FaArrowRight />
        </button>
      </div>
      <div>
        <img src={MyImage} alt="Fozilxon Abdusalamov" />
      </div>
    </div>
  );
}

export default Banner;
