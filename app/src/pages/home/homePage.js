import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => (
  <Home>
    <Carousel
      infiniteLoop
      stopOnHover
      swipeable
      emulateTouch
      showStatus={false}
    >
      <CarouselIteration>HOLA</CarouselIteration>
      <CarouselIteration>Mundo</CarouselIteration>
      <CarouselIteration>BAD</CarouselIteration>
      <CarouselIteration>BUNNY</CarouselIteration>
    </Carousel>
    <h1>Home</h1>
  </Home>
);

const Home = styled.div`
  min-height: 81vh;
`;

const CarouselIteration = styled.div`
  height: 300px;
  color: #ffffff;
`;

export default HomePage;
