import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "../ContactForm";
import ContactInfoItem from "../ContactInfoItem";
import SectionTitle from "../SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 5rem 0;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 5rem;
    justify-content: space-between;
    position: relative;
    width: 80%;
    filter: drop-shadow(0 0 0.75rem #fca61f);
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 60%;
    background-color: #f5a794;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 0.75rem crimson);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SectionTitle heading="contact" subheading="get in touch" />
        <div
          className="contactSection__wrapper"
          style={{
            border: "1px solid #fca61f",
            borderRadius: "12px",
            padding: "2rem",
            width: "90%",
            backgroundColor: "#fffbf0",
          }}
        >
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" />
            <ContactInfoItem icon={<MdEmail />} text="webcifar@gmail.com" />
            <ContactInfoItem text="Chittagong, Bangladesh" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
