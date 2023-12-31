import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/buying.css";
import house1 from "../assets/houses/house1.jpg";
import house2 from "../assets/houses/house2.jpg";
import house3 from "../assets/houses/house3.jpg";
import house4 from "../assets/houses/house4.jpg";
import house5 from "../assets/houses/house5.jpg";
import house6 from "../assets/houses/house6.jpg";

const Buying = () => {
  return (
    <div>
      <Navbar />
      <section className="container buying__container">
        <h1>Buying</h1>

        <div className="buying__container-content">

        <div className="buying__container-left">
          <div className="buying__content-image">
          
            <div className="buying__content-image1">
              <img src={house1} alt="house for sale" />
              <div className="buying__content-info">
                <h3>Detached Triplex</h3>
                <h5>Awolowo road, Airport, Lagos</h5>
                <h5>#55,000,000</h5>
              </div>
            </div>

            <div className="buying__content-image1">
              <img src={house2} alt="house for sale" />
              <div className="buying__content-info">
                <h3>2 Bedroom Apartment</h3>
                <h5>Lekki Phase 1 Lekki Lagos</h5>
                <h5>#56,000,000</h5>
              </div>
            </div>

            <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <h5>Line 2 road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>
            
          </div>

          <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>Semi-Detached Bungalow</h3>
              <h5>Line 2 road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>Detached Duplex</h3>
              <h5>Awolowo road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>Terrace</h3>
              <h5>Osapa London, Lekki</h5>
              <h5>#150,000,000</h5>
            </div>
          </div>
          
        </div>

        <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <h5>Awolowo road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <h5>Awolowo road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <h5>Line 2 road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>
          
        </div>

        <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <h5>Line 2 road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>
          
        </div>

        <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>IKEJA</h3>
              <h5>Line 2 road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>
          
        </div>

          </div>

          
         

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Buying;
