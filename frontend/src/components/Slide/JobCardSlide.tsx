import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideCard from "../Card/SlideCard";

// カルーセルにする画像のソースをリストにします
const images = [
  "/JobCardPhoto/jobcard1.webp",
  "/JobCardPhoto/jobcard1.webp",
  "/JobCardPhoto/jobcard1.webp",
  "/JobCardPhoto/jobcard1.webp",
  "/JobCardPhoto/jobcard1.webp",
];
const JobCardSlide = () => {
  return (
    <>
      <div className="flex justify-center p-2 bg-gray-100">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10} // スライド間のスペースを固定
          centeredSlides={true}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              style={{ flex: "0 0 10%" }} // スライドの幅を固定
            >
              <SlideCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default JobCardSlide;
