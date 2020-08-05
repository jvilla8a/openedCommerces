import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import {
  FIREBASE_CONFIG,
} from "../registry/registry.constants";

const defaultProject = firebase.initializeApp(FIREBASE_CONFIG);
defaultProject.storage();
const defaultFirestore = defaultProject.firestore();

const HomePage = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getData();
  },[]);
  useEffect(()=>{
    console.log(data);
  },[data])
  const getData = () => {
    let array=[];
    defaultFirestore.collection('shops').get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          let x = doc.data()
          array.push(x)
      });
      setData(array);
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
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
          </Container>
        </CarouselIteration>
        <CarouselIteration>
        <Container>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
          </Container>
        </CarouselIteration>
        <CarouselIteration>
        <Container>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
          </Container>
        </CarouselIteration>
        <CarouselIteration>
        <Container>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
            <Card>
              <Img src={'https://lh3.googleusercontent.com/proxy/6f2xkJCMn7slBjTJAWYhkz7_vJRe8z9fmqLYQe6iPzRqXyZNxak0VE9s_NX9NgAgXXlGFrl0MHujatdQUwpRbJL-ceXM02bislxjgARTxtVzvqzuaxTZpDYPKsseDX42Mw'}/>
              <h1>Home</h1>
              <p>
                ¿Dónde puedo conseguirlo? Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum,' 
              </p>
            </Card>
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
  height: 300px;
  color: #ffffff;
  margin-top: 55px;
`;
const Container = styled.div`
  padding: 0 20px;
  display: flex;

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
  width: 100%;
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
