import React from "react";
import "./Call.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Call = () => {
  return (
    <section id="cc-wrapper">
      <div className="paddings innerWidth flexCenter call-container">
        {/* Left Side */}
        <div className="flexColStart call-left">
          <div className="flexColStart call-title">
            <span className="orangeText">Any concerns?</span>
            <span className="primaryText">Feel free to contact us.</span>
            <span className="secondaryText">
              Discover Your Home, Discover Happiness.
            </span>
          </div>
          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">123 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* Second Row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">123 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* ------- */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">123 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* Second Row */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">SMS</span>
                    <span className="secondaryText">123 456 789</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flexEnd call-right">
          <div className="image-container">
            <img src="/pics/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
