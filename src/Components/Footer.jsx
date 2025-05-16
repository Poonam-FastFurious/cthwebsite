// import { useState } from "react";
import logo from "../assets/logo-no-background.png";
import { Link } from "react-router-dom";
function Footer() {
  
  return (
    <div className=" bg-gray-200">
      <footer className=" py-6   tracking-wide container  mx-auto">
        <div className="flex px-4 justify-between max-sm:flex-col gap-5">
          <div>
            <Link to="">
              <img src={logo} alt="logo" className=" h-auto " />
            </Link>
          </div>

          <ul className="flex flex-wrap  gap-x-4 gap-3">
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
      <hr className="my-6 border-gray-500  mx-auto" />
      <div className="flex max-md:flex-col gap-4  px-4 container mx-auto ">
        <ul className="flex flex-wrap gap-4">
          
          <li className="text-sm">
            <Link to="/membersip" className=" font-semibold hover:underline">
              Become a Member
            </Link>
          </li>
          <li className="text-sm">
            <Link
              to="https://chat.compliancetownhall.com"
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
            
            <li className="text-sm">
              <Link to="/contact" className=" font-semibold hover:underline">
                Help Center
              </Link>
            </li>
            <li className="text-sm">
              <Link to="/contact" className=" font-semibold hover:underline">
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex max-md:flex-col gap-4 container mx-auto  px-4 py-8">
        <div className="text-sm  md:ml-auto">
          <ul className="flex flex-wrap gap-4">
            <li className="text-sm">
              <Link to="/contact" className=" font-semibold hover:underline">
                Contact us
              </Link>
            </li>
            <li className="text-sm">
              <Link to="/privacy-policy" className=" font-semibold hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="text-sm">
              <Link to="/termsandconditions" className=" font-semibold hover:underline">
                Term of use
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <p className=" text-sm  text-center ">
          Copyright © 2024
          <Link to="#" target="_blank" className="hover:underline mx-1">
            CTH
          </Link>
          All Rights Reserved.
        </p>
      </div>
     
    </div>
  );
}

export default Footer;
