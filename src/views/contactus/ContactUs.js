import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Faq } from "../../components/faq/Faq";
import { FAQSection } from "../../components/faqSection/FAQSection";

import "./ContactUs.css";
export const ContactUs = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuggest, setShowSuggest] = useState(true);
  const [showHandle, setshowHandle] = useState(false);

  const firstClickHandler = () => {
    setShow(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  };
  useEffect(() => {}, []);

  return (
    <div class="card main-card" style={{ marginLeft: "20%" }}>
<Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <link rel='canonical' href='/contact' />
        <meta
          name="description"
          content="TitleAI generates engaging and SEO-optimized titles for your video/articles, increasing visibility and driving traffic to your site."
        />

<meta
          name="keyword"
          content="Title ai,Title generation, SEO optimization, OpenAI, Language models, Content visibility, Traffic generation, Catchy titles, Attention-grabbing titles, Search engine ranking, Relevant titles, best titles, ai titles"
        />
      </Helmet>


      <div class="contact-us">
        <h1>Contact Us</h1>

      
        

    

        
       <div className="d-flex justify-content-center"> 
       {showSuggest ? (
          <button
            className="button btn-sm "
            onClick={() => {
              setshowHandle(true);
            }}
            style={{ display: showHandle ? "none" : "block" }}
          >
            {" "}
            Socials
          </button>
        ) : (
          ""
        )}
        {showHandle && (
          <>
            <h6>
              Great!, enlighten me. I can't wait to hear your brilliance.
              Here...{" "}
            </h6>{" "}
            <p className="lower_text">
             
            <a href="https://www.linkedin.com/in/akshay7777" target="_blank">   <i class="fab fa-linkedin-in"></i> Akshay </a>
            </p>
          </>
        )}
       </div>
      </div>

 
    </div>
  );
};
