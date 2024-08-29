import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Baseurl } from "../../Confige";
function BlogList() {
  const [banner, setBanner] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    fetch(Baseurl + "/api/v1/Banner/allabnner")
      .then((Response) => Response.json())
      .then((data) => {
        const aboutusBanners = data.data.filter(
          (banner) => banner.type === "Blogs"
        );
        setBanner(aboutusBanners);
      });
  }, []);
  useEffect(() => {
    fetch(Baseurl + "/api/v1/blog/allblogs")
      .then((responce) => responce.json())
      .then((data) => setBlogs(data.data));
  }, []);
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const handleReadMoreClick = (blogId) => {
    fetch(`${Baseurl}/api/v1/blog/read`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: blogId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate(`/blog/${blogId}`);
          scrollToTop();
        } else {
          console.error("Failed to mark the blog as read");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  const truncateDescription = (description, charLimit) => {
    if (description.length > charLimit) {
      return description.slice(0, charLimit) + "...";
    }
    return description;
  };
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <div>
        <section id="h1-breadcrumb">
          <section id="h1-breadcrumb">
            <div className="h1-breadcrumb w-full h-fit overflow-hidden relative bg-main-gray pb-16 md:pb-24">
              <div
                className="win-grid win-grid-bg w-full h-full absolute left-0 top-0 z-0 overflow-hidden"
                id="win-grid"
              >
                {banner.map((img, index) => (
                  <img
                    src={img.image}
                    alt=""
                    className=" w-full "
                    key={index}
                  />
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
              <div className=" mx-auto h-auto w-fit relative z-10">
                <div className="mt-[120px] md:mt-[272px] w-auto mx-auto relative z-10">
                  <h1 className="text-main-black text-34 sm:text-48 font-semibold w-full text-center">
                    Blog
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
                      href="/bloglist"
                      className="home-two-nav-item leading-5 relative text-18 font-inter text-main-black  font-bold transition-all duration-300 hover:text-buisness-red"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="max-w-5xl max-lg:max-w-2xl mx-auto xl:py-[90px] sm:py-[90px] md:py-[90px] lg:py-[90px] py-[90px]">
          <div className="flex flex-col w-full justify-center items-center mx-auto">
            <h2 className="text-main-black font-semibold text-3xl pt-5 poppins-font">
              Our Latest Blog
            </h2>
            <div className="flex gap-2.5 flex-wrap mt-8 justify-center items-center mx-auto">
              {[
                "All",
                "CSR",
                "BRSR",
                "Corporate Governance",
                "Miscellaneous",
                "Corporate Mentoring, Learning & Development",
              ].map((category) => (
                <button
                  key={category}
                  className={`group overflow-hidden flex  items-center relative text-sm border border-purple/10 rounded-md py-1.5 ${
                    selectedCategory === category
                      ? "bg-buisness-red text-white"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="px-[18px] relative transition-colors ease-in-out duration-300 poppins-font">
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center xl:py-[40px] sm:py-[40px] md:py-[40px] lg:py-[40px] py-[40px]">
            {filteredBlogs.map((blog, index) => (
              <div className="max-w-lg mx-auto" key={index}>
                <div className="bg-[#A3896B] shadow-md border border-gray-200 rounded-lg max-w-sm p-4">
                  <Link to="#">
                    <img className="rounded-t-lg" src={blog.image} alt="" />
                  </Link>
                  <div className="p-5">
                    <Link to="#">
                      <div className="flex flex-wrap items-center gap-3">
                        <img
                          src="https://readymadeui.com/team-1.webp"
                          className="w-9 h-9 rounded-full"
                        />
                        <p className="text-xs text-white">{blog.author}</p>
                        <p className="text-xs text-white">
                          {formatDate(blog.createdAt)}
                        </p>
                      </div>
                    </Link>
                    <p className="font-normal text-white mb-3">
                      {truncateDescription(blog.description, 100)}
                    </p>
                    <button
                      className="text-white bg-[#89580A] font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      onClick={() => handleReadMoreClick(blog._id)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList;
