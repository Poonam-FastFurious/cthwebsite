import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <>
        <div className="theme-container w-full mx-auto xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]">
          <div className="grid grid-cols-6 xl:grid-cols-12 gap-y-10">
            <div className="col-span-6">
              <div className="max-w-[476px]">
                <h1 className="border text-white border-buisness-red/10 py-0.5 px-5 rounded-[30px] w-fit bg-buisness-red/5 font-medium tracking-wide poppins-font">
                  About us
                </h1>
                <h2 className="text-[30px] sm:text-44 font-semibold text-main-black pt-5 ">
                  Discover Your Path to Seamless Compliance Management
                </h2>
                <p className="text-paragraph pt-5 sm:pt-10 tracking-wide poppins-font">
                  At Compliance Townhall, we specialise in empowering businesses
                  with robust corporate compliance solutions. With a deep
                  understanding of regulatory landscapes across industries, we
                  offer tailored strategies to ensure your company meets all
                  necessary standards efficiently
                </p>
                <ul className="flex flex-col gap-0.5 mt-6 mb-11">
                  <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black tracking-wide poppins-font">
                    Navigate Regulatory Requirements with Confidence
                  </li>
                  <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black tracking-wide poppins-font">
                    Stay Informed with Industry-Leading Insights
                  </li>
                  <li className="flex items-center gap-2.5 before:h-[18px] before:w-[18px] before:rounded-full before:bg-buisness-red tick-before before:flex before:justify-center before:items-center text-main-black tracking-wide poppins-font">
                    Dedicated Support to Safeguard Your Business
                  </li>
                </ul>
                <Link to="/AboutUs">
                  <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-[15px] w-fit">
                    <span className="text-base group-hover:text-buisness-dark-black text-white transition-all duration-300 font-semibold font-inter relative  tracking-wide poppins-font">
                      Explore Service
                    </span>
                    <svg
                      className="relative "
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:stroke-buisness-dark-black stroke-white transition-all duration-300"
                        d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative col-span-6 flex flex-col sm:flex-row justify-center items-center gap-[30px]">
              <svg
                className="absolute z-0 -top-16 max-w-full"
                width="465"
                height="465"
                viewBox="0 0 465 465"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="232.5"
                  cy="232.5"
                  r="231.9"
                  stroke="#161519"
                  strokeOpacity="0.07"
                  strokeWidth="1.2"
                ></circle>
              </svg>
              <img
                data-aos="fade-left"
                src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about1.webp"
                alt=""
                className="relative  hidden sm:block"
              />
              <img
                data-aos="fade-left"
                data-aos-delay="100"
                src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about2.webp"
                alt=""
                className="relative "
              />
              <div className="bg-buisness-red p-[30px] rounded-2xl absolute  bottom-8 w-[295px]">
                <img
                  src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                  alt=""
                  className="absolute right-2 top-bottom-moving"
                />
                <div className="flex items-center gap-2.5">
                  <svg
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="text-sm text-white leading-8  poppins-font tracking-wide poppins-font">
                    We have
                  </span>
                </div>
                <h1
                  className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[170px]   poppins-font"
                  data-scroll-qs="scroll"
                  data-count-qs="25"
                  data-type-qs="+ Years of Experience"
                  data-speed-qs="1000"
                >
                  25+ Years of Experience
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default AboutUs;
