//import Earth from './components/Earth';
import Nav from "./components/Nav";
import Model from "./components/Model";
import WorkCards from "./components/WorkCards";
import Projects from "./components/Projects";
import Cta from "./components/Cta";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";

function App() {
  return (
    <div className="flex flex-col items-center bg-white overflow-hidden">
      <Nav></Nav>
      <Model></Model>
      <WorkCards></WorkCards>
      <Projects></Projects>
      <Cta></Cta>
      <Feedback></Feedback>
      <Footer></Footer>
      <Footer1></Footer1>
    </div>
  );
}

export default App;
