import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/sunset-sea_1204-522.jpg?t=st=1650213377~exp=1650213977~hmac=5f12048939554027f07b1c355a65cfbe6f0ff6cdfabcaf6ed094c98c105cc271&w=1380"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Awesome Cox's Bazar</h2>
            <p>Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/sunrise-northern-chiang-rai-thailand_130181-71.jpg?w=1480"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>Sunset in Hill The Incredible Sajek</h2>
            <p>It's so amazing place in the Sajek area to watch sunset over the blue hills</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/wooden-bridge-mangrove-forest_335224-1009.jpg?t=st=1650215330~exp=1650215930~hmac=f3b3bb6dec9a385fec6876e37404bac19fb07b4d95a640f9140177090648df0b&w=1380"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>The Natural Wonders Sundarbon</h2>
            <p>
            Sundarban mangrove forest is the single largest home of the Royal Bengal Tiger( Panthera tigris )
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;