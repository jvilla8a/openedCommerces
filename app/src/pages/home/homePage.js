import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firebase, { database } from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import {
  FIREBASE_CONFIG,
} from "../registry/registry.constants";
import CommerceCard from '../../shared/CommerceCard/CommerceCard';

const defaultProject = firebase.initializeApp(FIREBASE_CONFIG);
defaultProject.storage();
const defaultFirestore = defaultProject.firestore();

const HomePage = () => {
  const [data, setData] = useState([{}]);
  const [last, setLast] = useState([{}]);
  const [first, setFirst] = useState([{}]);
  const [second, setSecond] = useState([{}]);
  const [third, setThird] = useState([{}]);
  useEffect(() => {
    getData();
  },[]);
  useEffect(()=>{
    console.log('first =>', first, 'second =>', second, 'third =>', third);
  },[third])
  const getData = () => {
    let array=[];
    defaultFirestore.collection('shops').get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let x = doc.data()
          array.push(x)
      });
      setData(array);
      setFirst(array.splice((array.length-1)-12, 12).splice(0, 4));
      setSecond(array.splice((array.length-1)-12, 12).splice(4, 4));
      setThird(array.splice((array.length-1)-12, 12).splice(8, 4));
    });
  };
  
  return(
  <Home>
    <ContentCarousel>
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
    </ContentCarousel>
    <Carousel
        infiniteLoop
        stopOnHover
        swipeable
        emulateTouch
        showStatus={false}
        className="carousel-principal"
      >
        <CarouselIteration className="carousel-content">
          <Container>
            {first.map((data) =>
              <CommerceCard data={data}></CommerceCard>
            )}
          </Container>
        </CarouselIteration>
        <CarouselIteration>
        <Container>
        {second.map((data) =>
              <CommerceCard data={data}></CommerceCard>
            )}
          </Container>
        </CarouselIteration>
        <CarouselIteration>
        <Container>
        {third.map((data) =>
              <CommerceCard data={data}></CommerceCard>
            )}
          </Container>
        </CarouselIteration>
      </Carousel>
    
  </Home>
  );
};

const Home = styled.div`
  min-height: 81vh;
  box-sizing: border-box;

  & .carousel-principal {
    & li {
      background-color: #282c34;
    }
  }
  & .carousel-content {
    height: auto;
  }

`;

const ContentCarousel = styled.div`
  margin-top: 55px;
`;

const CarouselIteration = styled.div`
  height: 400px;
`;
const Container = styled.div`
  padding: 0 auto;
  display: inline-flex;

`;
export const Card = styled.div`
  width: 400px;
  background-color: #ffffff;
  margin: 5px;
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  color: #000;
`;
export const Img = styled.img`
  height: 165px;
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid gray;
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
`;
export default HomePage;
