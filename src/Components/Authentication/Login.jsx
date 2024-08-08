// import { Link, useNavigate } from "react-router-dom";
// import image from "../../assets/loginimage.png";
// import { useState } from "react";
// import Cookies from "js-cookie";
// import { Baseurl } from "../../Confige";
// function Login() {
//   const [formData, setFormData] = useState({ emailOrMobile: "", otp: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const isEmail = (value) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const { emailOrMobile, otp } = formData;
//     const loginData = isEmail(emailOrMobile)
//       ? { emailAddress: emailOrMobile, OTP: otp }
//       : { contactNumber: emailOrMobile, OTP: otp };

//     try {
//       const response = await fetch(Baseurl + "/api/v1/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log(result.data);
//         // Handle successful login, e.g., navigate to a different page
//         localStorage.setItem("accessToken", result.data.accessToken);
//         localStorage.setItem("refreshToken", result.data.refreshToken);
//         localStorage.setItem("userId", result.data.user._id);
//         Cookies.set("accessToken", result.data.accessToken);
//         Cookies.set("refreshToken", result.data.refreshToken);
//         Cookies.set("userId", result.data.user._id);

//         navigate("/");
//       } else {
//         // Handle error response
//         setError(result.message || "Login failed");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-col justify-center items-center pt-20 bg-white md:h-auto  ">
//         <div className="grid md:grid-cols-2 items-center gap-y-8 max-w-7xl w-full shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] m-6 rounded-xl relative overflow-hidden">
//           <div className="max-md:order-1 p-4 bg-[#FFFFE7] h-full">
//             <img
//               src={image}
//               alt="login-image"
//               className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
//             />
//           </div>

//           <div className="flex flex-col justify-center  sm:h-auto p-4">
//             <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-6 shadow-xl">
//               <form
//                 className="max-w-xl w-full p-4 mx-auto"
//                 onSubmit={handleSubmit}
//               >
//                 <div className="mb-12  container w-[80%] mx-auto flex justify-between">
//                   <button className="text-gray-800 text-[20px] font-bold tracking-wide poppins-font">
//                     <Link to="/Login ">
//                       Sign in
//                       <hr className=" h-1 w-[100%] bg-[#B08D57]" />
//                     </Link>
//                   </button>
//                   <button className="text-gray-800 text-[20px] font-bold tracking-wide poppins-font">
//                     <Link to="/Signup">Sign up</Link>
//                   </button>
//                 </div>

//                 <div>
//                   <label className="text-gray-800 text-sm block mb-2   tracking-wide poppins-font">
//                     Email/Mobile
//                   </label>
//                   <div className="relative flex items-center">
//                     <input
//                       name="emailOrMobile"
//                       type="text"
//                       value={formData.emailOrMobile}
//                       onChange={handleChange}
//                       required
//                       className="w-full text-sm text-gray-800 border border-gray-300 focus:border-buisness-red px-2 py-3 outline-none"
//                       placeholder="Enter email / mobile"
//                     />
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="#bbb"
//                       stroke="#bbb"
//                       className="w-[18px] h-[18px] absolute right-2"
//                       viewBox="0 0 682.667 682.667"
//                     >
//                       <defs>
//                         <clipPath id="a" clipPathUnits="userSpaceOnUse">
//                           <path
//                             d="M0 512h512V0H0Z"
//                             data-original="#000000"
//                           ></path>
//                         </clipPath>
//                       </defs>
//                       <g
//                         clipPath="url(#a)"
//                         transform="matrix(1.33 0 0 -1.33 0 682.667)"
//                       >
//                         <path
//                           fill="none"
//                           strokeMiterlimit="10"
//                           strokeWidth="40"
//                           d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
//                           data-original="#000000"
//                         ></path>
//                         <path
//                           d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
//                           data-original="#000000"
//                         ></path>
//                       </g>
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <label className="text-gray-800 text-sm block mb-2 tracking-wide poppins-font">
//                     OTP
//                   </label>
//                   <div className="relative flex items-center">
//                     <input
//                       name="otp"
//                       type="text"
//                       value={formData.otp}
//                       onChange={handleChange}
//                       required
//                       className="w-full text-sm text-gray-800 border border-gray-300  px-2 py-3 outline-none"
//                       placeholder="Enter OTP"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
//                   <div className="flex items-center">
//                     <input
//                       id="remember-me"
//                       name="remember-me"
//                       type="checkbox"
//                       className="h-4 w-4 shrink-0 text-[#B08D57] focus:ring-blue-500 border-gray-300 rounded"
//                     />
//                     <label
//                       htmlFor="remember-me"
//                       className="ml-3 block text-sm text-gray-800 tracking-wide poppins-font"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                   <div>
//                     <Link
//                       href="#"
//                       className="text-[#B08D57] font-semibold text-sm hover:underline tracking-wide poppins-font"
//                     >
//                       Forgot Password?
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="mt-12">
//                   <button
//                     type="submit"
//                     className="w-full py-2.5 px-4 text-sm  rounded-md text-white bg-[#B08D57] focus:outline-none tracking-wide poppins-font"
//                     disabled={loading}
//                   >
//                     {loading ? "Logging in..." : "Sign in"}
//                   </button>
//                 </div>

//                 <div className="my-6 flex items-center gap-4">
//                   <hr className="w-full border-gray-300" />
//                   <p className="text-sm text-gray-800 text-center">or</p>
//                   <hr className="w-full border-gray-300" />
//                 </div>

//                 <button
//                   type="button"
//                   className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm  text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none tracking-wide poppins-font"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20px"
//                     className="inline"
//                     viewBox="0 0 512 512"
//                   >
//                     <path
//                       fill="#fbbd00"
//                       d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
//                       data-original="#fbbd00"
//                     />
//                     <path
//                       fill="#0f9d58"
//                       d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
//                       data-original="#0f9d58"
//                     />
//                     <path
//                       fill="#31aa52"
//                       d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
//                       data-original="#31aa52"
//                     />
//                     <path
//                       fill="#3c79e6"
//                       d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
//                       data-original="#3c79e6"
//                     />
//                     <path
//                       fill="#cf2d48"
//                       d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
//                       data-original="#cf2d48"
//                     />
//                     <path
//                       fill="#eb4132"
//                       d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
//                       data-original="#eb4132"
//                     />
//                   </svg>
//                   Continue with google
//                 </button>
//                 <div className=" my-4">
//                   <p className="text-gray-800 text-sm mt-6 text-center tracking-wide poppins-font">
//                     Don’t have an account yet?
//                     <Link
//                       to="/Signup"
//                       className="text-[#B08D57] font-semibold hover:underline ml-1 tracking-wide poppins-font"
//                     >
//                       Sign up
//                     </Link>
//                   </p>
//                   {error && (
//                     <div className="mt-4 text-red-600 text-sm text-center">
//                       {error}
//                     </div>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
