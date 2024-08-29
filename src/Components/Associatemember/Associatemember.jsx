import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Baseurl } from "../../Confige";
import { MdOutlineWorkHistory } from "react-icons/md";
function Associatemember() {
  const [banner, setBanner] = useState([]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Banner/allabnner")
      .then((Response) => Response.json())
      .then((data) => {
        const aboutusBanners = data.data.filter(
          (banner) => banner.type === "associatedMembers"
        );
        setBanner(aboutusBanners);
      });
  }, []);

  useEffect(() => {
    fetch(Baseurl + "/api/v1/associate/all")
      .then((responce) => responce.json())
      .then((data) => setMembers(data.data));
  }, []);
  return (
    <>
      <section className="bg-white pt-16  relative">
        <section id="h1-breadcrumb">
          <div className="h1-breadcrumb w-full h-fit overflow-hidden relative bg-main-gray pb-16 md:pb-24">
            <div
              className="win-grid win-grid-bg w-full h-full absolute left-0 top-0 z-0 overflow-hidden"
              id="win-grid"
            >
              {banner.map((img, index) => (
                <img src={img.image} alt="" className=" w-full " key={index} />
              ))}
            </div>
            <div className="absolute left-1/4 w-full top-[300px] overflow-hidden z-0 pointer-events-none">
              <div className="flex justify-center">
                <img
                  src="assets/images/home-one-hero-circle-shadow.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="theme-container mx-auto h-auto w-fit relative z-10">
              <div className="mt-[120px] md:mt-[272px] w-auto mx-auto relative z-10">
                <h1 className="text-main-black text-34 sm:text-48 font-semibold w-full text-center">
                  Associated Members
                </h1>
                <div className="flex gap-5 items-center justify-center mt-4">
                  <Link
                    to="/"
                    className="home-two-nav-item text-main-black leading-5 relative text-18 font-inter  font-bold transition-all duration-300 hover:text-buisness-red"
                  >
                    Home
                  </Link>
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 6L1 11"
                      stroke="#794AFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <Link
                    href="/Contact"
                    className="home-two-nav-item leading-5 relative text-18 font-inter text-main-black font-bold transition-all duration-300 hover:text-buisness-red"
                  >
                    Associated Members
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="theme-container w-full mx-auto xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="font-medium text-white border border-buisness-red bg-buisness-red px-5 rounded-[30px] py-1 w-fit tracking-wider poppins-font ">
              Associated Members
            </h1>
            <h2 className="text-main-black font-semibold text-16 sm:text-3xl pt-5 poppins-font">
              Experience Associated Members
            </h2>
          </div>
          <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px]">
            {members.map((member, index) => (
              <div
                key={index}
                className="col-span-3 border border-buisness-red bg-white rounded-lg"
              >
                <div className="flex justify-center items-center relative group/main overflow-hidden">
                  <img
                    src={member.image}
                    alt=""
                    className="w-full object-cover rounded-lg overflow-hidden"
                  />
                </div>
                <h1 className="text-18  font-semibold text-black mt-6 white_card_title px-3 poppins-font mb-3">
                  <Link to="associatedMembers" className="tracking-wide">
                    {member.user
                      ? member.user.firstName + " " + member.user.lastName
                      : "No Name Available"}
                  </Link>
                </h1>

                <div className="flex ml-[12px] items-center gap-[12px] mb-3">
                  <MdOutlineWorkHistory className="text-xl" />
                  <span className="mt-1 tracking-wide text-[14px] poppins-font">
                    {member.designation || "No Designation Available"}
                  </span>
                </div>

                <div className="flex ml-[12px] items-center gap-[12px] mb-3">
                  <MdOutlineWorkHistory className="text-xl" />
                  <span className="mt-1 tracking-wide text-[14px] poppins-font">
                    Experience
                  </span>
                  <span className="mt-1 tracking-wide ml-4 text-[14px] poppins-font">
                    {member.experience
                      ? `${member.experience} years`
                      : "No Experience Data"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" w-full bg-[#E7DDCD] xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px] ">
        <div className="theme-container w-full mx-auto">
          <h1 className="px-5 bg-buisness-red border border-orange/20 py-1  text-white font-medium rounded-[30px] w-fit mx-auto poppins-font tracking-wider">
            Video Testimonials
          </h1>
          <h2 className="max-w-[623px] font-semibold text-10 sm:text-24 text-main-black text-center mx-auto mt-5 poppins-font  text-main-black text-16 sm:text-3xl pt-5 poppins-font">
            Hear From Our Happy Customers
          </h2>

          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] my-[70px]">
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
                <img
                  src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png"
                  alt=""
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                />
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10 poppins-font">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex">
                    <img
                      src="https://readymadeui.com/profile_2.webp"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-sm font-bold text-gray-800 poppins-font">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 poppins-font">
                        johndoe23@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
                <img
                  src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png"
                  alt=""
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                />
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10  poppins-font">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex">
                    <img
                      src="https://readymadeui.com/profile_2.webp"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-sm font-bold text-gray-800 poppins-font">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 poppins-font">
                        johndoe23@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
                <img
                  src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png"
                  alt=""
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                />
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10 poppins-font">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between ">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex">
                    <img
                      src="https://readymadeui.com/profile_2.webp"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-sm font-bold text-gray-800 poppins-font">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 poppins-font">
                        johndoe23@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Link to="#">
            <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-[15px] w-fit  mx-auto">
              <span className="text-base   group-hover:text-buisness-red text-white transition-all duration-300 font-semibold font-inter relative z-10">
                Learn more
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
          </Link> */}
        </div>
      </section>
    </>
  );
}

export default Associatemember;
