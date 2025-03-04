import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import '/src/assets/styles/Platform/index.css';

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://www.globalnationalparks.com/es/wp-content/uploads/molino-flores-nezahualcoyotl-parque-nacional-1024x576.jpg"
              alt="Historia y Cultura"
            />
            <div className="text-overlay">
              <h2>Parque Netzahualcoyotl</h2>
              <p>Sumérgete en la historia del parque</p>
              <button className="carousel-button">Ver Más</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img
              src="https://i.pinimg.com/originals/e7/1f/17/e71f176fdf7502833da2215bb7cea920.jpg"
              alt="Vida Salvaje"
            />
            <div className="text-overlay">
              <h2>Vida Salvaje</h2>
              <p>Conoce las especies que habitan el parque</p>
              <button className="carousel-button">Explorar</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
