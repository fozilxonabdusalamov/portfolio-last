import LeftSide from "./components/LeftSide";
import Main from "./components/Main";
import RightSide from "./components/RightSide";
import './App.css'


function App() {
  return (
    <div className="app_container">
      <LeftSide />
      <Main />
      <RightSide />
    </div>
  );
}

export default App;
