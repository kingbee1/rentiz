import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import house1 from "../assets/houses/house1.jpg";
import house2 from "../assets/houses/house2.jpg";
import house3 from "../assets/houses/house3.jpg";
import house4 from "../assets/houses/house4.jpg";
import house5 from "../assets/houses/house5.jpg";
import house6 from "../assets/houses/house6.jpg";

const Selling = () => {
  return (
    <div>
      <Navbar />
      <section className="container buying__container">
        <h1>Houses Listed</h1>

        <div className="buying__container-content">

        <div className="buying__container-left">
          <div className="buying__content-image">
          
            <div className="buying__content-image1">
              <img src={house1} alt="house for sale" />
              <div className="buying__content-info">
                <h3>3 Bedroom Apartment</h3>
                <h5>Awolowo road, Airport</h5>
                <h5>#55,000,000</h5>
              </div>
            </div>

            <div className="buying__content-image1">
              <img src={house2} alt="house for sale" />
              <div className="buying__content-info">
                <h3>2 Plot of Land</h3>
                <h5>Awolowo road, Airport</h5>
                <h5>#56,000,000</h5>
              </div>
            </div>

            <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Hacres of Land</h3>
              <p>Mowe Ibafo, Ogun State</p>
              <p>#60,000,000</p>
            </div>
          </div>
            
          </div>

          <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>Detached Duplex</h3>
              <h5>Obadore, Ajah</h5>
              <h5>#85,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <h5>Awolowo road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>
          
        </div>

        <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <h5>Awolowo road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <h5>Awolowo road, Airport</h5>
              <h5>#56,000,000</h5>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>
          
        </div>

        <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>
          
        </div>

        <div className="buying__content-image">
          
          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house2} alt="house for sale" />
            <div className="buying__content-info">
              <h3>3 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          <div className="buying__content-image1">
            <img src={house1} alt="house for sale" />
            <div className="buying__content-info">
              <h3>2 Bedroom Apartment</h3>
              <p>Awolowo road, Airport</p>
              <p>#56,000,000</p>
            </div>
          </div>

          
          
        </div>

          

          </div>

          

        
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Selling
