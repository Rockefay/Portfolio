import { useEffect, useState } from "react";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import LandingPage from "./Components/LandingPage";
import Projects from "./Components/Projects";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [aboutPosition, setAboutPosition] = useState();
  const [projectsPosition, setProjectsPosition] = useState();
  const [contactPosition, setContactPosition] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  return (
    <div className="App">
      <LandingPage
        aboutPosition={aboutPosition}
        projectsPosition={projectsPosition}
        contactPosition={contactPosition}
      />
      <AboutMe setPosition={setAboutPosition} />
      <Projects setPosition={setProjectsPosition} />
      <Contact setPosition={setContactPosition} />
      <ScrollToTop scroll={scroll} />
    </div>
  );
}

export default App;
