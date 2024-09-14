import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout showLanding>
      <a id="about" type="hidden"></a>
      <div className="min-h-screen md:flex md:items-center py-6 sm:px-6 lg:px-8 backdrop-blur-with-fallback">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div
            className={`divide-y text-white text-center md:leading-relaxed px-4 py-6 sm:px-6 lg:px-8 $ font-mono`}
          >
            <div
              className={`italic font-extralight text-lg sm:text-xl md:text-2xl pb-6 md:pb-16`}
            >
              A ripple in the space-time continuum has torn a rift in our
              Universe, opening up to the Multiverse beyond. This presents a
              unique opportunity for expanded consciousness, to see the world
              from another perspective. This January, we invite you to transcend
              beyond the physical Universe, and experience the Multiverse.
            </div>
            <div className="text-lg sm:text-xl md:text-2xl pt-6 md:pt-16 pb-6 md:pb-16">
              Multiverse Festival is a unique open air music, arts and lifestyle
              festival promoting self-expression and freedom in natural
              landscapes. As we look forward to our fourth edition, we remain
              fiercely independent - we are proudly free of corporate
              sponsorship, state-funding or political affiliations.
            </div>
            <div className="text-base sm:text-lg pt-6 md:pt-16">
              In recognition of the deep history and culture of this Island,
              Technobrats would like to acknowledge and pay our respects to all
              Tasmanian Aboriginal people; the traditional owners of the Land
              upon which we meet/gather.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
