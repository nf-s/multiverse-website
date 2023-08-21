import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  style: ["italic", "normal"],
});

const navigation = [
  { name: "About", href: "/#about" },
  { name: "Info", href: "/info" },
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
  const currentNav = "#about";

  return (
    <>
      <div className="">
        {props.showLanding ? (
          <>
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/C-ZCGF6nE58?disablekb=1&rel=0&modestbranding=1&controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=C-ZCGF6nE58"></iframe>
            </div>
            <div className="video-overlay"></div>
            <div className="min-h-screen-with-nav w-screen flex flex-col justify-between">
              <div className="flex flex-col flex-grow items-center gap-12 px-4 pt-12 md:pt-24">
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
          className="bg-gray-900 sticky top-0 md:flex md:justify-center w-screen z-10"
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
                              currentNav === item.href
                                ? "bg-gray-900 text-white border-b-2 border-primary-base"
                                : "text-gray-300  hover:text-primary-base",
                              "px-3 py-2 text-sm font-medium uppercase"
                            )}
                            aria-current={
                              currentNav === item.href ? "page" : undefined
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
                      className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel
                id="nav-panel"
                className={`md:hidden absolute w-screen bg-gray-900 `}
              >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        currentNav === item.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={
                        currentNav === item.href ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main
          className={props.showLanding ? "" : "overflow-auto h-screen-with-nav"}
        >
          {props.children}
        </main>
      </div>
    </>
  );
}
