import { useEffect, useState } from "react";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import LandingPage from "./Components/LandingPage";
import Projects from "./Components/Projects";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
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
      <LandingPage />
      <AboutMe />
      <Projects />
      <Contact />
      <ScrollToTop scroll={scroll} />
    </div>
  );
}

export default App;
