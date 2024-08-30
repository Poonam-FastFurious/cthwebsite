import { useState } from "react";
import logo from "../assets/logo-no-background.png";
import { Link } from "react-router-dom";
function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div className=" bg-gray-200">
      <footer className=" py-6 px-28  tracking-wide container  mx-auto">
        <div className="flex items-center justify-between max-sm:flex-col gap-5">
          <div>
            <Link to="">
              <img src={logo} alt="logo" className="w-40 h-auto " />
            </Link>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-4 gap-3">
            <li>
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.2188 11.4813C24.2188 5.1388 18.7988 0 12.1094 0C5.41992 0 0 5.1388 0 11.4813C0 17.2117 4.42822 21.9616 10.2173 22.8237V14.8002H7.14111V11.4813H10.2173V8.95169C10.2173 6.07443 12.0239 4.48511 14.791 4.48511C16.1162 4.48511 17.502 4.70918 17.502 4.70918V7.5332H15.9746C14.4707 7.5332 14.0015 8.41837 14.0015 9.32622V11.4813H17.3599L16.8228 14.8002H14.0015V22.8237C19.7905 21.9616 24.2188 17.2117 24.2188 11.4813Z"
                  fill="black"
                />
              </svg>
            </li>

            {/* <li>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.946 6.00255C7.84058 6.00255 5.33569 8.37751 5.33569 11.3219C5.33569 14.2663 7.84058 16.6412 10.946 16.6412C14.0515 16.6412 16.5564 14.2663 16.5564 11.3219C16.5564 8.37751 14.0515 6.00255 10.946 6.00255ZM10.946 14.7802C8.93921 14.7802 7.29858 13.2293 7.29858 11.3219C7.29858 9.41453 8.93433 7.86363 10.946 7.86363C12.9578 7.86363 14.5935 9.41453 14.5935 11.3219C14.5935 13.2293 12.9529 14.7802 10.946 14.7802ZM18.0945 5.78496C18.0945 6.47476 17.5085 7.02568 16.7859 7.02568C16.0584 7.02568 15.4773 6.47013 15.4773 5.78496C15.4773 5.09979 16.0632 4.54424 16.7859 4.54424C17.5085 4.54424 18.0945 5.09979 18.0945 5.78496ZM21.8103 7.0442C21.7273 5.38219 21.3269 3.91 20.0427 2.69705C18.7634 1.48411 17.2107 1.10449 15.4578 1.02116C13.6511 0.923937 8.23608 0.923937 6.42944 1.02116C4.6814 1.09986 3.12866 1.47948 1.84448 2.69242C0.560303 3.90537 0.164795 5.37756 0.0769043 7.03957C-0.0256348 8.7525 -0.0256348 13.8867 0.0769043 15.5996C0.159912 17.2616 0.560303 18.7338 1.84448 19.9467C3.12866 21.1597 4.67651 21.5393 6.42944 21.6226C8.23608 21.7199 13.6511 21.7199 15.4578 21.6226C17.2107 21.5439 18.7634 21.1643 20.0427 19.9467C21.322 18.7338 21.7224 17.2616 21.8103 15.5996C21.9128 13.8867 21.9128 8.75713 21.8103 7.0442ZM19.4763 17.4375C19.0955 18.3449 18.3582 19.044 17.3962 19.4097C15.9558 19.9514 12.5378 19.8264 10.946 19.8264C9.35425 19.8264 5.9314 19.9467 4.49585 19.4097C3.53882 19.0486 2.80151 18.3496 2.41577 17.4375C1.84448 16.0718 1.97632 12.8311 1.97632 11.3219C1.97632 9.81267 1.84937 6.56736 2.41577 5.20627C2.79663 4.29888 3.53394 3.59982 4.49585 3.23408C5.93628 2.69242 9.35425 2.81742 10.946 2.81742C12.5378 2.81742 15.9607 2.69705 17.3962 3.23408C18.3533 3.59519 19.0906 4.29425 19.4763 5.20627C20.0476 6.57198 19.9158 9.81267 19.9158 11.3219C19.9158 12.8311 20.0476 16.0764 19.4763 17.4375Z"
                  fill="black"
                />
              </svg>
            </li> */}

            <li>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3125 0.948242H1.55762C0.698242 0.948242 0 1.61953 0 2.44359V20.1933C0 21.0173 0.698242 21.6886 1.55762 21.6886H20.3125C21.1719 21.6886 21.875 21.0173 21.875 20.1933V2.44359C21.875 1.61953 21.1719 0.948242 20.3125 0.948242ZM6.61133 18.7257H3.36914V8.82773H6.61621V18.7257H6.61133ZM4.99023 7.4759C3.9502 7.4759 3.11035 6.67499 3.11035 5.69353C3.11035 4.71206 3.9502 3.91115 4.99023 3.91115C6.02539 3.91115 6.87012 4.71206 6.87012 5.69353C6.87012 6.67962 6.03027 7.4759 4.99023 7.4759ZM18.7646 18.7257H15.5225V13.911C15.5225 12.7628 15.498 11.286 13.8379 11.286C12.1484 11.286 11.8896 12.536 11.8896 13.8276V18.7257H8.64746V8.82773H11.7578V10.1796H11.8018C12.2363 9.4018 13.2959 8.58237 14.873 8.58237C18.1543 8.58237 18.7646 10.6333 18.7646 13.2999V18.7257Z"
                  fill="black"
                />
              </svg>
            </li>

            <li>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5312 0.948242H2.34375C1.0498 0.948242 0 1.94359 0 3.17042V19.4664C0 20.6933 1.0498 21.6886 2.34375 21.6886H19.5312C20.8252 21.6886 21.875 20.6933 21.875 19.4664V3.17042C21.875 1.94359 20.8252 0.948242 19.5312 0.948242ZM17.1436 8.29996C17.1533 8.42959 17.1533 8.56385 17.1533 8.69348C17.1533 12.7073 13.9307 17.3322 8.04199 17.3322C6.22559 17.3322 4.54102 16.8322 3.125 15.9711C3.38379 15.9989 3.63281 16.0082 3.89648 16.0082C5.39551 16.0082 6.77246 15.5267 7.87109 14.7119C6.46484 14.6841 5.2832 13.8091 4.87793 12.6054C5.37109 12.6749 5.81543 12.6749 6.32324 12.5499C4.8584 12.2675 3.75977 11.0453 3.75977 9.56846V9.53142C4.18457 9.75827 4.68262 9.89716 5.20508 9.91568C4.76583 9.63866 4.40575 9.26285 4.15697 8.82179C3.90818 8.38072 3.77843 7.88812 3.7793 7.38794C3.7793 6.82314 3.93555 6.30463 4.21387 5.85556C5.79102 7.69812 8.15918 8.9018 10.8154 9.03143C10.3613 6.97128 11.9873 5.30002 13.9404 5.30002C14.8633 5.30002 15.6934 5.66575 16.2793 6.25833C17.002 6.12871 17.6953 5.87408 18.3105 5.52686C18.0713 6.23056 17.5684 6.82314 16.9043 7.19813C17.5488 7.13332 18.1738 6.96202 18.75 6.72592C18.3154 7.33239 17.7686 7.86942 17.1436 8.29996Z"
                  fill="black"
                />
              </svg>
            </li>
            <li>
              <svg
                width="30"
                height="30"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2084 3.26548C22.9358 2.29224 22.1326 1.52575 21.1128 1.26564C19.2642 0.792969 11.8519 0.792969 11.8519 0.792969C11.8519 0.792969 4.43954 0.792969 2.59097 1.26564C1.57114 1.5258 0.767925 2.29224 0.495312 3.26548C0 5.02952 0 8.71003 0 8.71003C0 8.71003 0 12.3905 0.495312 14.1546C0.767925 15.1278 1.57114 15.8624 2.59097 16.1225C4.43954 16.5952 11.8519 16.5952 11.8519 16.5952C11.8519 16.5952 19.2642 16.5952 21.1128 16.1225C22.1326 15.8624 22.9358 15.1278 23.2084 14.1546C23.7037 12.3905 23.7037 8.71003 23.7037 8.71003C23.7037 8.71003 23.7037 5.02952 23.2084 3.26548ZM9.4276 12.0517V5.3684L15.6229 8.71011L9.4276 12.0517Z"
                  fill="black"
                />
              </svg>
            </li>
          </ul>
        </div>
      </footer>
      <hr className="my-6 border-gray-500 container mx-auto" />
      <div className="flex max-md:flex-col gap-4 px-24 container mx-auto ">
        <ul className="flex flex-wrap gap-4">
          {/* <li className="text-sm">
            <Link to="#" className=" font-semibold hover:underline">
              Find member
            </Link>
          </li> */}
          <li className="text-sm">
            <Link to="/Signup" className=" font-semibold hover:underline">
              Become a Member
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="https://towlhall.dev-testing-team.tech"
              target="_blank"
              className=" font-semibold hover:underline"
            >
              Community
            </Link>
          </li>
          <li className="text-sm">
            <Link to="/bloglist" className=" font-semibold hover:underline">
              Blog
            </Link>
          </li>
        </ul>
        <div className="text-sm  md:ml-auto">
          <ul className="flex flex-wrap gap-4">
            {/* <li className="text-sm">
              <Link to="#" className=" font-semibold hover:underline">
                Join CTH
              </Link>
            </li> */}
            <li className="text-sm">
              <Link to="/contact" className=" font-semibold hover:underline">
                Help Center
              </Link>
            </li>
            <li className="text-sm">
              <Link to="#" className=" font-semibold hover:underline">
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex max-md:flex-col gap-4 container mx-auto px-24 py-8">
        <p className=" text-sm ">
          Copyright © 2024
          <Link to="#" target="_blank" className="hover:underline mx-1">
            CTH
          </Link>
          All Rights Reserved.
        </p>
        <div className="text-sm  md:ml-auto">
          <ul className="flex flex-wrap gap-4">
            <li className="text-sm">
              <Link to="/contact" className=" font-semibold hover:underline">
                Contact us
              </Link>
            </li>
            <li className="text-sm">
              <Link to="#" className=" font-semibold hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="text-sm">
              <Link to="#" className=" font-semibold hover:underline">
                Term of use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-buisness-red hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-expanded={isChatOpen ? "true" : "false"}
        data-state={isChatOpen ? "open" : "closed"}
        onClick={toggleChat}
      >
        <svg
          xmlns=" http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>
      {isChatOpen && (
        <div className=" z-50 fixed   bottom-20  overflow-y-scroll right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-auto">
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
            <p className="text-sm text-[#6b7280] leading-3">
              Powered by complaincetownhall
            </p>
          </div>

          <div
            className="pr-4 h-[474px]"
            style={{ "min-width": "100%", display: "table" }}
          >
            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">AI </span>Hi,
                how can I help you today?
              </p>
            </div>

            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">You </span>
                fewafef
              </p>
            </div>

            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">AI </span>Sorry,
                I couldn find any information in the documentation about that.
                Expect answer to be less accurateI could not find the answer to
                this in the verified sources.
              </p>
            </div>
          </div>

          <div className="flex items-center pt-0">
            <form className="flex items-center justify-center w-full space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                placeholder="Type your message"
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-buisness-red hover:bg-buisness-red h-10 px-4 py-2">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
