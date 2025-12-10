import { CgDarkMode } from "react-icons/cg";
import { FaHome, FaFileCsv, FaCommentAlt } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";
import { RiQuillPenFill } from "react-icons/ri";
import '../style/RigntSide.css'

function RightSide() {
  return (
    <div className="right-side">
      <div className="top-icon">
        <CgDarkMode />
      </div>

      <div className="menu-items">
        <div className="item">
          <FaHome />
          <p>Home</p>
        </div>

        <div className="item">
          <FaFileCsv />
          <p>Services</p>
        </div>

        <div className="item">
          <PiStudentBold />
          <p>Study</p>
        </div>

        <div className="item">
          <MdOutlineWork />
          <p>Work</p>
        </div>

        <div className="item">
          <RiQuillPenFill />
          <p>Blog</p>
        </div>

        <div className="item">
          <FaCommentAlt />
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
