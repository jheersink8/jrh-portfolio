import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import About from "./components/Main/About/About";
import Projects from "./components/Main/Projects/Projects";
import Resume from "./components/Main/Resume/Resume";
import Skills from "./components/Main/Skills/Skills";

import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./components/Nav/ThemeContext";
import { SoundProvider, SoundContext } from "./components/Nav/ThemeContext";

// import { ThemeContext } from "./components/Nav/Nav";
// import "./styles/GlobalStyleDark.css";
// import "./styles/GlobalStyleLight.css";

function App() {
  // console.log(ThemeContext);
  return (
    <>
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Resume />
    </>
  )
}

export default App
