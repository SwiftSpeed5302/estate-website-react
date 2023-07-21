import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Call from "./components/Call/Call";
import Value from "./components/Value/Value";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <motion.div
          className="white-gradient"
          animate={{
            scale: [1, 2, 1],
            // rotate: [0, 0, 180, 180, 0],
            borderRadius: ["50%", "50%", "50%"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Call />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
