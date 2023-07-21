import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title secondaryExpand">
            <div className="orange-circle" />
            <motion.h1
              className="test1"
              transition={{ type: "ease-in", duration: 2 }}
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Your Ultimate
              <br />
              Property
              <br /> Destination
            </motion.h1>
          </div>
          <div className="flexColStart secondaryExpand secondaryText hero-desc">
            <span>Looking to buy a property of your liking?</span>
            <span>Worry no more, your search ends here!</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="button"
            >
              Search
            </motion.button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={7800} end={8000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={100} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={18} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "ease-in", duration: 2 }}
            className="image-container"
          >
            <img src="./pics/hero-image.png" alt="img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
