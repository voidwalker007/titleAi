import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { Toast, ToastContainer } from "react-bootstrap";

import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import "../Custom.css";
import "../bot/TitleBot.css";
import { Loader } from "../spinner/Loader";
import { InputBox } from "../customInput/InputBox";
import Chatbot from "../chatBot/ChatBot";
import { Faq } from "../faq/Faq";
import { Helmet } from "react-helmet";

export const TitleBot = () => {
  const [question, setQuestion] = useState("");
  const [selectedVideoType, setSelectedVideoType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState("");
  const [answer, setAnswer] = useState("");
  const [tone, setTone] = useState("");
  const [activeCard, setActiveCard] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  const [validated, setValidated] = useState(false);
  const [position, setPosition] = useState("top-start");

  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    responseHandler(event);
  };
  useEffect(() => {
    if (selectedVideoType === "short" || selectedVideoType === "long") {
      setIsValid(true);
    }
  }, [isValid, selectedVideoType]);

  const tooltipShort = (
    <Tooltip id="tooltip-short">Suitable for short form Videos</Tooltip>
  );

  const tooltipLong = (
    <Tooltip id="tooltip-long">Suitable for long form Videos</Tooltip>
  );

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const possibleTones = [
    "Informative",
    "Persuasive",
    "Inspirational",
    "Humorous",
    "Sarcastic",
    "Thought-provoking",
    "Emotional",
    "Professional",
    "Conversational",
    "Hype",
  ];

  const parameters = {
    model: "text-davinci-003",
    prompt: `generate 10 catchy and ${tone} tone title for a youtube video on ${question}, don't return any context`,
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const shortParameters = {
    model: "text-davinci-003",
    prompt: `Generate 10 short catchy and ${tone} tone title (less than 10 words) for a youtube shorts or instgram reels on ${question}, don't return any context`,
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  //////////////////////////////
  const responseHandler = async (e) => {
    e.preventDefault();
    setAnswer("");

    if (selectedVideoType === "") {
      setIsValid(false);
    } else {
      if (selectedVideoType === "short") {
        // Generate a title for a short video
        console.log("short", shortParameters);
        generateTitle(shortParameters);
      } else if (selectedVideoType === "long") {
        console.log("short", parameters);
        // Generate a title for a long video
        generateTitle(parameters);
      }
    }
  };

  const generateTitle = async (para) => {
    try {
      setIsLoading(true);
      const res = await openai.createCompletion(para);
      setData(res);
      console.log(res);
      if (res) {
        console.log(res.data.choices[0].text);
        let answer = "";
        res.data.choices.map((v, i) => {
          console.log(v.text);
          answer += v.text + "\n";
        });
        setAnswer(answer);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  ////////////////////

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);


    if (event.target.value.trim().length > 0) {
      setValidated(false);
    }
  };



  useEffect(() => {
    setAnswer(answer);
  }, [answer]);
  return (
    <>
      {/* <Chatbot/> */}
      <ToastContainer position="top-end" className="p-3">


        <Toast
          bg={"success"}
          show={showToaster}
          onClose={() => setShowToaster(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="mr-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Text Copied!</Toast.Body>
        </Toast>
      </ToastContainer>


      <Helmet>
        <meta charSet="utf-8" />
        <title>TitleAi</title>
        <link rel='canonical' href='/' />
        <meta
          name="description"
          content="TitleAI generates engaging and SEO-optimized titles for your video/articles, increasing visibility and driving traffic to your site."
        />

        <meta
          name="keyword"
          content="Title ai,Title generation, SEO optimization, OpenAI, Language models, Content visibility, Traffic generation, Catchy titles, Attention-grabbing titles, Search engine ranking, Relevant titles, best titles, ai titles"
        />
      </Helmet>
      <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="card main-card">
          <Row className="upper-section d-flex justify-content-center p-2 mb-3">
            <Col xs={12} md={12}>
              <h2 className="heading">
                Title<span className="textcolor"> Ai</span> <br />
              </h2>{" "}
              <h3></h3>
              <h4 style={{ fontWeight: "400 !important", color: "white" }}>
                {" "}
                Video titles? Leave it to us.
              </h4>
              <h5
                style={{
                  fontWeight: "100 !important",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                {" "}
                We'll make your dull titles even more exciting for your
                audience.
              </h5>
            </Col>
          </Row>

          <div className="container d-flex justify-content-center flex-column">
            <Form.Group>
              <div className="containerInput">
                <input
                  required
                  placeholder="Enter Your Video Topic"
                  value={question}
                  onChange={handleQuestionChange}
                  type="paragraph"
                />
              </div>
              {validated && (
                <h6 className="invalid-text" type="invalid">
                  Please enter a topic
                </h6>
              )}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Container className="videoTypeSection">
                <Row className="w-100">
                  <Col
                    className="d-flex justify-content-between align-items-center"
                    xs={12}
                    md={6}
                  >
                    <Col xs={6} md={4}>
                      <h6 className="title-length">Title Length</h6>
                    </Col>

                    {/*     ////////////////////////////////////////////////////// */}
                    <Col className="d-flex justify-content-end">
                      <FormGroup>
                        <ButtonGroup>
                          <OverlayTrigger
                            placement="top"
                            overlay={tooltipShort}
                          >
                            <Button
                              variant="secondary"
                              className={
                                selectedVideoType === "short"
                                  ? "custom-btn btn-font"
                                  : "btn-font"
                              }
                              onClick={() => setSelectedVideoType("short")}
                            >
                              Short
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger placement="top" overlay={tooltipLong}>
                            <Button
                              variant="secondary"
                              className={
                                selectedVideoType === "long"
                                  ? "custom-btn btn-font"
                                  : "btn-font"
                              }
                              onClick={() => setSelectedVideoType("long")}
                            >
                              Long
                            </Button>
                          </OverlayTrigger>
                        </ButtonGroup>
                        {!isValid && (
                          <h6 className="invalid-text" type="invalid">
                            Please select
                          </h6>
                        )}
                      </FormGroup>
                    </Col>
                  </Col>

                  <Col xs={12} md={6}>
                    <Col xs={12} md={12}>
                      <FormControl
                        required
                        as="select"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        size="lg"
                        className="my-3 tone-dropdown"
                        style={{}}
                      >
                        <option value="" disabled>
                          Select a tone
                        </option>
                        {possibleTones &&
                          possibleTones.map((possibleTone) => (
                            <option key={possibleTone} value={possibleTone}>
                              {possibleTone}
                            </option>
                          ))}
                      </FormControl>
                      {validated && (
                        <h6 className="invalid-text" type="invalid">
                          Please select
                        </h6>
                      )}
                    </Col>
                  </Col>
                </Row>
              </Container>
            </div>
            <Form.Group>
              {isLoading ? (
                <div className="spinner-overlay">
                  <Loader />
                </div>
              ) : (
                <></>
              )}

              {answer
                .split("\n")
                .filter((line) => line !== "")
                .map((v, i) => {
                  return (
                    <div
                      key={i}
                      className=" d-flex justify-content-between align-items-center m-2"
                    >
                      <InputBox value={v} />
                      <button
                        className="button copy-btn"
                        type="button"
                        onClick={() => {
                          let text = v.substring(v.indexOf(" ") + 1);
                          navigator.clipboard.writeText(text);
                          setShowToaster(true);
                        }}
                      >
                        <FaCopy />
                      </button>
                    </div>
                  );
                })}
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                className="button"
                as="input"
                type="submit"
                value="Submit"
              />
            </div>
          </div>

          <div className="side-card ms-3">
            {/* <Card
            style={{
              width: "100%",
              color: "white",
              marginTop: "10px",
              overflowY: "auto",
            }}
          >
            <Card.Body>
              {answer.split("\n").map((title, index) => (
                <Card.Text key={index}>
                  {index + 1}. {title}
                </Card.Text>
              ))}
            </Card.Body>
          </Card> */}
            {/*   <Card className="card-response">
              <Card.Header>Responses</Card.Header>
              <Card.Body>
                <div className="card-response-container" id="responseContainer">
                  {answer &&
                    answer.split("\n").map((response, index) => (
                      <div key={index} className="response-item">
                        <p>{response}</p>
                        <hr />
                      </div>
                    ))}
                </div>
              </Card.Body>
            </Card> */}
          </div>
        </div>
      </Form>

      <section className="d-flex justify-content-center mt-5">
        <div className="card main-card">
          <div
            className="d-flex justify-content-around flex-wrap"
            style={{ width: "100%" }}
          >
            <div className="p-3 banner" style={{ color: "white" }}>
              <h2>How it Works</h2>
              <ul>
                <li>Enter your Text in the input box.</li>
                <li>Choose the Title length and Tone</li>
                <li>Generate Unique Titles</li>
                <li>Copy to clipboard using Copy button</li>
              </ul>
            </div>
            <span className="vertical-divider"></span>

            <div className="p-3 banner" style={{ color: "white" }}>
              <h2>Features</h2>
              <ul>
                <li>Unique Titles</li>
                <li>Highly Customizable</li>
                <li>SEO Friendly Titles</li>
                <li>Unlimited Title Generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center mt-5">
        <div className="card main-card">
          <div className="text-content">
            <h2>
              Turn Your Social Media Content Into Profits: Discover How TitleAi
              Can Help!
            </h2>
            <p>
              Welcome to TitleAi. Are you tired of spending hours thinking of
              the perfect title for your videos or articles? Are you stuck on
              how to communicate the tone you want in a title? We have the
              perfect solution here at TitleAi! With our easy-to-use generator,
              you can quickly and effortlessly generate titles in different
              tones that perfectly match the content of your videos or articles.
              No matter what mood you’re trying to capture, our generator has
              you covered. Whether you want a title that is fun and exciting, or
              one that is serious and informative, our generator can easily
              create titles for you in a few clicks. Our generator takes the
              guess work out of titles and makes the process quick and easy. You
              no longer have to sit around for hours trying to come up with the
              perfect title. With TitleAi, you can get your title in a few
              seconds! Using our generator is hassle-free. All you have to do is
              enter your content into the generator, choose the tone you would
              like the title to be in, and click “generate.” You’ll be provided
              with a list of title options to choose from. From there, you can
              easily customize the title to make it unique to your content. With
              TitleAi, you can create titles that accurately capture the tone
              and message of your videos or articles. So, what are you waiting
              for? Get started with Title Generator today and say goodbye to
              hours of title creation!
            </p>
          </div>
          <span className="horizontal-divider"></span>
          <div className="text-content">
            <h2>Elevate Your Reach with Just One Title: Learn How!</h2>
            <p>
              Good titles are essential for getting more views on your content.
              They can help visitors quickly decide whether the content is
              relevant to their interests, and encourage them to click through.
              A good title should be concise, relevant and descriptive, so
              readers know what to expect when they click on the link. Creating
              a good title is an art form in itself. Writing one that is both
              catchy and informative can be a challenge. Here TitleAi will do
              all the work for you and provide you with best results possible.
            </p>
          </div>
          <span className="horizontal-divider"></span>
          <div className="d-flex justify-content-center text-content">


            <Faq />
          </div>
        </div>
      </section>
    </>
  );
};
