import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import { Footer } from "./components/Footer";

export default function App() {

  return (
    <div>
      <NavBar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  ); 
}

