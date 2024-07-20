import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Baseurl } from "../../Confige";

function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/blog/allblogs")
      .then((Response) => Response.json())
      .then((data) => setBlogs(data.data));
  }, []);
  return (
    <>
      <section className="pt-16 md:pt-[130px]">
        <div className="theme-container w-full mx-auto">
          <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">
            <div data-aos="fade-up" className="col-span-8">
              <h1 className="font-semibold text-[40px] leading-[42px] text-main-black tracking-wide poppins-font">
                Blogs
              </h1>
              <p className="text-paragraph mt-[30px] mb-10 max-w-[786px] tracking-wide poppins-font">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                autem velit laborum doloribus cum perspiciatis incidunt quod,
                delectus libero esse? Lorem ipsum dolor sit amet consectetur
              </p>

              <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[7px] gap-y-[12px]">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="col-span-4  pb-10 border  rounded-md bg-[#A3896B] text-white  "
                  >
                    <div className="card" style={{ width: "18rem;" }}>
                      <img
                        src={blog.image}
                        className="card-img-top p-4  "
                        alt="..."
                      />
                      <div className="card-body  pt-4 ">
                        <p className="card-text px-4  tracking-normal poppins-font">
                          {blog.title}
                        </p>
                        <div className="mx-5 mt-6 mb-3 flex items-center justify-between">
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="flex">
                              <img
                                src="https://readymadeui.com/profile_2.webp"
                                className="w-10 h-10 rounded-full"
                              />
                              <div className="ml-4 text-left">
                                <p className="text-sm font-bold  tracking-wide poppins-font">
                                  By {blog.author}
                                </p>
                                <p className="text-xs  mt-0.5 tracking-wide poppins-font">
                                  johndoe23@gmail.com
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-primary px-4 tracking-wide poppins-font"
                        >
                          know more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="font-semibold text-[27px] items-center flex w-full leading-[35px] tracking-tight text-main-black mt-10">
                <Link to="blog">
                  <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-[15px] w-fit">
                    <span className="text-base   group-hover:text-buisness-red text-white transition-all duration-300 font-semibold font-inter relative z-10">
                      Read more
                    </span>
                    <svg
                      className="relative z-10"
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
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="col-span-8 lg:col-span-4"
            >
              <div className="border border-purple/10 rounded-2xl py-[30px] bg-main-gray">
                <div className="flex gap-5 items-center px-10 pb-[30px]">
                  <h1 className="text-22 font-semibold text-main-black tracking-wide poppins-font">
                    Add section
                  </h1>
                </div>
                <hr className="bg-gray-50" />
                <div className="pt-10 flex flex-col px-10 gap-[30px] h-40"></div>
              </div>
              <div className="border border-purple/10 rounded-2xl py-[30px] bg-main-gray mt-[30px]">
                <div className="flex gap-5 items-center px-10 pb-[30px]">
                  <h1 className="text-22 font-semibold text-main-black tracking-wide poppins-font">
                    Add section
                  </h1>
                </div>
                <hr className=" bg-gray-50" />
                <div className="pt-10 flex flex-col px-10 gap-[30px]  h-80"></div>
              </div>
              <div className="mt-[30px] flex justify-center items-end relative w-full rounded-2xl overflow-hidden">
                <img
                  src="https://quomodothemes.website/html/quland-html/assets/images/service/detail-3.webp"
                  alt=""
                  className="w-full object-cover"
                />
                <div className="w-full h-full absolute black_overlay"></div>
                <div className="w-full max-w-[277px] absolute bottom-[30px]">
                  <h1 className="text-24 font-semibold text-white text-center mb-5 tracking-wide poppins-font">
                    Lorem ipsum dolor
                  </h1>
                  <Link to="#">
                    <div className="home-two-btn-bg py-3  bg-buisness-red border-buisness-red inline-flex w-full">
                      <svg
                        className="relative z-10"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className=" transition-all duration-300"
                          d="M24.1094 2.17188C24.625 2.3125 25 2.73438 25 3.25C25 15.2969 15.25 25 3.25 25C2.6875 25 2.26562 24.6719 2.125 24.1562L1 19.2812C0.90625 18.7656 1.14062 18.2031 1.65625 17.9688L6.90625 15.7188C7.375 15.5312 7.89062 15.6719 8.21875 16.0469L10.5625 18.9062C14.2188 17.1719 17.1719 14.1719 18.8594 10.6094L16 8.26562C15.625 7.9375 15.4844 7.42188 15.6719 6.95312L17.9219 1.70312C18.1562 1.1875 18.7188 0.90625 19.2344 1.04688L24.1094 2.17188Z"
                          fill="black"
                        ></path>
                      </svg>
                      <span className="  transition-all duration-300  relative z-10 tracking-wide poppins-font">
                        +236 (456) 896 22
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr
            className="bg-purple/10 mt-[120px] "
            style={{ visibility: "hidden" }}
          />
        </div>
      </section>
    </>
  );
}

export default HomeBlogs;
