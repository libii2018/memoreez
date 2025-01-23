"use client";
import React from "react";
import Navbar1Component from "../blocks/static/Navbar1Component";
import Header1Component from "../blocks/static/Header1Component";
import Feature1Component from "../blocks/static/Feature1Component";
import Carousel1Component from "../blocks/static/Carousel1Component";
import Carousel2Component from "../blocks/static/Carousel2Component";
import Footer1Component from "../blocks/static/Footer1Component";
import Pricing1Component from "../blocks/static/Pricing1Component";
import Faq1Component from "../blocks/static/Faq1Component";
import { MarqueeComposant } from "@/blocks/static/Marquee";

const Home = () => (
  <div className="mx-auto font-garamond">
    <Navbar1Component />
    <Header1Component />

    <Carousel2Component />
    <MarqueeComposant />

    <Feature1Component />
    <Carousel1Component />
    <Pricing1Component />
    <Faq1Component />
    <Footer1Component />
  </div>
);

export default Home;
