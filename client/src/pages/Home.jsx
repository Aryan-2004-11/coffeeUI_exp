import React from "react";
import Header from "../components/common/Header"; // Import the Header component
import HeroBanner from "../components/common/HeroBanner";
import Footer from "../components/common/Footer";
import About from "../components/common/About";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner/>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
