import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Configuration, OpenAIApi } from "openai";
import React, { useEffect, useState } from "react";
import { TitleBot } from "./components/bot/TitleBot";
import { DALLEComponent } from "./components/Dallebot";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { DALLEComponent2 } from "./components/Dallebot2";
import { AboutUs } from "./views/aboutus/AboutUs";
import { ContactUs } from "./views/contactus/ContactUs";
import { PageNotFound } from "./views/pagenotfound/PageNotFound";
import MyLeaderBoardAd from "./components/ads/MyLeaderBoardAd";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Header />

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

      <div
        className="container-fluid content pb-3"
        style={{ paddingTop: "100px" }}
      >
        <Routes>
          <Route exact path="/" element={<TitleBot />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />

          <Route path="*" element={<PageNotFound />} />
          {/*    <Route  element={<PageNotFound />} />
           */}
        </Routes>
      </div>

      <Footer className="footer" />
    </div>
  );
}

export default App;
