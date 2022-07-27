import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experiense/Experience";
import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;
