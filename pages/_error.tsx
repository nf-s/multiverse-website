import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import router from "next/router";

const CustomErrorComponent = (props: any) => {
  return (
    <div className="backdrop-blur-with-fallback h-screen w-screen flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
      <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider">
        {props.statusCode}
      </p>
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mt-2">
        {props.statusCode.toString().startsWith("5")
          ? "Internal Server Error"
          : "Page not found"}
      </p>
      <p className="text-lg md:text-xl lg:text-2xl my-12">
        {props.statusCode.toString().startsWith("5")
          ? "We're unable to find out what's happening! We suggest you try again later."
          : "Sorry, the page you are looking for could not be found."}
      </p>
      <div className="mt-8 space-x-5">
        <a
          href="/"
          className="btn btn-primary btn-md py-3 px-2 sm:px-4 text-white"
        >
          Go Home
        </a>
        <button
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          className="btn btn-primary btn-outline py-3 px-2 sm:px-4 btn-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

CustomErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return Error.getInitialProps(contextData);
};

export default CustomErrorComponent;
