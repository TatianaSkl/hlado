import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bg from 'images/bg';
const { foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8 } = bg;

const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} style={{ display: 'none' }} />
);

export const BackgroundSlideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};
