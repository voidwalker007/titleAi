import React from "react";
import { Helmet } from "react-helmet";
import "./AboutUs.css";
export const AboutUs = () => {
  return (
    <div class="card main-card" style={{ marginLeft: "20%" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="/about" />
        <meta
          name="description"
          content="TitleAI generates engaging and SEO-optimized titles for your video/articles, increasing visibility and driving traffic to your site."
        />

        <meta
          name="keyword"
          content="Title ai,Title generation, SEO optimization, OpenAI, Language models, Content visibility, Traffic generation, Catchy titles, Attention-grabbing titles, Search engine ranking, Relevant titles, best titles, ai titles"
        />
      </Helmet>
      <div class="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>TitleAi</strong>,We are
          are passionate about helping content
          creators maximize their reach and visibility. Our mission is to
          provide a powerful tool that generates engaging and SEO-optimized
          titles for your video or article.
        </p>
        <p>
          With TitleAI, you
          can rest assured that your titles are optimized for search engines,
          making it easier for people to find your content and increasing
          traffic to your site.
        </p>
        <p>
          At TitleAI, we believe that great content deserves to be seen by as
          many people as possible. That's why we are committed to providing a
          user-friendly platform that is accessible to everyone, regardless of
          their technical expertise.
        </p>
        <p className="lower_text">
          Thank you for choosing TitleAI to help you grow your online presence.
          We are excited to be part of your journey and look forward to seeing
          the great content you create!
        </p>
      </div>
    </div>
  );
};
