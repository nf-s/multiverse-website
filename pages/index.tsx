import Link from "next/link";
import Layout from "../components/Layout";
import { Roboto_Mono } from "next/font/google";
const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  style: ["italic", "normal"],
});

const Home = () => {
  return (
    <Layout showLanding>
      <a id="about" type="hidden"></a>
      <div className="min-h-screen-with-nav mx-auto py-6 sm:px-6 lg:px-8 backdrop-blur-lg">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="px-4 py-6 sm:px-6 lg:px-8  text-6xl font-bold text-gray-100 text-center">
            About
          </h1>
          <div
            className={`divide-y text-xl md:text-2xl text-white text-center md:leading-relaxed px-4 py-6 sm:px-6 lg:px-8 ${robotoMonoFont.className} font-mono`}
          >
            <div className={`italic font-extralight pb-6 md:pb-16`}>
              A ripple in the space-time continuum has torn a rift in our
              Universe, opening up to the Multiverse beyond. This presents a
              unique opportunity for expanded consciousness, to see the world
              from another perspective. This January, we invite you to transcend
              beyond the physical Universe, and experience the Multiverse.
            </div>
            <div className="pt-6 md:pt-16">
              Multiverse Festival is a unique open air music, arts and lifestyle
              festival promoting self-expression and freedom in natural
              landscapes. As we look forward to our fourth edition, we remain
              fiercely independent - we are proudly free of corporate
              sponsorship, state-funding or political affiliations.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
