import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import "../style/LeftSide.css";
import myImage from "../assets/_MG_5802.jpg";
import { FaDownload } from "react-icons/fa6";

const OverlapIcon = ({ size = 20, color = "orange" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    stroke={color}
    strokeWidth="6"
    strokeLinejoin="round"
  >
    <rect x="20" y="20" width="40" height="40" />
    <rect x="40" y="40" width="40" height="40" />
  </svg>
);

const extraSkillsData = [
  "Style, Less, Css",
  "Bootstrap, Tailwind",
  "Figma, UI/UX",
  "Responsive Design",
  "Git & GitHub",
];

function LeftSide() {
  return (
    <aside className="left-side">
      <div className="leftside-content">
        <img src={myImage} alt="my image" />
        <b>Fozilxon Abdusalamov</b>
        <p className="job">Frontend Developer</p>

        <div className="icons">
          <a>
            <FaFacebookF />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaLinkedinIn />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="leftcontent-info">
        <InfoRow
          label="Age:"
          value={(() => {
            const b = new Date("2006-01-25");
            const t = new Date();
            return (
              t.getFullYear() -
              b.getFullYear() -
              (t < new Date(t.getFullYear(), b.getMonth(), b.getDate()) ? 1 : 0)
            );
          })()}
        />

        <InfoRow label="Residence:" value="U-FLEX" />
        <InfoRow label="Freelance:" value="Available" />
        <InfoRow label="Address:" value="Tashkent, Uzbekistan" />
      </div>

      <ProgressBlock
        title="Language"
        items={[
          { name: "Uzbek", value: "100%" },
          { name: "Russian", value: "20%" },
          { name: "English", value: "40%" },
        ]}
      />

      <ProgressBlock
        title="Skills"
        items={[
          { name: "HTML", value: "100%" },
          { name: "CSS", value: "90%" },
          { name: "JavaScript", value: "70%" },
          { name: "ReactJs", value: "80%" },
          { name: "Python", value: "40%" },
        ]}
      />

      <div className="extra-skills">
        <p className="section-title">Extra Skills</p>

        {extraSkillsData.map((item, index) => (
          <div key={index} className="skill-item">
            <OverlapIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="download-cv">
        <button>
          Download CV <FaDownload />
        </button>
      </div>
    </aside>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <p>{label}</p>
      <span>{value}</span>
    </div>
  );
}

function ProgressBlock({ title, items }) {
  return (
    <div className="leftsidecontent-language">
      <p className="section-title">{title}</p>
      {items.map((item, i) => (
        <div key={i}>
          <span>{item.name}</span>
          <span>{item.value}</span>
          <div className="bar">
            <p style={{ width: item.value }}></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeftSide;
