//import Earth from './components/Earth';
import Nav from "./components/Nav";
import Model from "./components/Model";
import WorkCards from "./components/WorkCards";
import Projects from "./components/Projects";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="flex flex-col items-center bg-white overflow-hidden">
      <Nav></Nav>
      <Model></Model>
      <WorkCards></WorkCards>
      <Projects></Projects>
      <Cta></Cta>
    </div>
  );
}

export default App;
