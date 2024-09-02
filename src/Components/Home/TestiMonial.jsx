import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Baseurl } from "../../Confige";
function TestiMonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          Baseurl + "/api/v1/testimonial/alltestimonial"
        ); // Replace with your API endpoint
        const data = await response.json();
        setTestimonials(data.data); // Assuming `data` is an array of testimonials
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Customize the format if needed
  };

  return (
    <div className="bg-[#ECE4D7]">
      <section className="mx-auto max-w-[1600px] w-full xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]   xl:px-[80px] md:px-10 px-0 bg-main-gray bg-[#ECE4D7] ">
        <div className="theme-container mx-auto flex flex-col ">
          <h1 className="border text-main-black border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 font-medium tracking-wide poppins-font">
            Loved by Our Testimonials
          </h1>
          <h2 className="text-12 sm:text-[30px] font-bold text-main-black pt-5 max-w-[844px]  tracking-normal poppins-font">
            What People are Saying
          </h2>
          <div className="w-full pt-10">
            <div className="swiper h5-story-slider pt-14">
              <Swiper
                className="swiper-wrapper"
                spaceBetween={50}
                slidesPerView={3}
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
                {testimonials.map((testi, index) => (
                  <SwiperSlide className=" pr-3" key={index}>
                    <div className="p-6 rounded-lg  shadow-md py-12  h-auto group    border-buisness-red border shadow-card-xm pl-5 pr-5 md:pl-10 md:pr-16 lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-16    bg-white -right-0  transition-all duration-300 hover:bg-buisness-red overflow-hidden">
                      <div className="flex items-center">
                        <img
                          src="https://readymadeui.com/profile_2.webp"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-4">
                          <h4 className="text-gray-800 text-sm font-extrabold group-hover:text-white">
                            {testi.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-gray-400 group-hover:text-white">
                            {testi.email}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-gray-800 text-sm leading-relaxed group-hover:text-white">
                          {testi.message}
                        </p>
                      </div>

                      <div className="flex space-x-1 mt-4 group-hover:text-white">
                        {formatDate(testi.createdAt)}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="relative w-fit mx-auto flex items-center">
              <div className="flex justify-between absolute w-full top-12">
                <button
                  className="group h5-story-prev w-[30px] h-[30px] rounded-full flex items-center justify-center bg-buisness-red border-buisness-red overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute  before:-right-12 hover:before:right-0 before:transition-all before:duration-300"
                  ref={prevRef}
                >
                  <svg
                    className="relative  pointer-events-none"
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
                  className="group rotate-180 h5-story-next w-[30px] h-[30px] rounded-full flex items-center justify-center bg-buisness-red border-buisness-red overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:-right-12 hover:before:right-0 before:transition-all before:duration-300"
                  ref={nextRef}
                >
                  <svg
                    className="relative  pointer-events-none"
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
    </div>
  );
}

export default TestiMonial;
