import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cardss">
      <div className="awesome">
        {/* dark Mode */}
        <span style={{ color: "#242d49" }}></span>
        <span style={{ alignSelf: "center" }}>
          Flexible support team benefits
        </span>
        <span
          style={{
            width: "90%",
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          See how companies work with Lunar to deliver flexibility and scale
        </span>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Resolve 80% of tickets as you grow 3x, 5x or 10x. Our team expands organically, only as you need us. Learn more about how it works or read client growth stories."
              label="SCALE FAST"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Resolve issues quickly across all channels: email, chat, social media and voice. Promote dedicated agents to manage specific channels."
              label="LAUNCH NEW CHANNELS"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Start small with Support as a Service, then expand later into multichannel, proactive onboarding and insights. Get started with just 150 tickets/month."
              label="PREPARE FOR THE FUTURE"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Our service is fully managed. We use three levels of management: local, client-specific and data-driven. This improves performance autonomously."
              label="IMPROVE AUTOMATICALLY"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Hire onshore or offshore. Support as a Service is dynamic, so you only commit to the next month. Learn more about pricing, paid monthly, based on output."
              label="NO COMMITMENTS"
              path="/products"
            />

            <CardItem
              src="images/img-8.jpg"
              text="We pre-train agents to work with new clients. Get in touch with our onboarding team to either clear the inbox now or launch a long term solution."
              label="START IN ONE WEEK"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
