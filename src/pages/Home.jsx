import React from "react";
import Compcont from "../components/CompCont";
import Footer from "../components/Footer";
import Welcomeslider from '../parts/WelcomeSlider'

const Home = () => {
  return (
    <>
      <Welcomeslider/>
      <Compcont/>
      <Footer/>
    </>
  );
};

export default Home;
