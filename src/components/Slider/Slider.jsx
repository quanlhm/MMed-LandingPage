import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import FeatureSlide from "../../components/FeatureSlide/FeatureSlide.jsx";

export default function Slider({ data }) {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
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
  );
}
