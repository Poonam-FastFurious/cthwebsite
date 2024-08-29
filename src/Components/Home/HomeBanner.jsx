/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Baseurl } from "../../Confige";

const BannerItem = ({ backgroundImage, title, subtitle, description }) => (
  <div className="w-full">
    <section
      className="w-full bg-cover bg-center relative overflow-hidden pt-28"
      style={{ backgroundImage }}
    >
      <div className="w-full max-w-[1506px] relative theme-container mx-auto grid grid-cols-6 xl:grid-cols-12 z-10">
        <div className="col-span-5 my-auto">
          <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_460_23214)">
                <path
                  d="M9.99955 10.9371L0.0498047 7.62184C0.131053 7.4156 0.315423 7.26529 0.534167 7.23435L6.68714 6.32812L9.99955 10.9371Z"
                  fill="#FEC461"
                ></path>
                <path
                  d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                  fill="#F7B84E"
                ></path>
                <path
                  d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                  fill="#FEC461"
                ></path>
                <path
                  d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                  fill="#F7B84E"
                ></path>
                <path
                  d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                  fill="#FEC461"
                ></path>
                <path
                  d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                  fill="#F7B84E"
                ></path>
                <path
                  d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                  fill="#FEC461"
                ></path>
                <path
                  d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                  fill="#F7B84E"
                ></path>
                <path
                  d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                  fill="#FEC461"
                ></path>
                <path
                  d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                  fill="#F7B84E"
                ></path>
              </g>
              <defs>
                <clippath id="clip0_460_23214">
                  <rect width="20" height="20" fill="white"></rect>
                </clippath>
              </defs>
            </svg>
            <span className="font-semibold text-18 sm:text-20 text-white poppins-font">
              Compliance TownHall
            </span>
          </div>
          <h1
            className="font-semibold text-24 sm:text-48 xl:text-24 text-white mt-4 sm:mt-8 pr-2 poppins-font"
            data-depth="-0.28"
          >
            {title} <br className="hidden md:block poppins-font" />
            {subtitle}
          </h1>
          <p className="text-18 font-medium font-inter text-white mt-5 md:mt-5 poppins-font">
            {description}
          </p>
        </div>
        <img
          src="https://quomodothemes.website/html/quland-html/assets/images/home-two/hero-img.webp"
          alt="img"
          className="col-span-7 self-end relative right-0 2xl:-right-52 bottom-0 moving-h2-hero-main-img invisible"
        />
      </div>
      <div className="rotating_circle z-0 absolute flex justify-center items-center -bottom-4 xl:-bottom-[150px] right-0 xl:-right-20 h-0 w-full xl:w-[880px] 2xl:max-w-[1250px]">
        <img
          src="https://quomodothemes.website/html/quland-html/assets/images/home-two/round-shape-1.svg"
          alt=""
          className="w-full"
        />
        <img
          src="https://quomodothemes.website/html/quland-html/assets/images/home-two/round-shape-2.svg"
          alt=""
          className="absolute w-10/12"
        />
        <img
          src="https://quomodothemes.website/html/quland-html/assets/images/home-two/round-shape-3.svg"
          alt=""
          className="absolute w-8/12"
        />
        <img
          src="https://quomodothemes.website/html/quland-html/assets/images/home-two/round-shape-4.svg"
          alt=""
          className="absolute w-6/12"
        />
      </div>
    </section>
  </div>
);

function HomeBanner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(Baseurl + "/api/v1/Banner/allabnner");
        const data = await response.json();
        const homeBanners = data.data.filter(
          (banner) => banner.type === "Home"
        );
        setBanners(homeBanners);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = banners.map((item) => (
    <BannerItem
      key={item.id}
      backgroundImage={`url(${item.image})`}
      title={item.title}
      subtitle={item.subtitle}
      description={item.description}
    />
  ));

  return (
    <div className="home_banner_wrap hero__1">
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default HomeBanner;
