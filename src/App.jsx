import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Exp from "./Component/Exp";
import Home from "./Component/Home";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import "./App.css";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Exp/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
      
    </>
  )

}

export default App;
