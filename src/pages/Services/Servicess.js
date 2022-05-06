import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import quote from "./quote.png";
// import shop from "../../img/glassesimoji.png";
import glassmoj from "../../img/glassesimoji.png";
import glasses from "../../img/glasses.png";
import astro from "../../img/Astrautaut.png";

function Servicess() {
  return (
    <div style={{ width: "100%" }}>
      <div className="awesome">
        {/* dark Mode */}
        <span style={{ color: "#242d49" }}></span>
        <span style={{ alignSelf: "center" }}>Testimonials</span>
        <spane style={{ width: "500px", alignSelf: "center" }}></spane>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonialBox">
            <img src={quote} className="quote" alt="" />
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates quae quasi natus esse! Fugit dolor a saepe, quasi
                laborum id numquam facere. Distinctio minima eius minus
                accusamus laborum id numquam facere. Distinctio minima eius
                minus accusamus accusamus laborum id numquam facere. Distinctio
                minima eius minus accusamus
              </p>
              <div className="details">
                <div className="imgBox">
                  <img src={glassmoj} alt="" />
                </div>
                <h3>
                  Someone Famous <br /> <span>Creative Designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <img src={quote} className="quote" alt="" />
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates quae quasi natus esse! Fugit dolor a saepe, quasi
                laborum id numquam facere. Distinctio minima eius minus
                accusamus laborum id numquam facere. Distinctio minima eius
                minus accusamus accusamus laborum id numquam facere. Distinctio
                minima eius minus accusamus
              </p>
              <div className="details">
                <div className="imgBox">
                  <img src={glasses} alt="" />
                </div>
                <h3>
                  Someone Famous <br /> <span>Creative Designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <img src={quote} className="quote" alt="" />
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates quae quasi natus esse! Fugit dolor a saepe, quasi
                laborum id numquam facere. Distinctio minima eius minus
                accusamus laborum id numquam facere. Distinctio minima eius
                minus accusamus accusamus laborum id numquam facere. Distinctio
                minima eius minus accusamus
              </p>
              <div className="details">
                <div className="imgBox">
                  <img src={astro} alt="" />
                </div>
                <h3>
                  Someone Famous <br /> <span>Creative Designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <img src={quote} className="quote" alt="" />
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates quae quasi natus esse! Fugit dolor a saepe, quasi
                laborum id numquam facere. Distinctio minima eius minus
                accusamus laborum id numquam facere. Distinctio minima eius
                minus accusamus accusamus laborum id numquam facere. Distinctio
                minima eius minus accusamus
              </p>
              <div className="details">
                <div className="imgBox">
                  <img src={astro} alt="" />
                </div>
                <h3>
                  Someone Famous <br /> <span>Creative Designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
            <img src={quote} className="quote" alt="" />
            <div className="content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates quae quasi natus esse! Fugit dolor a saepe, quasi
                laborum id numquam facere. Distinctio minima eius minus
                accusamus laborum id numquam facere. Distinctio minima eius
                minus accusamus accusamus laborum id numquam facere. Distinctio
                minima eius minus accusamus
              </p>
              <div className="details">
                <div className="imgBox">
                  <img src={astro} alt="" />
                </div>
                <h3>
                  Someone Famous <br /> <span>Creative Designer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Servicess;
