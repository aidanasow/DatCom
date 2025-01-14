import classes from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ArrowSlider } from "assets/index";
import { useRef, useState, useEffect } from "react";

export const Slider = ({
  sliderList = [],
  renderSlide,
  minCardWidth = 300,
  maxCards = 3.2, spaceBetWeen=16
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const containerRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(maxCards);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedSlides = containerWidth / minCardWidth;
        setSlidesPerView(Math.min(calculatedSlides, maxCards));
      }
    };

    updateSlidesPerView();
    const observer = new ResizeObserver(updateSlidesPerView);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [maxCards, minCardWidth]);

  return (
    <div ref={containerRef}>
      <Swiper
        className={classes.swiper}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={spaceBetWeen}
        allowTouchMove={true}
        slidesPerView={slidesPerView}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        { sliderList?.map((item, key) => (
          <SwiperSlide key={key} className={classes.slide}>
            {renderSlide(item)}
          </SwiperSlide>
        ))}
        <div className={classes.buttons}>
          <button
            ref={prevRef}
            className={`${classes.buttons_left} ${
              isBeginning ? classes.disabled : ""
            }`}
          >
            <ArrowSlider />
          </button>
          <button
            ref={nextRef}
            className={`${classes.buttons_right} ${
              isEnd ? classes.disabled : ""
            }`}
          >
            <ArrowSlider />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
