import "../style/Services.css";
import imgOne from "../assets/coding.png";
import imgTwo from "../assets//illustration.png";
import imgThree from "../assets/Microphone.png";
import imgFour from "../assets/game-development.png";
import imgFive from "../assets/Photographer.png";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function Services() {
  return (
    <div className="services_section">
      <h1>My Services</h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="services_container">
        <div>
          <img src={imgOne} alt="coding" />
          <p>web development</p>
          <span>blog, e-commerce</span>
        </div>
        <div>
          <img src={imgTwo} alt="coding" />
          <p>UX/UI Design</p>
          <span>Mobile app, website design</span>
        </div>
        <div>
          <img src={imgThree} alt="coding" />
          <p>Sound Design</p>
          <span>Voice Over, Beat Making</span>
        </div>
        <div>
          <img src={imgFour} alt="coding" />
          <p>Game Design</p>
          <span>Character Design, Props & Objects</span>
        </div>
        <div>
          <img src={imgFive} alt="coding" />
          <p>photography</p>
          <span>portrait, product photography</span>
        </div>
        <div>
          <p>advertising</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
            diam in ac dictum a urna viverra morbi.{" "}
          </span>
          <Link>
            ORDER NOW <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
