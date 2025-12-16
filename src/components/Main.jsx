import "../style/Main.css";
import Banner from "./Banner";
import Contact from "./Contact";
import Services from "./Services";

function Main() {
  return (
    <div className="main_container">
      <Banner />
      <Services />
      <Contact />
    </div>
  );
}

export default Main;
