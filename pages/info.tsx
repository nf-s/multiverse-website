import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import InfoMdx from "../content/info.mdx";

export default function Info() {
  return (
    <Layout>
      <ContentWrapper>
        <InfoMdx />
      </ContentWrapper>
    </Layout>
  );
}