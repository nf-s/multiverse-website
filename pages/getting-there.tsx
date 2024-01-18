import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import GettingThereMdx from "../content/getting-there.mdx";

export default function Info() {
  return (
    <Layout>
      <Head>
        <title>Multiverse 2024 | Getting There</title>
      </Head>
      <ContentWrapper>
        <GettingThereMdx />
      </ContentWrapper>
    </Layout>
  );
}
