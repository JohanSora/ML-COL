"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ImageNext from "../atoms/ImageNext";

const Banners = () => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    setConfig({
      allowTouchMove: false,
      speed: 5000,
      slidesPerView: 4,
      spaceBetween: 5,
      autoplay: {
        delay: 10,
        disableOnInteraction: false,
      },
      modules: [Autoplay, Navigation],
    });
  }, []);
  return (
    <Swiper
      freeMode
      loop
      navigation
      allowTouchMove={false}
      speed={5000}
      slidesPerView={4}
      spaceBetween={5}
      autoplay={{
        delay: 10,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="py-6"
    >
      {Array(14)
        .fill()
        .map((_, idx) => (
          <SwiperSlide key={idx} className="rounded-lg">
            <div className="rounded-lg max-h-[218px]">
              <ImageNext
                src={`/Events/BannerImgs/${idx + 1}.jpg`}
                width={500}
                height={500}
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Banners;
