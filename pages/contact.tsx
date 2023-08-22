import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import ContactUsErrorMdx from "../content/contact-us-error.mdx";
import ContactUsIntroMdx from "../content/contact-us-intro.mdx";
import ContactUsSubmittedMdx from "../content/contact-us-submitted.mdx";

type Inputs = {
  nameRequired: string;
  emailRequired: string;
  phone?: number;
  why: string;
  detailsRequired: string;
};

export default function Info() {
  const [formSubmitState, setFormSubmitState] = useState<
    "initial" | "loading" | "submitted" | "error"
  >("initial");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormSubmitState("loading");
    // turn data into FormData
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    fetch("https://usebasin.com/f/88247cd2f6e6", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          setFormSubmitState("submitted");
        } else {
          setFormSubmitState("error");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <ContentWrapper>
        <div className="w-fit  m-auto">
          {/* Show form for initial state */}
          {formSubmitState === "initial" ? (
            <>
              <ContactUsIntroMdx />
              <div className="py-12">
                <div className="mt-8 max-w-md">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-6">
                      <label className="block">
                        <span className="text-gray-100 font-mono">Name*</span>
                        <input
                          {...register("nameRequired", { required: true })}
                          className={`font-mono font-light
                    mt-0
                    block
                    w-full
                    px-0.5 bg-transparent
                    border-0 border-b-2 ${
                      errors.nameRequired ? "border-red-400" : "border-gray-700"
                    }
                    focus:ring-0 focus:border-white
                  `}
                        />
                        {errors.nameRequired && (
                          <div className=" text-red-400 mt-2">
                            This field is required
                          </div>
                        )}
                      </label>
                      <label className="block">
                        <span className="text-gray-100 font-mono">
                          Email address*
                        </span>
                        <input
                          {...register("emailRequired", { required: true })}
                          type="email"
                          className={`
                          font-mono font-light
                    mt-0
                    block
                    w-full
                    px-0.5 bg-transparent
                    border-0 border-b-2 ${
                      errors.emailRequired
                        ? "border-red-400"
                        : "border-gray-700"
                    }
                    focus:ring-0 focus:border-white
                  `}
                          placeholder="john@example.com"
                        />
                        {errors.emailRequired && (
                          <div className=" text-red-400 mt-2">
                            This field is required
                          </div>
                        )}
                      </label>
                      <label className="block">
                        <span className="text-gray-100 font-mono">
                          Phone number
                        </span>
                        <input
                          {...register("phone")}
                          type="tel"
                          className={`font-mono font-light
                    mt-0
                    block
                    w-full
                    px-0.5 bg-transparent
                    border-0 border-b-2 ${
                      errors.phone ? "border-red-400" : "border-gray-700"
                    }
                    focus:ring-0 focus:border-white
                  `}
                        />
                        {errors.phone && (
                          <div className=" text-red-400 mt-2">
                            This field is required
                          </div>
                        )}
                      </label>
                      <label className="block">
                        <span className="text-gray-100 font-mono">
                          Why are you contacting us?
                        </span>
                        <select
                          defaultValue={"Performance/DJ"}
                          {...register("why", { required: true })}
                          className="font-mono font-light
                    block
                    w-full
                    mt-0
                    px-0.5 bg-transparent
                    border-0 border-b-2 border-gray-700
                    focus:ring-0 focus:border-white
                  "
                        >
                          <option>Performance/DJ</option>
                          <option>Art Installation</option>
                          <option>Food</option>
                          <option>Other</option>
                        </select>
                      </label>
                      <label className="block mt-4">
                        <span className="text-gray-100 font-mono">
                          Details*
                        </span>
                        <textarea
                          {...register("detailsRequired", { required: true })}
                          className={`font-mono font-light
                    mt-0
                    block
                    w-full
                    px-0.5 bg-transparent
                    border-0 border-b-2 
                    ${
                      errors.detailsRequired
                        ? "border-red-400"
                        : "border-gray-700"
                    }
                    focus:ring-0 focus:border-white
                  `}
                          rows={4}
                        ></textarea>
                        {errors.detailsRequired && (
                          <div className=" text-red-400 mt-2">
                            This field is required
                          </div>
                        )}
                      </label>
                      <button
                        type="submit"
                        className="h-10 px-5 text-indigo-100 bg-primary-600  font-mono  transition-colors duration-150 focus:shadow-outline hover:bg-primary-700"
                      >
                        Contact Us
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : null}

          {/* Show for error state */}
          {formSubmitState === "error" ? <ContactUsErrorMdx /> : null}

          {/* Show for submitted state */}
          {formSubmitState === "submitted" ? <ContactUsSubmittedMdx /> : null}

          {/* Show for loading state */}
          {formSubmitState === "loading" ? (
            <>
              <div className="py-12">
                <div className="mt-8 max-w-md flex flex-row items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting
                </div>
              </div>
            </>
          ) : null}
        </div>
      </ContentWrapper>
    </Layout>
  );
}
