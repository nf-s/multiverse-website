import Head from "next/head";
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
  orgName?: string;
  phone?: number;
  socials?: string;
  detailsRequired: string;
};

enum FormReason {
  Performance = "performance",
  Workshops = "workshops",
  VisualArt = "visual-art",
  Stallholder = "stallholder",
  Volunteer = "volunteer",
  Other = "other",
}

const orgNameMap = new Map<FormReason, string>();
orgNameMap.set(FormReason.Performance, "Act/DJ name");
orgNameMap.set(FormReason.Workshops, "Workshop name");
orgNameMap.set(FormReason.Stallholder, "Stall name");

export default function Info() {
  const [formSubmitState, setFormSubmitState] = useState<
    "initial" | "loading" | "submitted" | "error"
  >("initial");

  const [formReason, setFormReason] = useState<FormReason>();

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
    if (formReason) formData.append("why", formReason.toString());

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
      <Head>
        <title>Multiverse 2024 | Contact</title>
      </Head>
      <ContentWrapper>
        <div className="w-fit  m-auto">
          {/* Show form for initial state */}
          {formSubmitState === "initial" ? (
            <>
              <ContactUsIntroMdx />
              <div className="pt-12">
                <div className="mt-8 max-w-md">
                  <label className="block">
                    <span className="text-gray-100 font-mono">
                      Why are you contacting us?*
                    </span>
                    <select
                      onChange={(e) => setFormReason(e.target.value as any)}
                      value={formReason}
                      className="font-mono font-light
                        block
                        w-full
                        mt-0
                        px-0.5 bg-transparent
                        border-0 border-b-2 border-gray-700
                        focus:ring-0 focus:border-white
                      "
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="font-mono text-white bg-black"
                      >
                        Select a reason
                      </option>
                      <option
                        value={FormReason.Performance}
                        className="font-mono text-white bg-black"
                      >
                        Performance/DJ
                      </option>
                      <option
                        value={FormReason.Workshops}
                        className="font-mono text-white bg-black"
                      >
                        Workshops
                      </option>
                      <option
                        value={FormReason.VisualArt}
                        className="font-mono text-white bg-black"
                      >
                        Visual Art
                      </option>
                      <option
                        value={FormReason.Stallholder}
                        className="font-mono text-white bg-black"
                      >
                        Stallholder
                      </option>
                      <option
                        value={FormReason.Volunteer}
                        className="font-mono text-white bg-black"
                      >
                        Volunteer
                      </option>
                      <option
                        value={FormReason.Other}
                        className="font-mono text-white bg-black"
                      >
                        Other
                      </option>
                    </select>
                  </label>
                </div>
              </div>
              {formReason ? (
                <div className="py-12">
                  <div className="mt-8 max-w-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-1 gap-6">
                        <label className="block">
                          <span className="text-gray-100 font-mono">
                            Full name*
                          </span>
                          <input
                            {...register("nameRequired", { required: true })}
                            className={`font-mono font-light
                              mt-0
                              block
                              w-full
                              px-0.5 bg-transparent
                              border-0 border-b-2 ${
                                errors.nameRequired
                                  ? "border-red-400"
                                  : "border-gray-700"
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
                        {formReason === FormReason.Performance ||
                        formReason === FormReason.Workshops ||
                        formReason === FormReason.Stallholder ? (
                          <label className="block">
                            <span className="text-gray-100 font-mono">
                              {orgNameMap.get(formReason) ??
                                "Organisation Name"}
                            </span>
                            <input
                              {...register("orgName")}
                              className={`font-mono font-light
                                mt-0
                                block
                                w-full
                                px-0.5 bg-transparent
                                border-0 border-b-2 border-gray-700
                                focus:ring-0 focus:border-white
                            `}
                            />
                          </label>
                        ) : null}
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
                                errors.phone
                                  ? "border-red-400"
                                  : "border-gray-700"
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
                        <label className="block mt-4">
                          <span className="text-gray-100 font-mono">
                            Details*
                          </span>
                          <textarea
                            placeholder="Please include anything we would need to provide you - e.g. DJ Equipment, Power, Water etc"
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
                        {formReason === FormReason.Performance ||
                        formReason === FormReason.VisualArt ||
                        formReason === FormReason.Workshops ||
                        formReason === FormReason.Stallholder ? (
                          <label className="block mt-4">
                            <span className="text-gray-100 font-mono">
                              Social media links
                            </span>
                            <textarea
                              {...register("socials")}
                              className={`font-mono font-light
                                mt-0
                                block
                                w-full
                                px-0.5 bg-transparent
                                border-0 border-b-2                          
                                focus:ring-0 focus:border-white
                              `}
                              rows={4}
                              placeholder="Facebook, Instagram, Soundcloud, Mixcloud, etc."
                            ></textarea>
                          </label>
                        ) : null}
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
              ) : null}
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
