//import Earth from './components/Earth';
import Nav from "./components/Nav";
import Model from "./components/Model";
import WorkCards from "./components/WorkCards";
import Projects from "./components/Projects";
import Cta from "./components/Cta";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="flex flex-col items-center bg-white overflow-hidden">
      <Nav></Nav>
      <Model></Model>
      <WorkCards></WorkCards>
      <Projects></Projects>
      <Cta></Cta>
      <Feedback></Feedback>
    </div>
  );
}

export default App;
