import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NavLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  style: ["italic", "normal"],
});

const navigation = [
  { name: "About", href: "/#about" },
  {
    name: "Info",
    href: "/info",
    subItems: [
      { name: "Vision", href: "/info#vision" },
      { name: "Location", href: "/info#location" },
      { name: "Camping", href: "/info#camping" },
      { name: "Festival Guidelines", href: "/info#festival-guidelines" },
      { name: "Festival Rules", href: "/info#festival-rules" },
      { name: "What To Bring", href: "/info#what-to-bring" },
      { name: "Conditions Of Entry", href: "/info#conditions-of-entry" },
      { name: "Road Safety", href: "/info#road-safety" },
      { name: "Sneak-ins policy", href: "/info#sneak-ins-policy" },
      { name: "Festival Times", href: "/info#festival-times" },
      { name: "Family Friendly Event", href: "/info#family-friendly-event" },
      { name: "Rubbish", href: "/info#rubbish" },
    ],
  },
  { name: "Tickets", href: "/tickets" },
  { name: "Lineup", href: "/lineup" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(props: {
  showLanding?: boolean;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  const [subItemOpen, setSubItemOpen] = useState<string>();

  return (
    <>
      <div className="">
        {props.showLanding ? (
          <>
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/C-ZCGF6nE58?disablekb=1&rel=0&modestbranding=1&controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=C-ZCGF6nE58"></iframe>
            </div>
            <div className="video-overlay"></div>
            <div className="h-screen md-h-screen-with-nav w-screen flex flex-col justify-between">
              <div className="flex flex-col flex-grow items-center gap-12 px-4 pt-24">
                <Image
                  src="/images/logo.png"
                  alt="me"
                  width={250}
                  height={180}
                />
                <h3
                  className={`text-xl md:text-3xl font-mono font-light text-center leading-relaxed text-slate-50 ${robotoMonoFont.className} font-mono`}
                >
                  presents
                </h3>
                <h1
                  className={`text-6xl multiverse-logo font-mono text-center leading-relaxed text-slate-50 ${robotoMonoFont.className} font-mono`}
                >
                  Multiverse 2024
                </h1>
              </div>
            </div>
          </>
        ) : null}

        <Disclosure
          id="nav"
          as="nav"
          className={`bg-gray-900 bg-opacity-30 backdrop-blur-lg fixed top-0 font-mono ${
            props.showLanding ? "md:sticky" : ""
          } md:flex md:justify-center w-screen z-10`}
          style={{ pointerEvents: "all" }}
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6"
                        src="/images/logo-small.png"
                        alt="Technobrats Logo"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              router.asPath === item.href
                                ? " text-white border-b-2 border-primary-base"
                                : "text-gray-300  hover:text-primary-base",
                              "px-3 py-2 text-md font-medium"
                            )}
                            aria-current={
                              router.asPath === item.href ? "page" : undefined
                            }
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      className="relative inline-flex items-center justify-center p-2 text-gray-100 hover:bg-opacity-30 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => {
                        // Wait 100ms
                        setTimeout(() => {
                          document

                            .getElementById("nav-panel")
                            ?.scrollIntoView({ block: "nearest" });
                        }, 100);
                      }}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel
                id="nav-panel"
                className={`md:hidden h-screen-with-nav overflow-y-auto`}
              >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 flex flex-col items-center gap-3">
                  {navigation.map((item) =>
                    item.subItems ? (
                      <div className="w-full" key={item.name}>
                        <div className="flex justify-center flex-row  w-full relative ">
                          <Disclosure.Button
                            as="a"
                            href={item.href}
                            className={
                              "text-gray-100 hover:text-white px-3 py-3 font-medium text-xl font-mono text-center"
                            }
                          >
                            {item.name}
                          </Disclosure.Button>
                          <button
                            className="absolute right-16 h-full"
                            onClick={() =>
                              setSubItemOpen(
                                subItemOpen ? undefined : item.name
                              )
                            }
                          >
                            {subItemOpen ? (
                              <MinusIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </button>
                        </div>

                        {item.subItems ? (
                          <div
                            className={`flex flex-col items-center overflow-hidden transition-all`}
                            style={{
                              maxHeight:
                                subItemOpen === item.name
                                  ? `${item.subItems.length * 44}px`
                                  : "0px",
                            }}
                          >
                            {item.subItems.map((subItem) => (
                              <Disclosure.Button
                                key={item.name + "-" + subItem.name}
                                as="a"
                                href={subItem.href}
                                className={
                                  "text-gray-100 hover:text-white px-3 py-2 font-light text-lg font-mono text-center"
                                }
                              >
                                {subItem.name}
                              </Disclosure.Button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={
                          "text-gray-100 hover:text-white px-3 py-3 font-medium text-xl font-mono text-center w-fit"
                        }
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main
          className={props.showLanding ? "" : "overflow-auto h-screen pt-16"}
        >
          {props.children}
        </main>
      </div>
    </>
  );
}
