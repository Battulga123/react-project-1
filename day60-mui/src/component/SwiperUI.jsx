import { Swiper, SwiperSlide } from "swiper/react";
import images from "../data/images";

const SwiperUI = function () {
  const sliders = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={images.url} alt="slider image" />
      </SwiperSlide>
    );
  });

  return (
    <div>
      <h1>Day60 - Swiper JS with React</h1>
      <Swiper>
        {sliders}
      </Swiper>
    </div>
  );
};

export { SwiperUI };
