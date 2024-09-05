import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/loginimage.png";
import { useState } from "react";
import { Baseurl } from "../../Confige";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    linkedinProfile: "",
    address: "",
    skills: "",
    gender: "",
    honoursAndCertifications: "",
    agreeTerms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const validateStepOne = () => {
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    } else if (formData.contactNumber.length !== 10) {
      errors.contactNumber = "Contact Number must be exactly 10 digits";
    }
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = "Email Address is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const nextStep = () => {
    if (step === 1 && validateStepOne()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "contactNumber") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length > 10) return; // Prevent entering more than 10 digits
      setFormData({
        ...formData,
        [name]: onlyNums,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    // Clear the error for the current field when it's updated
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("You must agree to the terms and conditions");
      return;
    }

    try {
      const response = await fetch(Baseurl + "/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get the error details from the response
        throw new Error(errorData.message || "Network response was not ok");
      }

      const result = await response.json();
      console.log("User registered successfully:", result);
      toast.success("User registered successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormData({
        firstName: "",
        lastName: "",
        contactNumber: "",
        emailAddress: "",
        linkedinProfile: "",
        address: "",
        skills: "",
        academicProjects: "",
        honoursAndCertifications: "",
        agreeTerms: false,
      });
      navigate("/success");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.warning(error.message, "user aleready exist with this number ");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-20 bg-white md:h-auto  ">
        <div className="grid md:grid-cols-2 items-center gap-y-8 max-w-7xl w-full shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] m-6 rounded-xl relative overflow-hidden">
          <div className="max-md:order-1 p-4 bg-[#FFFFE7] h-full hidden  sm:flex  ">
            <img
              src={image}
              alt="login-image"
              className="lg:max-w-[90%] w-full h-full object-contain  mx-auto "
            />
          </div>

          <div className="flex flex-col justify-center  sm:h-auto p-4">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-6 shadow-xl">
              <form
                className="max-w-xl w-full p-4 mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="mb-12  container w-[100%] mx-auto flex justify-between">
                  <button className="text-gray-800 text-[20px] font-bold tracking-wide poppins-font">
                    <Link to="/membersip">BECOME MEMBER</Link>
                  </button>
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font ">
                          First Name *
                        </label>
                        <input
                          name="firstName"
                          type="text"
                          className="border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                          placeholder="Enter name"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                        {formErrors.firstName && (
                          <p className="text-red-600 text-sm">
                            {formErrors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font">
                          Last Name *
                        </label>
                        <input
                          name="lastName"
                          type="text"
                          className="border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        {formErrors.lastName && (
                          <p className="text-red-600 text-sm">
                            {formErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font">
                        Contact Number *
                      </label>
                      <input
                        name="contactNumber"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Contact Number *"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        maxLength={10}
                        required
                      />
                      {formErrors.contactNumber && (
                        <p className="text-red-600 text-sm">
                          {formErrors.contactNumber}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font">
                        Email Address *
                      </label>
                      <input
                        name="emailAddress"
                        type="email"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Email Address *"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                      />
                      {formErrors.emailAddress && (
                        <p className="text-red-600 text-sm">
                          {formErrors.emailAddress}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-4 block tracking-wide poppins-font ">
                        Gender
                      </label>
                      <div className="flex space-x-4   gap-4   pm-2">
                        <label className="text-gray-800 text-sm">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="mr-2 text-gray-800 "
                            onChange={handleChange}
                            checked={formData.gender === "male"}
                            required
                          />
                          Male
                        </label>
                        <label className="text-gray-800 text-sm">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="mr-2 text-gray-800 "
                            onChange={handleChange}
                            checked={formData.gender === "female"}
                            required
                          />
                          Female
                        </label>
                        <label className="text-gray-800 text-sm">
                          <input
                            type="radio"
                            name="gender"
                            value="other"
                            className="mr-2 text-gray-800  "
                            onChange={handleChange}
                            checked={formData.gender === "other"}
                            required
                          />
                          Other
                        </label>
                      </div>
                    </div>

                    <div className="!mt-12">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full py-3 px-4 text-sm  font-semibold rounded-md text-white bg-[#B08D57]  focus:outline-none tracking-wide poppins-font"
                      >
                        Next
                      </button>
                    </div>
                    <p className="text-gray-800 text-sm mt-6 text-center tracking-wide poppins-font">
                      Already have an account?
                      <Link
                        to="#"
                        className="text-[#B08D57] font-semibold hover:underline ml-1 tracking-wide poppins-font"
                      >
                        SignIn here
                      </Link>
                    </p>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font">
                        Address
                      </label>
                      <input
                        name="address"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font">
                        Skills
                      </label>
                      <input
                        name="skills"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Skills"
                        value={formData.skills}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font">
                        Linkedin Profile
                      </label>
                      <input
                        name="linkedinProfile"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Linkedin Profile"
                        value={formData.linkedinProfile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block tracking-wide poppins-font">
                        Honours & Certifications
                      </label>
                      <input
                        name="honoursAndCertifications"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md  outline-[#B08D57]"
                        placeholder="Enter Honours & Certifications"
                        value={formData.honoursAndCertifications}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex ">
                      <input
                        id="remember-me"
                        name="agreeTerms"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-[#B08D57]  border-gray-300 rounded"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="remember-me"
                        className="text-gray-800 ml-3 block text-sm tracking-wide poppins-font"
                      >
                        Are you agree to CTH
                        <Link
                          to="#"
                          className="text-[#B08D57] font-semibold hover:underline ml-1 tracking-wide poppins-font"
                        >
                          Terms of Condition and Privacy Policy.
                        </Link>
                      </label>
                    </div>

                    <div className="!mt-12 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="py-3 px-4 text-sm  font-semibold rounded-md text-white bg-[#B08D57] hover:bg-buisness-red focus:outline-none tracking-wide poppins-font"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="py-3 px-4 text-sm font-semibold rounded-md text-white bg-[#B08D57] focus:outline-none tracking-wide poppins-font"
                      >
                        Create an account
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
