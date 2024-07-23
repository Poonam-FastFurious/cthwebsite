import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Baseurl } from "../../Confige";

function Blogdetails() {
  const { id } = useParams();
  const [blogs, setblogs] = useState({});
  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState({
    comment: "",
  });
  useEffect(() => {
    fetch(`${Baseurl}/api/v1/blog/singleblogs?id=${id}`)
      .then((responce) => responce.json())
      .then((data) => setblogs(data.data));
  }, [id]);
  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentForm({ ...commentForm, [name]: value });
  };

  const handleCommentSubmit = (e) => {
    const accessToken = localStorage.getItem("accessToken");

    e.preventDefault();
    fetch(`${Baseurl}/api/v1/blog/coments?id=${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(commentForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setComments([...comments, data.comment]);
          setCommentForm({ comment: "" });
        } else {
          console.error("Failed to add comment");
        }
      });
  };
  return (
    <>
      <section id="h1-breadcrumb">
        <div className="h1-breadcrumb w-full h-fit overflow-hidden relative bg-main-gray pb-16 md:pb-24">
          <div className="absolute left-1/4 w-full top-[300px] overflow-hidden z-0 pointer-events-none"></div>
          <div className="theme-container mx-auto h-fit w-fit relative z-10">
            <div className="mt-[120px] md:mt-[272px] w-fit mx-auto relative z-10">
              <h3></h3>
              <h1 className="text-main-black text-34 font-semibold w-full text-center max-w-[624px] poppins-font">
                Blogs
              </h1>
              <h2 className=" w-full text-center max-w-[624px] poppins-font">
                {blogs.title}
              </h2>
              <div className="flex flex-col sm:flex-row mt-5 gap-2 md:gap-[30px] w-full justify-center items-center">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://quomodothemes.website/html/quland-html/assets/images/blogs/author-1.webp"
                    alt=""
                    className="w-[30px] aspect-square rounded-full object-cover"
                  />
                  <p className="text-paragraph poppins-font">Rahul raj</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-[130px]">
        <div className="theme-container w-full mx-auto grid grid-cols-8 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
          <div className="col-span-8">
            <div className="w-full">
              <img src={blogs.image} alt="" className="w-full object-cover" />
              <h1 className="text-24 sm:text-[30px] leading-[40px] tracking-tight text-main-black font-semibold mt-[30px] poppins-font">
                {blogs.title}
              </h1>
              <div className="flex mt-[22px] mb-2 gap-4 items-center">
                <p className="text-paragraph flex-1 poppins-font">
                  {blogs.description}
                </p>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: blogs.content }}
                className="text-paragraph mb-[25px] poppins-font"
              />

              <div className="flex flex-col xl:flex-row gap-[30px] pt-6">
                {blogs.thumbnail &&
                  blogs.thumbnail.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-[410px] h-[300px]"
                    />
                  ))}
              </div>

              <div className="flex mt-5 flex-col sm:flex-row justify-between">
                <div className="">
                  <h1 className="text-18 text-main-black font-semibold poppins-font">
                    Popular Tags
                  </h1>
                  <div className="mt-3 flex gap-2.5 flex-wrap">
                    {blogs.tags &&
                      blogs.tags.map((item, index) => (
                        <Link
                          key={index}
                          to=""
                          className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                        >
                          <span className="px-[18px] relative  transition-colors ease-in-out duration-300 poppins-font ">
                            Travel{item}
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              <div className="w-full border border-purple/10 mt-[50px] rounded-[10px] px-4 md:px-[40px] pb-10 bg-main-gray">
                <div className="w-full flex flex-col sm:flex-row gap-4 md:gap-[30px] mt-[30px] items-center">
                  <img
                    src="https://quomodothemes.website/html/quland-html/assets/images/blogs/author-big.webp"
                    alt=""
                  />
                  <div className="flex-1">
                    <h1 className="text-18 text-main-black font-semibold poppins-font">
                      Rahul Raj
                    </h1>
                    <p className="text-paragraph mt-1.5 poppins-font">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia odit animi autem officiis! Ad rerum, aliquid sed sint
                      quisquam porro sunt impedit facilis quaerat.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="mt-[60px]">
                <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-10 poppins-font">
                  Comments 02
                </h1>

                <div className="flex flex-col md:flex-row gap-10 md:mr-6 mb-[53px]">
                  <img
                    src="https://quomodothemes.website/html/quland-html/assets/images/blogs/comment-1.webp"
                    alt=""
                    className=""
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center">
                      <h1 className="flex-1 text-18 font-semibold text-main-black poppins-font">
                        rahul raj jaykr
                      </h1>
                      <p className="font-medium text-paragraph poppins-font">
                        Decmber 15, 2024
                      </p>
                    </div>
                    <p className="text-paragraph mb-1.5 poppins-font">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt provident deleniti, voluptas, odit molestiae
                      reiciendis tenetur consequatur magni voluptatum eligendi
                      ut, tempore officiis autem!
                    </p>
                    <Link to="#">
                      <div className="flex items-center gap-2 group">
                        <p className="mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Reply'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative poppins-font">
                          Reply
                        </p>
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="group-hover:stroke-purple transition-all duration-300 delay-300 group-hover:delay-0"
                            d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                            stroke="#6D6D6D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:ml-28 mb-[53px]">
                  <img
                    src="https://quomodothemes.website/html/quland-html/assets/images/blogs/comment-2.webp"
                    alt=""
                    className=""
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center">
                      <h1 className="flex-1 text-18 font-semibold text-main-black poppins-font">
                        Anjali
                      </h1>
                      <p className="font-medium text-paragraph poppins-font">
                        Decmber 15, 2024
                      </p>
                    </div>
                    <p className="text-paragraph mb-1.5 poppins-font">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt sed voluptates explicabo aperiam et. Quaerat eius
                      officiis totam suscipit in nemo error facere. Dolore.
                    </p>
                    <Link to="#">
                      <div className="flex items-center gap-2 group">
                        <p className="mb-[1px] font-medium text-paragraph leading-5 font-inter border-b border-transparent before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Reply'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative poppins-font">
                          Reply
                        </p>
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="group-hover:stroke-purple transition-all duration-300 delay-300 group-hover:delay-0"
                            d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                            stroke="#6D6D6D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border border-purple/10 bg-main-gray rounded-[10px] p-4 md:p-[50px]">
                <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-6 poppins-font">
                  Leave a Reply
                </h1>
                <p className="text-paragraph mb-[30px] poppins-font">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form
                  onSubmit={handleCommentSubmit}
                  action=""
                  className="grid grid-cols-6 md:grid-cols-12 gap-[30px]"
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="col-span-6 h-14 px-5 outline-purple focus:outline-1 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="col-span-6 h-14 px-5 outline-purple focus:outline-1 rounded-md"
                  />
                  <textarea
                    name="comment"
                    value={commentForm.comment}
                    onChange={handleCommentChange}
                    placeholder="Comments"
                    className="col-span-6 md:col-span-12 px-5 outline-purple focus:outline-1 h-[100px] rounded-md"
                  ></textarea>
                  <div className="col-span-6 md:col-span-12 flex items-center gap-4">
                    <input
                      className="accent-current acc text-purple border border-purple outline-purple w-5 aspect-square"
                      type="radio"
                      name=""
                      id="comments"
                    />
                    <label
                      htmlFor="comments"
                      className="text-gray-69 poppins-font"
                    >
                      Save the information in this browser for next time use
                    </label>
                  </div>
                  <div className="col-span-6 md:col-span-12">
                    <button className="home-two-btn-bg py-3 group bg-[#89580A] border-[#89580A] inline-flex">
                      <span className="text-base text-white group-hover:text-[#89580A] transition-all duration-300 font-inter relative z-10 poppins-font">
                        Post Comments
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
                          className="group-hover:stroke-[#89580A] transition-all duration-300"
                          d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-span-8 lg:col-span-4">
            <div className="mt-[10px]">
              <h1 className="text-22 text-main-black font-semibold">
                Most view Stories
              </h1>
              <div className="mt-8">
                <Link
                  to=""
                  className="flex gap-2 sm:gap-[25px] items-center group mb-6"
                >
                  <div className="w-20 h-[90px] rounded-md overflow-hidden bg-red-100">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/blogs/recent-1.webp"
                      alt=""
                      className="w-full object-cover group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-paragraph">june 15, 2024</p>
                    <p className="text-main-black font-semibold mt-1.5 transition-all duration-300 group-hover:underline">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                </Link>

                <Link
                  to=""
                  className="flex gap-2 sm:gap-[25px] items-center group mb-6"
                >
                  <div className="w-20 h-[90px] rounded-md overflow-hidden bg-red-100">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/blogs/recent-1.webp"
                      alt=""
                      className="w-full object-cover group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-paragraph">june 15, 2024</p>
                    <p className="text-main-black font-semibold mt-1.5 transition-all duration-300 group-hover:underline">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                </Link>

                <Link
                  to=""
                  className="flex gap-2 sm:gap-[25px] items-center group"
                >
                  <div className="w-20 h-[90px] rounded-md overflow-hidden bg-red-100">
                    <img
                      src="https://quomodothemes.website/html/quland-html/assets/images/blogs/recent-1.webp"
                      alt=""
                      className="w-full object-cover group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-paragraph">june 15, 2024</p>
                    <p className="text-main-black font-semibold mt-1.5 transition-all duration-300 group-hover:underline">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="mt-[54px]">
                <h1 className="text-22 text-main-black font-semibold">
                  Popular Tags
                </h1>
                <div className="mt-8 flex gap-2.5 flex-wrap">
                  <Link
                    to=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative  transition-colors ease-in-out duration-300 ">
                      Recipes
                    </span>
                  </Link>
                  <Link
                    to=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative  transition-colors ease-in-out duration-300 ">
                      Cooking Tips
                    </span>
                  </Link>
                  <Link
                    to=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative  transition-colors ease-in-out duration-300 ">
                      Study Tips
                    </span>
                  </Link>
                  <Link
                    to=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative  transition-colors ease-in-out duration-300 ">
                      Music
                    </span>
                  </Link>
                  <Link
                    to=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative  transition-colors ease-in-out duration-300 ">
                      Destinations
                    </span>
                  </Link>
                  <Link
                    to=""
                    className="group overflow-hidden flex justify-center items-center relative text-sm border border-purple/10 rounded-md py-1.5 before:inline-block before:absolute before:z-0 before:w-full before:h-full  before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                  >
                    <span className="px-[18px] relative  transition-colors ease-in-out duration-300 ">
                      Pet Care
                    </span>
                  </Link>
                </div>
              </div>

              <div className="max-w-lg mx-auto  mt-[54px]">
                <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                  <Link to="#">
                    <img
                      className="rounded-t-lg h-60 w-full"
                      src="https://s3-alpha-sig.figma.com/img/c272/2db9/167c3e3d9164198a253c5cc88709d339?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjBdYgnoqHNMvyKlbeRH-FruQLAbcvvWsbXFlRsaRAOMsNLPoFJ~KW4ChOyxvPJoHDwlruOKDU3c-asTaNOoUQ-6-QihE7jnyWs3QXmnQ99JPpOgn0UiU~0t1fHolebuuVSiPiij6FouvXwXbdt5YlozSKaIHyZCoEHG2OO-Bpmh3BmXOWpnBZsT5HMQk~ZxvUj-5Iv5--~G5v8O6cNYuiiS2aItOUzIHrwC3sUBCCzOQyD-v~evAb~xWTPQANg-pGM81dT8Cp37EAKcJ7vQjk281LoZG5dfBgpt5~gb0YbTeWYgG-YtiqtyAll9jjLvz3M9k0KzZ4AoGJm1~9RduQ__"
                      alt=""
                    />
                  </Link>
                  <div className="p-5">
                    <Link to="#">
                      <h5 className="text-white text-md tracking-tight mb-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </h5>
                      <div className="flex flex-wrap items-center gap-3">
                        <img
                          src="https://readymadeui.com/team-1.webp"
                          className="w-9 h-9 rounded-full"
                        />
                        <p className="text-xs text-white">BY JOHN DOE</p>
                        <p className="text-xs text-white">25 Sep 2023</p>
                      </div>
                    </Link>
                    <p className="font-normal text-white mb-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                    </p>
                    <Link
                      className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      to="/blog"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogdetails;
