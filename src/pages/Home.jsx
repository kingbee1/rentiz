import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
        <section className="container">
            <h3>Perfect Way To Buy And Sell a House</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quam laborum sequi voluptate.
            </p>
        </section>
        <Footer />
    </div>
  );
};

export default Home;
