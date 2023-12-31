import React from "react";
import '../styles/home.css'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import house from "../assets/home.png";
import vintage from "../assets/feature1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuBedDouble } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { TbRulerMeasure } from "react-icons/tb";
import { FaSearchDollar } from "react-icons/fa";
import { GiExtraTime } from "react-icons/gi";
import { TiStopwatch } from "react-icons/ti";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import house1 from "../assets/house.png"
import house2 from "../assets/house2.png"


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Navbar />

      <header className="container header__container">
        <div className="header__content">
          <h1>Perfect Way To Buy And Sell A House</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            laborum sequi voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam laborum sequi voluptate.
          </p>
        </div>
        <div className="header__image">
          <img src={house} alt="houes" />
        </div>

        <div className="header__search">
          <form className="header__search-form">
            <input type="text"  placeholder="search" />
            <button type="submit">search</button>
          </form>
        </div>
        
      </header>

      <section className="container feature__container">
        <h1>Featured In</h1>
        <div className="feature__image">
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
        </div>
      </section>

      {/****************** RESIDENCE ******************/}

      <section className="container residence__container">
        <h1>Popular Residence 1B232F</h1>
        <Carousel responsive={responsive} className="residence__image">
          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="residence__btn">
          <button className="btn">View All Properties</button>
        </div>
      </section>

      {/****************** CHOOSE ******************/}

      <section className="container choose__container">

        <h1>Why Choose Us?</h1>

        <div className="choose__content">

          <div className="choose__card">
          <div className="icon-wrap">
            <FaSearchDollar className="icon choose_icon" />
          </div>
          <h2>Easy To Find</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit molestiae saepe mollitia et aliquam, nesciunt quae!</p>
          </div>

          <div className="choose__card">
            <div className="icon-wrap">
              <GiExtraTime className="icon choose_icon" />
            </div>
            <h2>Affordable Prices</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit molestiae saepe mollitia et aliquam, nesciunt quae!</p>
          </div>

          <div className="choose__card">
            <div className="icon-wrap">
                <TiStopwatch className="icon choose_icon" />
            </div>
            <h2>Quick Process</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit molestiae saepe mollitia et aliquam, nesciunt quae!</p>
          </div>

        </div>
    
        <div className="choose__base">
            <BiSolidQuoteAltLeft className="icon choose_icon"/>
            <h2>
            Using thank you referral cards is a highly effective way to ensure your customers recommend your real estate services more often and proactively.
            We can proudly tell you that we will be using their servies again and again.
            </h2>
            <div className="choose__base-2">
                <div>
                    <h3>Elano Pravo</h3>
                    <h4>Ceo, Upstate</h4>
                </div>
                <div>
                    <RiArrowLeftSLine className="choose_icon"/>
                    <RiArrowRightSLine className="choose_icon"/>
                </div>
            </div>
        </div>

      </section>

      {/****************** HELP PEOPLE ******************/}
      <section className="container help__container">
        <div className="help__content">
            <div className="help__image">
                <img src={house1} alt="house for sale" />
                <img src={house2} alt="house for sale" />
            </div>

            <div className="help__word">
                <h1>We Help People Find Homes</h1>
                <h5>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam consectetur eveniet eos nihil velit perferendis quo libero!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam consectetur eveniet eos nihil velit perferendis quo libero!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam consectetur eveniet eos nihil velit perferendis quo libero!
                </h5>
                <button className="btn">Get in touch</button>
            </div>
        </div>
      </section>

      {/****************** SIMPLY ******************/}

      <section className="container simply__container">
        <div className="simply__content">
            <div className="simply__content-left">
                <h1>Let's Simply Begin With Rentiz</h1>
            </div>
            <div className="simply__content-right">
                <h5>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta aperiam consectetur adipisci quod autem consequuntur numquam harum rerum nulla, omnis nostrum tempora.
                </h5>
                <button className="btn">Get Started</button>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
