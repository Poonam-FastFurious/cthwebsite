import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Baseurl } from "../../Confige";
function Gallery() {
  const [banner, setBanner] = useState([]);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Banner/allabnner")
      .then((Response) => Response.json())
      .then((data) => {
        const aboutusBanners = data.data.filter(
          (banner) => banner.type === "gallery"
        );
        setBanner(aboutusBanners);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Baseurl + "/api/v1/gallery/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGallery(data.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="bg-white    relative">
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
                  Gallery
                </h1>
                <div className="flex gap-5 items-center justify-center mt-4">
                  <Link
                    to="/"
                    className="home-two-nav-item leading-5 relative text-18 font-inter text-main-black  font-bold transition-all duration-300 hover:text-buisness-red"
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
                    className="home-two-nav-item leading-5 relative text-18 font-inter text-main-black  font-bold transition-all duration-300 hover:text-buisness-red"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" w-full mx-auto bg-[#E7DDCD]">
          <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12  bg-[#E7DDCD] p-12 theme-container  mx-auto">
            {gallery.map((items, index) => (
              <div key={index} className="col-span-4">
                <div className="flex justify-center items-center relative group/main overflow-hidden ">
                  <img
                    src={items.image}
                    alt=""
                    className=" h-90 object-cover rounded-lg overflow-hidden  "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
