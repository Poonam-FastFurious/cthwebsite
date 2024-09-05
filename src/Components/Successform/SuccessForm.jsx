import { Link } from "react-router-dom";

function SuccessForm() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>
            <main className="w-full">
              <body className="bg-gray-50 flex items-center justify-center min-h-screen">
                <div className="text-center p-6 max-w-2xl mx-auto">
                  <div className="mb-6">
                    <img
                      src="https://assets.seedprod.com/5vd39f9p38bc88tq.png"
                      alt="Email Icon"
                      className="w-80 mx-auto "
                    />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Thank you for submitting your application!
                  </h1>
                  <p className="text-gray-600 mb-8 w-full">
                    We have received your application and will review your
                    information. You can expect to hear back from us within 5
                    business days. If you pass this initial stage, we will send
                    you an email invitation for the next steps.
                    <p className="mt-4 text-gray-500 text-sm">
                      Best regards!
                      <Link
                        to="/contact"
                        className="text-[#966A24] underline ml-2"
                      >
                        CTH
                      </Link>
                      .
                    </p>
                  </p>
                  <Link
                    to="/"
                    className=" bg-buisness-red p-4 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out"
                  >
                    ← Back Home
                  </Link>
                </div>
              </body>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessForm;
