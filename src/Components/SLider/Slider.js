import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";


import slide_image_1 from "../Assets/slider1.jpeg";
import slide_image_2 from "../Assets/slider2.jpeg";
import slide_image_3 from "../Assets/slider3.jpeg";
import slide_image_4 from "../Assets/slider4.jpeg";
import slide_image_5 from "../Assets/slider5.jpeg";
import side_icon1 from "../Assets/side-img1.png"
import side_icon2 from "../Assets/side-img2.png"

function Slider() {
  const navigate = useNavigate();

  return (
    <section className="slider">
      <div className="slider-container">
        <img  className='side-img1' src={side_icon1}alt='side_icon'/>
       
        <h2 className="slider-title">
          Наши <span>популярные</span> блюда
        </h2>

        <Swiper 
             modules={[Navigation]}
              className="external-buttons"
              spaceBetween={24}
              slidesPerView={1}
              navigation
              updateOnWindowResize
              observer
              observerParents
              initialSlide={1}
              loop      
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
        </Swiper>

        <img  className='side-img2'src={side_icon2}alt='side_icon'/>
      </div>

      <div className="slider-btn_block">
        <button
          className="slider-btn"
          onClick={() => {
            navigate("/menu");
          }}
        >
          <div> Наше меню </div>
        </button>

      </div>

    </section>
  );
}

export default Slider;
