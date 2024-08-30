import { useEffect, useState } from "react";
import { MdOutlineWorkHistory } from "react-icons/md";

import { Link } from "react-router-dom";
import { Baseurl } from "../../Confige";

function DiscoverTheWord() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/associate/all")
      .then((responce) => responce.json())
      .then((data) => setMembers(data.data));
  }, []);
  return (
    <div className="bg-[#E7DDCD]">
      <section className=" mx-auto max-w-[1600px] w-full xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]   xl:px-[80px] md:px-10 px-0 bg-main-gray  bg-[#E7DDCD]">
        <div className="theme-container w-full mx-auto">
          <div className="flex flex-col xl:flex-row justify-between w-full">
            <div className="">
              <h2 className="text-black font-semibold text-[30px] text-center sm:text-48 pt-5  tracking-normal poppins-font">
                Connect with our Distinguish members
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 items-center">
              <Link to="/Signup">
                <div className="home-two-btn-bg group bg-buisness-light-black border-white/10 py-[15px]">
                  <span className="text-base group-hover:text-buisness-light-black text-white transition-all duration-300 font-semibold  relative z-10 tracking-normel poppins-font">
                    Join Our Team
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
                      className="group-hover:stroke-buisness-light-black stroke-white transition-all duration-300"
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
          <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px]">
            {members.slice(0, 4).map((member, index) => (
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
                  <Link to="associatedMembers " className="tracking-wide">
                    {member.user
                      ? `${member.user.firstName} ${member.user.lastName}`
                      : "Anonymous"}{" "}
                  </Link>
                </h1>

                <div className=" flex ml-[12px] items-center gap-[12px] mb-3">
                  <MdOutlineWorkHistory className=" text-xl" />
                  <span className=" mt-1 tracking-wide text-[14px] poppins-font ">
                    {member.designation}
                  </span>
                </div>

                <div className=" flex ml-[12px] items-center gap-[12px] mb-3">
                  <MdOutlineWorkHistory className=" text-xl" />
                  <span className=" mt-1 tracking-wide text-[14px] poppins-font ">
                    Experience
                  </span>
                  <span className=" mt-1 tracking-wide ml-4 text-[14px] poppins-font">
                    {member.experience} years
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DiscoverTheWord;
