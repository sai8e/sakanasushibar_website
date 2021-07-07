import React, { useEffect, useState } from "react";
import "./Contact.css";
import Footer from "../Footer";

export default function Contact() {

  return (
    <>
      <div className="contact_container">
        <h2 className="orange">Contact: </h2>
        <h2>Julie Gombojav</h2>
        <h2>Owner/General Manager</h2>
        <h2>PHONE: 801-282-0670</h2>
      </div>
      <Footer />
    </>
  );
}
