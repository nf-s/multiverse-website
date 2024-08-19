import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import InfoMdx from "../content/info.mdx";

export default function Info() {
  return (
    <Layout>
      <Head>
        <title>Multiverse 2025 | Info</title>
      </Head>
      <ContentWrapper>
        <InfoMdx />
      </ContentWrapper>
    </Layout>
  );
}
