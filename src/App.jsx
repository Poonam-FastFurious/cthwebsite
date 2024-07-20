/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/aos.css";
import "../src/assets/css/output.css";
import "../src/assets/css/style.css";
import { useEffect } from "react";
import Header from "./Components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blogdetails from "./Components/Blogs/Blogdetails";
import BlogList from "./Components/Blogs/BlogList";
import Contactus from "./Components/ContactUs/Contactus";
import Associatemember from "./Components/Associatemember/Associatemember";
import Aboutus from "./Components/AboutUs/Aboutus";
import Login from "./Components/Authentication/Login";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery/Gallery";
import SignUp from "./Components/Authentication/SignUp";

function App() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        let maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);
  return (
    <>
      <div className="">
        <div className=""></div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blogdetails />} />
            <Route path="/bloglist" element={<BlogList />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/associatedMembers" element={<Associatemember />} />
            <Route path="/AboutUs" element={<Aboutus />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
