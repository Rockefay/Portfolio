import { useState } from "react";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import LandingPage from "./Components/LandingPage";
import Projects from "./Components/Projects";

function App() {
  const [aboutPosition, setAboutPosition] = useState();
  const [projectsPosition, setProjectsPosition] = useState();
  const [contactPosition, setContactPosition] = useState();

  return (
    <div className="App">
      <LandingPage
        aboutPosition={aboutPosition}
        projectsPosition={projectsPosition}
        contactPosition={contactPosition}
      />
      <AboutMe position={aboutPosition} setPosition={setAboutPosition} />
      <Projects position={projectsPosition} setPosition={setProjectsPosition} />
      <Contact position={contactPosition} setPosition={setContactPosition} />
    </div>
  );
}

export default App;
