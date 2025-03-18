// src/components/ImageCarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import '/src/assets/styles/Platform/ImageCarrousel.css';

function ImageCarousel() {
  const slides = [
    {
      id: 1,
      image:
        "https://www.globalnationalparks.com/es/wp-content/uploads/molino-flores-nezahualcoyotl-parque-nacional-1024x576.jpg",
      title: "Parque Netzahualcoyotl",
      description: "Sumérgete en la historia del parque",
      buttonText: "Ver Más",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/originals/e7/1f/17/e71f176fdf7502833da2215bb7cea920.jpg",
      title: "Vida Salvaje",
      description: "Conoce las especies que habitan el parque",
      buttonText: "Explorar",
    },
  ];

  return (
    <div className="app-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="app-slide-content">
              <img src={slide.image} alt={slide.title} />
              <div className="app-text-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="carousel-button">{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
