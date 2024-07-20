import { MdOutlineWorkHistory } from "react-icons/md";

import { TbMessageChatbot } from "react-icons/tb";
import { Link } from "react-router-dom";

function Usercard() {
  return (
    <div className="theme-container w-full mx-auto py-16 md:py-[130px] relative bg-[#E7DDCD]">
      <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px]">
        <div className="col-span-3 border border-buisness-red bg-white rounded-lg">
          <div className="flex justify-center items-center relative group/main overflow-hidden">
            <img
              src="https://quomodothemes.website/html/quland-html/assets/images/home-three/teams/1.webp"
              alt=""
              className="w-full object-cover rounded-lg overflow-hidden"
            />
          </div>
          <h1 className="text-18  font-semibold text-black mt-6 white_card_title px-3  poppins-font mb-3">
            <Link to="associatedMembers " className="tracking-wide">
              Steven N. Manning
            </Link>
          </h1>

          <div className=" flex ml-[12px] items-center gap-[12px] mb-3">
            <MdOutlineWorkHistory className=" text-xl" />
            <span className=" mt-1 tracking-wide text-[14px] poppins-font ">
              Marketing Head at Xyz
            </span>
          </div>
          <div className=" flex ml-[12px] items-center gap-[8px] mb-3">
            <TbMessageChatbot className=" text-xl" />
            <span className=" mt-1 tracking-wide text-[14px] poppins-font ">
              237 Sessions (28 Reviews)
            </span>
          </div>
          <div className=" flex ml-[12px] items-center gap-[8px]  mb-3">
            <MdOutlineWorkHistory className=" text-xl" />
            <span className=" mt-1 tracking-wide text-[14px] poppins-font ">
              Experience
            </span>
            <span className=" mt-1 tracking-wide ml-4 text-[14px] poppins-font">
              8 years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercard;
