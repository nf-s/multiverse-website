import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout showLanding>
      <a id="about" type="hidden"></a>
      <div className="min-h-screen-with-nav md:flex md:items-center py-6 sm:px-6 lg:px-8 backdrop-blur-lg">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div
            className={`divide-y text-xl md:text-2xl text-white text-center md:leading-relaxed px-4 py-6 sm:px-6 lg:px-8 $ font-mono`}
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
