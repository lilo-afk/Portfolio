import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import HomeSection from "./components/HomeSection";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header></Header>
    <HomeSection></HomeSection>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
  </>
);
