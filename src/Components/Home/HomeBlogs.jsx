import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { Baseurl } from "../../Confige";

function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(Baseurl + "/api/v1/blog/allblogs")
      .then((Response) => Response.json())
      .then((data) => setBlogs(data.data));
  }, []);
  const handleReadMoreClick = (blogId) => {
    fetch(`${Baseurl}/api/v1/blog/read`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: blogId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate(`/blog/${blogId}`);
        } else {
          console.error("Failed to mark the blog as read");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <>
      <section className="mx-auto max-w-[1600px] w-full xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]   xl:px-[80px] md:px-10 px-0 ">
        <div className="theme-container w-full mx-auto ">
          <div className="grid grid-cols-8 lg:grid-cols-12 gap-[30px]">
            <div data-aos="fade-up" className="col-span-8">
              <h1 className="font-semibold text-[30px] leading-[42px] text-main-black tracking-wide poppins-font mb-[30px]">
                Blogs
              </h1>
              {/* <p className="text-paragraph mt-[30px] mb-10 max-w-[786px] tracking-wide poppins-font">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                autem velit laborum doloribus cum perspiciatis incidunt quod,
                delectus libero esse? Lorem ipsum dolor sit amet consectetur
              </p> */}

              <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[7px] gap-y-[12px]">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="col-span-4  pb-10 border  rounded-md bg-[#A3896B] text-white  "
                  >
                    <div className="card">
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
                        <button
                          onClick={() => handleReadMoreClick(blog._id)}
                          className="btn btn-primary px-4 tracking-wide poppins-font"
                        >
                          know more
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="font-semibold text-[27px] items-center flex w-full leading-[35px] tracking-tight text-main-black mt-10">
                <Link to="/bloglist">
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
              <div className="border border-purple/10 rounded-2xl py-[30px] my-4 bg-main-gray">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBlogs;
