import "./App.css"
import "./Components/header.css"
import "./Components/about.css"
import "./Components/projects.css"
import "./Components/ProjectCard.css"
import "./Components/contact.css"
import Header from "./Components/header";
import About from "./Components/about";
import Projects from "./Components/projects";
import Contact from "./Components/contact";


function App() {
  return (
    <main>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}
export default App;