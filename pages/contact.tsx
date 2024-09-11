import getConfig from "next/config";
import Head from "next/head";
import { useState } from "react";
import { set, SubmitHandler, useForm } from "react-hook-form";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import ContactUsClosedMdx from "../content/contact-us-closed.mdx";
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

const organisationName = {
  [FormReason.Performance]: "Act/DJ name",
  [FormReason.Workshops]: "Workshop name",
  [FormReason.Stallholder]: "Stall name",
};

const detailsName = {
  [FormReason.Performance]: "Tell us about your performance*",
  [FormReason.Workshops]: "Tell us about your workshop*",
  [FormReason.VisualArt]: "Tell us about your art*",
  [FormReason.Stallholder]: "Tell us about your stall*",
  [FormReason.Volunteer]: "Tell us about yourself and your experiences*",
  [FormReason.Other]: "Tell us about your enquiry*",
};

const detailsDescription = {
  [FormReason.Performance]:
    "Please include anything we would need to provide you - e.g. DJ Equipment, Power, Water etc",
  [FormReason.Workshops]:
    "Please include anything we would need to provide you - e.g. Lighting, Power, Water etc",
  [FormReason.VisualArt]:
    "Please include anything we would need to provide you - e.g. Lighting, Power, Water etc",
  [FormReason.Stallholder]:
    "Please include anything we would need to provide you - e.g. Lighting, Power, Water etc",
  [FormReason.Volunteer]: "",
  [FormReason.Other]: "",
};

export default function Info() {
  const { publicRuntimeConfig } = getConfig();

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

    fetch("https://submit-form.com/yeMbzyzGN", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...data, why: formReason }),
    })
      .then((response) => {
        if (response.status === 200) {
          setFormSubmitState("submitted");
        } else {
          setFormSubmitState("error");
        }
      })
      .catch((error) => {
        setFormSubmitState("error");
        console.error(error);
      });
  };

  if (!publicRuntimeConfig.contactEnabled) {
    return (
      <Layout>
        <Head>
          <title>Multiverse 2025 | Contact</title>
        </Head>
        <ContentWrapper>
          <div className="w-fits m-auto">
            <ContactUsClosedMdx />
          </div>
        </ContentWrapper>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Multiverse 2025 | Contact</title>
      </Head>
      <ContentWrapper>
        <h1>Contact Us</h1>
        <div>
          {/* Show for error state */}
          {formSubmitState === "error" && (
            <div
              className=" bg-rose-600 bg-opacity-50 px-4 pb-4 relative"
              role="alert"
            >
              <ContactUsErrorMdx />
            </div>
          )}

          {formSubmitState === "initial" && <ContactUsIntroMdx />}

          {/* Show form for initial state */}
          {formSubmitState === "initial" || formSubmitState === "error" ? (
            <>
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
                        border-0 border-b border-white border-opacity-70
                        focus:ring-0 focus:border-white 
                      "
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-white text-opacity-70 bg-black"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Select a reason
                      </option>
                      <option
                        value={FormReason.Performance}
                        className="text-white bg-black"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Performance/DJ
                      </option>
                      <option
                        value={FormReason.Workshops}
                        className="text-white bg-black"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Workshops
                      </option>
                      <option
                        value={FormReason.VisualArt}
                        className="text-white bg-black"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Visual Art
                      </option>
                      <option
                        value={FormReason.Stallholder}
                        className="text-white bg-black"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Stallholder
                      </option>
                      <option
                        value={FormReason.Volunteer}
                        className="text-white bg-black"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        Volunteer
                      </option>
                      <option
                        value={FormReason.Other}
                        className="text-white bg-black"
                        style={{ fontFamily: "sans-serif" }}
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
                              border-0 border-b ${
                                errors.nameRequired
                                  ? "border-red-400"
                                  : "border-white border-opacity-70"
                              }
                              focus:ring-0 focus:border-white placeholder:text-white placeholder:text-opacity-70
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
                              {organisationName[formReason] ??
                                "Organisation Name"}
                            </span>
                            <input
                              {...register("orgName")}
                              className={`font-mono font-light
                                mt-0
                                block
                                w-full
                                px-0.5 bg-transparent
                                border-0 border-b border-white border-opacity-70
                                focus:ring-0 focus:border-white placeholder:text-white placeholder:text-opacity-70
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
                              border-0 border-b ${
                                errors.emailRequired
                                  ? "border-red-400"
                                  : "border-white border-opacity-70"
                              }
                              focus:ring-0 focus:border-white placeholder:text-white placeholder:text-opacity-70
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
                              border-0 border-b ${
                                errors.phone
                                  ? "border-red-400"
                                  : "border-white border-opacity-70"
                              }
                              focus:ring-0 focus:border-white placeholder:text-white placeholder:text-opacity-70
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
                            {detailsName[formReason] ?? "Details*"}
                          </span>
                          <textarea
                            placeholder={detailsDescription[formReason]}
                            {...register("detailsRequired", { required: true })}
                            className={`font-mono font-light
                              mt-0
                              block
                              w-full
                              px-0.5 bg-transparent
                              border-0 border-b 
                              ${
                                errors.detailsRequired
                                  ? "border-red-400"
                                  : "border-white border-opacity-70"
                              }
                              focus:ring-0 focus:border-white placeholder:text-white placeholder:text-opacity-70
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
                                border-0 border-b                          
                                focus:ring-0 focus:border-white placeholder:text-white placeholder:text-opacity-70
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
