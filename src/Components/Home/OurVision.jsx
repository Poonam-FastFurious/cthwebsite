import { Link } from "react-router-dom";
import Collaboration from "../../assets/Collabration.png";
import Information from "../../assets/Information.png";
import Integration from "../../assets/Integration.png";
import Interaction from "../../assets/Interaction.png";
function OurVision() {
  return (
    <>
      <section id="service" className="w-full  bg-[#FFFBF0] ">
        <div className="mx-auto max-w-[1600px] w-full xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]   xl:px-[80px] md:px-10 px-0 bg-main-gray bg-[#FFFBF0]  ">
          <div className="w-full service-section-wrapper relative">
            <div className="theme-container mx-auto relative ">
              <div className="flex flex-col ">
                <span className="text-black font-bold text-[30px]  py-2 border-[#e7e3fa] leading-none rounded-full inline-block mb-5 tracking-wide poppins-font ">
                  Our Visions
                </span>
              </div>
              <div className="w-full grid xl:grid-cols-12 md:grid-cols-6 grid-cols-3 xl:gap-[30px] gap-5 ">
                <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-100 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-100 after:z-0 before:ease-linear after:ease-linear"
                >
                  <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] ">
                    <div className=" w-full h-full flex justify-center items-center rounded-full common-transition text-purple">
                      <span>
                        <img src={Collaboration} alt="" />
                      </span>
                    </div>
                    <div className="mt-12 mb-4">
                      <p className="text-20 font-semibold text-center text-main-black mb-4 tracking-wide poppins-font">
                        Collaboration
                      </p>
                      <p className="text-center text-paragraph tracking-wide poppins-font">
                        Facilitate collaboration by defining legal frameworks
                        for partnerships and joint ventures
                      </p>
                    </div>

                    <div className=" items-center gap-2 group text-paragraph hover:text-buisness-red tracking-wide poppins-font hidden">
                      <span className="font-medium leading-5 font-inter border-b border-transparent before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-100 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
                        <Link to="/AboutUs"> Read More</Link>
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-100 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-100 after:z-0 before:ease-linear after:ease-linear"
                >
                  <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] ">
                    <div className=" w-full h-full flex justify-center items-center rounded-full common-transition text-purple">
                      <span>
                        <img src={Information} alt="" />
                      </span>
                    </div>
                    <div className="mt-12 mb-4">
                      <p className="text-20 font-semibold text-center text-main-black mb-4 tracking-wide poppins-font">
                        Information
                      </p>
                      <p className="text-center text-paragraph tracking-wide poppins-font">
                        Ensure transparency and accountability through stringent
                        information disclosure requirements
                      </p>
                    </div>
                    <Link to="/AboutUs">
                      <div className=" items-center gap-2 group text-paragraph hover:text-buisness-red tracking-wide poppins-font hidden">
                        <span className="font-medium leading-5 font-inter border-b border-transparent before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-100 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                            d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-100 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-100 after:z-0 before:ease-linear after:ease-linear"
                >
                  <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] ">
                    <div className=" flex justify-center items-center rounded-full text-purple common-transition">
                      <img src={Integration} alt="" />
                    </div>
                    <div className="mt-12 mb-4">
                      <p className="text-20 font-semibold text-center text-main-black mb-4 tracking-wide poppins-font ">
                        Integration
                      </p>
                      <p className="text-center text-paragraph tracking-wide poppins-font">
                        Govern mergers and acquisitions, ensuring seamless
                        integration of businesses
                      </p>
                    </div>
                    <Link to="/AboutUs">
                      <div className=" items-center gap-2 group text-paragraph hover:text-buisness-red tracking-wide poppins-font hidden">
                        <span className="font-medium leading-5 font-inter border-b border-transparent before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-100 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                            d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="zoom-out"
                  data-aos-delay="100"
                  className="col-span-3 relative group border border-transparent common-transition before:inline-block before:w-full before:h-full before:border before:rounded-[10px] before:border-purple before:absolute before:bottom-0 before:right-0 before:shadow-common before:origin-bottom-right before:scale-0 hover:before:scale-100 before:transition-all before:duration-100 before:z-0 after:inline-block after:w-full after:h-full after:border after:rounded-[10px] after:border-purple after:absolute after:top-0 after:left-0 after:shadow-common after:origin-top-left after:scale-0 hover:after:scale-100 after:transition-all after:duration-100 after:z-0 before:ease-linear after:ease-linear"
                >
                  <div className="flex flex-col relative px-4 md:px-8 py-5 md:py-10 justify-between items-center rounded-[10px] bg-white m-[1px] ">
                    <div className=" w-full h-full flex justify-center items-center rounded-full text-purple common-transition">
                      <span>
                        <img src={Interaction} alt="" />
                      </span>
                    </div>
                    <div className="mt-12 mb-4">
                      <p className="text-20 font-semibold text-center text-main-black mb-4 tracking-wide poppins-font">
                        Interaction
                      </p>
                      <p className="text-center text-paragraph poppins-font">
                        Regulate interactions between companies and
                        stakeholders, promoting fair practices and compliance
                      </p>
                    </div>
                    <Link to="/AboutUs">
                      <div className=" items-center gap-2 group text-paragraph hover:text-buisness-red tracking-wide poppins-font hidden">
                        <span className="font-medium leading-5 font-inter border-b border-transparent before:inline-block before:border-purple before:border-b before:absolute before:bottom-0 before:transition-all before:duration-100 before:w-0 hover:before:w-full before:overflow-hidden before:h-5 relative">
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
                            d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289
                        5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623
                        5.29289 4.79289L1.5 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurVision;
