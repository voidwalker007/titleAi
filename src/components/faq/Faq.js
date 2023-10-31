import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import "../faq/Faq.css";
export const Faq = () => {
  const data = [
    {
      question: "What is the purpose of the website?",
      answer:
        "The purpose of the website is to generate catchy and tone-specific titles for YouTube and Instagram videos.",
    },
   
    {
      question: "What video types can I generate titles for?",
      answer:
        "You can generate titles for both short form videos and long form videos.",
    },

    {
      question: "Does the website generate unlimited titles?",

      answer:
        "Yes, the website offers unlimited title generation. Users can generate as many titles as they need to find the perfect one for their text.",
    },
    {
      question: "Can the titles be customized?",
      answer:
        " Yes, the website offers highly customizable titles. Users can choose the length and tone of the titles, allowing them to find the perfect match for their text.    ",
    },
    {
      question: "Are the titles SEO friendly?",
      answer:
        " Yes, the generated titles are SEO friendly and designed to help improve visibility and ranking on search engines.",
    },
    {
      question: "Is the website free to use?",
      answer: "Yes,it is clear the website is free to use",
    },
    {
      question: " How do I copy the generated title to the clipboard?",
      answer:
        "The generated title can be copied to the clipboard by clicking on the *Copy* button next to the title. This will allow you to easily paste the title into your content.",
    },
    {
      question: "Can I use the generated title for any type of content?",
      answer:
        "Yes, the generated titles can be used for any type of content, including articles, blog posts, and more.",
    },
  ];
  const [activeKey, setActiveKey] = useState(0);

  return (
    <div className="faq-container">
      <div className="faq-heading">
        <h2>
          {" "}
          Frequently Asked Questions (<strong>FAQ</strong>)
        </h2>
      </div>
      <div className="faq-accordion mt-4">
        {data &&
          data.map((v, i) => {
            return (
              <div
                key={i}
                class="accordion"
                id="accordionPanelsStayOpenExample"
              >
                <div class="accordion-item">
                  <h2
                    class="p-2  accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    Q: {v.question}
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">A: {v.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
