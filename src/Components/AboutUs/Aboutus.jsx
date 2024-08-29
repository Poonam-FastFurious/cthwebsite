/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Baseurl } from "../../Confige";
import image from "../../assets/galleryimgswsl.jpeg";
import backimage from "../../assets/banner.png";
function Aboutus() {
  const [banner, setBanner] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Banner/allabnner")
      .then((Response) => Response.json())
      .then((data) => {
        const aboutusBanners = data.data.filter(
          (banner) => banner.type === "AboutUs"
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
              <img src="assets/images/home-one-hero-circle-shadow.svg" alt="" />
            </div>
          </div>
          <div className=" mx-auto h-auto w-fit relative z-10">
            <div className="mt-[120px] md:mt-[272px] w-auto mx-auto relative z-10">
              <h1 className="text-main-black text-34 sm:text-48 font-semibold w-full text-center">
                About Us
              </h1>
              <div className="flex gap-5 items-center justify-center mt-4">
                <Link
                  to="/"
                  className="home-two-nav-item leading-5  relative text-18 font-inter text-main-black font-bold  transition-all duration-300 hover:text-buisness-red"
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
                  href="/bloglist"
                  className="home-two-nav-item  leading-5 relative text-18 font-inter text-main-black font-bold  transition-all duration-300 hover:text-buisness-red"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-[110px]">
        <div className="theme-container mx-auto w-full">
          <div className="grid grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-0 h-fit">
            <div className="col-span-6 lg:pr-[87px] flex h-full items-center">
              <div className="">
                <div className="py-1.5 md:py-3 px-5 rounded-[30px] border-[1.2px]  w-fit bg-buisness-red">
                  <h1 className="text-base  font-medium text-white  leading-5   poppins-font tracking-wide">
                    About us
                  </h1>
                </div>
                <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5   poppins-font tracking-normal">
                  Who We Are?
                </h1>
                <p className="mt-5 md:mt-10 text-paragraph   poppins-font tracking-normal text-black text-justify">
                  At Compliance Townhall, we help businesses stay on top of
                  corporate compliance. We understand the rules and regulations
                  across different industries and provide customized strategies
                  to ensure your company meets all necessary standards smoothly.
                  <br />
                  <br />
                  Our platform allows professionals to gather with a shared
                  goal: achieving compliance excellence. Here, industry leaders
                  and experts discuss various issues in their fields, exchange
                  ideas, share knowledge, and collaborate freely and
                  independently.
                  <br /> <br />
                  Join us at Compliance Townhall, where we believe in the power
                  of working together to navigate the complexities of corporate
                  compliance and achieve lasting success.
                </p>
              </div>
            </div>
            <div className="col-span-6 relative flex flex-col sm:flex-row justify-end items-center">
              <div className="relative col-span-6 flex flex-col sm:flex-row justify-center items-center gap-[30px]">
                <svg
                  className="absolute z-0 -top-16 max-w-full"
                  width="465"
                  height="465"
                  viewBox="0 0 465 465"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="232.5"
                    cy="232.5"
                    r="231.9"
                    stroke="#161519"
                    strokeOpacity="0.07"
                    strokeWidth="1.2"
                  ></circle>
                </svg>
                <img
                  data-aos="fade-left"
                  src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about1.webp"
                  alt=""
                  className="relative z-10 hidden sm:block"
                />
                <img
                  data-aos="fade-left"
                  data-aos-delay="100"
                  src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about2.webp"
                  alt=""
                  className="relative z-10"
                />
                <div className="bg-buisness-red p-[30px] rounded-2xl absolute z-10 bottom-8 w-[295px]">
                  <img
                    src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                    alt=""
                    className="absolute right-2 top-bottom-moving"
                  />
                  <div className="flex items-center gap-2.5">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white leading-8   poppins-font tracking-wide">
                      We have
                    </span>
                  </div>
                  <h1
                    className="text-[27px] leading-[35px] text-white font-semibold   poppins-font  max-w-[170px] "
                    data-scroll-qs="scroll"
                    data-count-qs="25"
                    data-type-qs="+ Years of Experience"
                    data-speed-qs="1000"
                  >
                    25+ Years of Experience
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  md:pb-[130px] items-center">
        <div className="theme-container mx-auto w-full">
          <div className="grid grid-cols-6 lg:grid-cols-12 box-border">
            <div className="col-span-6 lg:pr-[87px] flex h-full items-center">
              <img
                src={image}
                alt="img"
                className="mt-9 w-full max-w-[630px]"
              />
            </div>
            <div className="col-span-6 relative  justify-end items-center">
              <h1 className="text-24 md:text-[30px] font-semibold text-main-black mt-2.5 md:mt-5 tracking-normal   poppins-font ">
                Why was it needed?
              </h1>
              <p
                className="mt-5 md:mt-10 text-paragraph pb-10   poppins-font tracking-normal text-black text-justify
              "
              >
                We created Compliance Townhall because we saw a need for a
                dedicated space where professionals could easily navigate the
                complex world of corporate compliance. Many businesses need help
                to keep up with constantly changing regulations, leading to
                confusion and potential legal issues.
                <br />
                <br />
                We wanted to provide a solution that not only helps businesses
                meet these standards but also fosters a community of learning
                and collaboration. By bringing together industry leaders and
                experts, we aim to create a platform where people can discuss
                challenges, share insights, and work together to achieve
                compliance excellence.
                <br />
                <br />
                Our goal is to make compliance simpler and more accessible,
                empowering businesses to operate smoothly and successfully in an
                ever-evolving regulatory environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="  md:pb-[130px] items-center xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px] w-full"
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          minHeight: "100vh", // Ensures the div has enough height to display the image
        }}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-main-black font-semibold text-center text-3xl pt-5 poppins-font">
            Compliance Townhall Chatroom
          </h2>
          <p className=" max-w-4xl text-center mt-4 tracking-normal">
            To solve the challenges of navigating complex corporate compliance,
            we created the Compliance Townhall Chatroom—a dedicated community
            for professionals to discuss, solve, and engage with
            compliance-related matters
          </p>
        </div>
        <div className="theme-container mx-auto w-full">
          <div className="max-w-7xl mx-auto py-8 ">
            <h2 className="text-24 md:text-[20px] font-semibold text-main-black my-8   poppins-font tracking-normal text-center ">
              Features and Functionalities
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto  border border-buisness-red">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Discussion Forums</h3>
                  <p className="mt-2 text-md  text-gray-500 leading-normal">
                    Separate channels for various compliance topics, allowing
                    focused discussions and easy access to relevant information
                    <br />
                    <br /> <br />
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto  border border-buisness-red">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    Case Studies and Solutions
                  </h3>
                  <p className="mt-2 text-md  text-gray-500 leading-normal">
                    Members can share and discuss real-world compliance cases,
                    learning from each other’s experiences. Work together to
                    find solutions to complex compliance issues.
                    <br />
                    <br /> <br />
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto  border border-buisness-red">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Knowledge Sharing</h3>
                  <p className="mt-2 text-md  text-gray-500 leading-normal">
                    Access to a library of compliance resources, including
                    articles, whitepapers, and legal documents. Share and
                    discover best practices for compliance management across
                    different industries.
                    <br />
                    <br /> <br />
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto  border border-buisness-red">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    Networking Opportunities
                  </h3>
                  <p className="mt-2 text-md  text-gray-500 leading-normal">
                    Connect with compliance professionals from various
                    industries and backgrounds. Participate in virtual events
                    and webinars to stay updated on the latest trends and
                    developments in corporate compliance.
                    <br />
                    <br /> <br />
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto  border border-buisness-red">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    Collaboration and Independence
                  </h3>
                  <p className="mt-2 text-md  text-gray-500 leading-normal">
                    Form project groups to collaborate on specific compliance
                    initiatives. Encourage open and independent discussions,
                    allowing members to freely express their thoughts and ideas.
                    <br />
                    <br /> <br />
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto  border border-buisness-red">
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Discussion Forums</h3>
                  <p className="mt-2 text-md  text-gray-500 leading-normal">
                    Separate channels for various compliance topics, allowing
                    focused discussions and easy access to relevant information
                    <br />
                    <br /> <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px] w-full bg-[#A3896B]">
        <div className="theme-container w-full mx-auto">
          <h2 className="max-w-[623px] font-semibold text-[40px] sm:text-24 text-white text-center mx-auto mt-5  tracking-normal   poppins-font ">
            Our Founder Stories
          </h2>

          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] my-[70px]">
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-100 h-fit">
                <iframe
                  width="100"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                ></iframe>
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10   poppins-font tracking-normal">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between   poppins-font tracking-normal ">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum libero fugit maxime cupiditate consequatur,
                    distinctio accusantium. Deleniti, distinctio accusamus
                    possimus tenetur quidem dolorum modi ut?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-100 h-fit">
                <iframe
                  width="100"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                ></iframe>
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10 poppins-font tracking-normal">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between   poppins-font tracking-wide">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum libero fugit maxime cupiditate consequatur,
                    distinctio accusantium. Deleniti, distinctio accusamus
                    possimus tenetur quidem dolorum modi ut?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-100 h-fit">
                <iframe
                  width="100"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                ></iframe>
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10 poppins-font tracking-normal">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between   poppins-font tracking-wide">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum libero fugit maxime cupiditate consequatur,
                    distinctio accusantium. Deleniti, distinctio accusamus
                    possimus tenetur quidem dolorum modi ut?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default Aboutus;
