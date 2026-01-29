import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import FeatureSlide from "../../components/FeatureSlide/FeatureSlide.jsx";
import AboutSlide from "../../components/AboutSlide/AboutSlide.jsx";

export default function Slider({ data, type = "features" }) {
  return type === "features" ? (
    <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        // navigation
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        grabCursor={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <FeatureSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        navigation
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <AboutSlide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

