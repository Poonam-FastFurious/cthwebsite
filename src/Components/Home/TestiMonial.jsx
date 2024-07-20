import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import { useRef } from "react";
import { Link } from "react-router-dom";
function TestiMonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className="py-16 md:py-[130px] bg-[#ECE4D7] ">
        <div className="theme-container mx-auto flex flex-col ">
          <h1 className="border text-main-black border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 font-medium tracking-wide poppins-font">
            Loved by Our Testimonials
          </h1>
          <h2 className="text-12 sm:text-[40px] font-bold text-main-black pt-5 max-w-[844px]  tracking-normal poppins-font">
            What People are Saying
          </h2>
          <div className="w-full pt-10">
            <div className="swiper h5-story-slider pt-14">
              <Swiper
                className="swiper-wrapper"
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation, Keyboard]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                keyboard={true}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
              >
                <SwiperSlide className=" pr-3">
                  <div className="pb-[192px] pr-[30px] w-full  relative">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/home-five/story/1.webp"
                      alt=""
                      className="w-full max-w-[380px]"
                    />
                    <div className="group  border-buisness-red border shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden ">
                      <img
                        src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                        alt=""
                        className="absolute right-2 top-bottom-moving"
                      />
                      <h1 className="h-10 w-10 border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white flex justify-center items-center text-base tracking-tight text-main-black font-semibold">
                        01
                      </h1>
                      <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                        Best Consulting Services Provider Agency
                      </h2>
                      <Link to="#">
                        <div className="flex items-center gap-2 group mt-4">
                          <span className="font-medium text-white leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                            Read More
                          </span>
                          <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="#ffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" pr-3">
                  <div className="pb-[192px] pr-[30px] w-full  relative">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/home-five/story/1.webp"
                      alt=""
                      className="w-full max-w-[380px]"
                    />
                    <div className="group border-buisness-red border shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden ">
                      <img
                        src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                        alt=""
                        className="absolute right-2 top-bottom-moving"
                      />
                      <h1 className="h-10 w-10 border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white flex justify-center items-center text-base tracking-tight text-main-black font-semibold">
                        02
                      </h1>
                      <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                        Best Consulting Services Provider Agency
                      </h2>
                      <Link to="#">
                        <div className="flex items-center gap-2 group mt-4">
                          <span className="font-medium text-white leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                            Read More
                          </span>
                          <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="#ffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" pr-3">
                  <div className="pb-[192px] pr-[30px] w-full relative">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/home-five/story/1.webp"
                      alt=""
                      className="w-full max-w-[380px]"
                    />
                    <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden ">
                      <img
                        src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                        alt=""
                        className="absolute right-2 top-bottom-moving"
                      />
                      <h1 className="h-10 w-10 border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white flex justify-center items-center text-base tracking-tight text-main-black font-semibold">
                        03
                      </h1>
                      <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                        Best Consulting Services Provider Agency
                      </h2>
                      <Link to="#">
                        <div className="flex items-center gap-2 group mt-4">
                          <span className="font-medium text-white leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                            Read More
                          </span>
                          <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="#ffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" pr-3">
                  <div className="pb-[192px] pr-[30px] w-full  relative">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/home-five/story/1.webp"
                      alt=""
                      className="w-full max-w-[380px]"
                    />
                    <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden  ">
                      <img
                        src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                        alt=""
                        className="absolute right-2 top-bottom-moving"
                      />
                      <h1 className="h-10 w-10 border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white flex justify-center items-center text-base tracking-tight text-main-black font-semibold">
                        04
                      </h1>
                      <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                        Best Consulting Services Provider Agency
                      </h2>
                      <Link to="#">
                        <div className="flex items-center gap-2 group mt-4">
                          <span className="font-medium text-white leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                            Read More
                          </span>
                          <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="#ffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide className=" pr-3">
                  <div className="pb-[192px] pr-[30px] w-full  relative">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/home-five/story/1.webp"
                      alt=""
                      className="w-full max-w-[380px]"
                    />
                    <div className="group shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16 py-[30px] rounded-2xl absolute top-[40%] md:top-[50%] z-10 bg-white -right-0 h-[166px] hover:h-[205px] transition-all duration-300 hover:bg-buisness-red overflow-hidden ">
                      <img
                        src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                        alt=""
                        className="absolute right-2 top-bottom-moving"
                      />
                      <h1 className="h-10 w-10 border-2 rounded-full border-buisness-red group-hover:border-white group-hover:text-white flex justify-center items-center text-base tracking-tight text-main-black font-semibold">
                        05
                      </h1>
                      <h2 className="text-20 font-semibold mt-3 max-w-[230px] group-hover:text-white">
                        Best Consulting Services Provider Agency
                      </h2>
                      <Link to="#">
                        <div className="flex items-center gap-2 group mt-4">
                          <span className="font-medium text-white leading-5 font-inter border-b border-transparent before:inline-block before:border-white before:border-b before:absolute before:bottom-0 before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                            Read More
                          </span>
                          <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                              stroke="#ffff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="relative w-fit mx-auto flex items-center">
              <div className="flex justify-between absolute w-full">
                <button
                  className="group h5-story-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-buisness-red border-buisness-red overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300"
                  ref={prevRef}
                >
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-buisness-dark-black group-hover:stroke-white"
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <button
                  className="group rotate-180 h5-story-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-buisness-red border-buisness-red overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300"
                  ref={nextRef}
                >
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-buisness-dark-black group-hover:stroke-white"
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="h5-story-pagination px-10  -mt-20"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestiMonial;
