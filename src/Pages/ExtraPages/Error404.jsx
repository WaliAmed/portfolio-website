import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>

      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <div className="lg:px-40 lg:py-20 md:px-20 md:py-10 py-8 px-4 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold mb-5 font-serif lg:text-9xl text-blue-700 text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-blue-600">Page Not Found!</span>
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The request that you have given is invalid!
            </p>

            <Link
              to="/"
              type="button"
              style={{
                backgroundColor: "var(--bg-fill5)",
                color: "var(--txtColor2)",
              }}
              className="btn flex w-fit btn-hoverDark2 font-medium rounded-md text-sm px-5 py-3 mb-3 md:mb-0 text-center"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
