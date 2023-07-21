import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import house from '../assets/home.png'
import vintage from "../assets/feature1.png"

const Home = () => {
  return (
      <div>
        <Navbar />

        <header className="container header__container">
            <div className="header__content">
            <h1>Perfect Way To Buy And Sell a House</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quam laborum sequi voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quam laborum sequi voluptate.
            </p>
            </div>
            <div className="header__image">
                <img src={house} alt="houes" />
            </div>
        </header>
       
        <section className="container">
            <h2>Featured In</h2>
            <div className="feature__image">
                <img src={vintage} alt="" />
                <img src={vintage} alt="" />
                <img src={vintage} alt="" />
                <img src={vintage} alt="" />
                <img src={vintage} alt="" />
            </div>
           
        </section>
        <Footer />
    </div>
  );
};

export default Home;
