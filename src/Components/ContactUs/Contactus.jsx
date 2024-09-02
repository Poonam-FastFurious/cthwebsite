/* eslint-disable react/no-unescaped-entities */
import { FaHome } from "react-icons/fa";
import { MdCall, MdOutlineMailLock } from "react-icons/md";
import InquiryForm from "../Home/InquiryForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Baseurl } from "../../Confige";
function Contactus() {
  const [banner, setBanner] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Banner/allabnner")
      .then((Response) => Response.json())
      .then((data) => {
        const aboutusBanners = data.data.filter(
          (banner) => banner.type === "contact"
        );
        setBanner(aboutusBanners);
      });
  }, []);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/faq/all")
      .then((Response) => Response.json())
      .then((data) => setFaqData(data.data));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section id="h1-breadcrumb">
        <div className=" w-full h-full overflow-hidden relative  pb-16 md:pb-24">
          <div
            className="win-grid win-grid-bg w-full h-full absolute left-0 top-0 z-0 overflow-hidden"
            id="win-grid"
          >
            {banner.map((img, index) => (
              <img src={img.image} alt="" className=" w-full " key={index} />
            ))}
          </div>
          <div className="absolute left-1/4 w-full top-[300px] overflow-hidden z-0 pointer-events-none">
            <div className="flex justify-center"></div>
          </div>
          <div className="theme-container mx-auto h-fit w-fit relative z-10">
            <div className="mt-[120px] md:mt-[272px] w-fit mx-auto relative z-10">
              <h1 className="text-main-black text-34 sm:text-48 font-semibold w-full text-center">
                Contact
              </h1>
              <div className="flex gap-5 items-center justify-center mt-4">
                <Link
                  to="/"
                  className="home-two-nav-item leading-5 relative text-18 font-inter text-main-black font-bold transition-all duration-300 hover:text-buisness-red"
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
                  contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-x-4 gap-y-2 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row ">
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-[#A3896B]">
              <div className=" flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <FaHome className="text-6xl text-white" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize poppins-font">
                Address
              </h4>
              <p className="text-sm font-normal text-white poppins-font">
                Lorem ipsum dolor sit amet consectetur. Sit mauris
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-[#A3896B]">
              <div className=" flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdOutlineMailLock className="text-6xl text-white" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize poppins-font">
                Email Us
              </h4>
              <p className="text-sm font-normal text-white poppins-font">
                info@complinacetownhall.in
                <br />
                info@complinacetownhall.in
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4  border p-8 bg-[#A3896B]">
              <div className=" flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdCall className="text-6xl text-white" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize poppins-font">
                Call Us
              </h4>
              <p className="text-sm font-normal text-white poppins-font">
                1800-532-3367
                <br />
                1800-532-3367
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="flex flex-col items-center pt-12"
        style={{ backgroundColor: "#FFFBF0" }}
      >
        <h2 className="sm:text-48 text-[30px] font-bold text-main-black  text-center lg:w-[685px] w-full poppins-font">
          FEEL FREE TO TALK TO US
        </h2>
        {/* <p className=" max-w-4xl mx-auto text-center mb-[50px] poppins-font">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          quibusdam, impedit alias sunt animi consequuntur dicta praesentium
          laudantium ipsa! Recusandae dignissimos velit maxime culpa.
        </p> */}
      </div>
      <InquiryForm />
      <section className="relative    ">
        <div className="w-full  relative  bg-[#F6F4F1] ">
          <div className="theme-container mx-auto">
            <div className="flex justify-center items-center px-4 md:px-0   relative rounded-3xl overflow-hidden  xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]">
              <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative ">
                <h1 className="py-0.5 px-5 bg-buisness-red border-buisness-red border rounded-[30px] font-medium text-white poppins-font tracking-normal">
                  FAQs
                </h1>
                <h2 className="text-24 sm:text-48 font-semibold text-main-black mt-5 poppins-font tracking-normal">
                  Asked Questions & Answer
                </h2>
                <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className={`faq-item py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 border border-buisness-red bg-white `}
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="w-full flex justify-between items-center h-fit cursor-pointer">
                        <h1 className="font-semibold sm:text-18 text-[#D0A067] poppins-font">
                          {faq.question}
                        </h1>
                        <svg
                          className={`transform transition-transform ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#89580A"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                        className={`faq-answer mt-5 text-[#89580A] poppins-font ${
                          openIndex === index ? "open" : "closed"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden   w-full">
        <div className=" relative w-full h-[240px] sm:h-[450px] md:h-[540px] lg:h-[700px] xl:h-[700px] mx-auto xl:rounded-lg overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56038.870682226014!2d77.35448446557618!3d28.616889411973446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5992452d761%3A0xaaa44725147c1507!2sJSS%20Academy%20of%20Technical%20Education!5e0!3m2!1sen!2sin!4v1719557681515!5m2!1sen!2sin"
            width="100%"
            height="850"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contactus;
