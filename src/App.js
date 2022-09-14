import AboutMe from "./Components/AboutMe";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
