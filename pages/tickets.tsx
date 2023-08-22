import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import TicketsMdx from "../content/tickets.mdx";

export default function Tickets() {
  return (
    <Layout>
      <Head>
        <title>Multiverse 2024 | Tickets</title>
      </Head>
      <ContentWrapper>
        <TicketsMdx />
      </ContentWrapper>
    </Layout>
  );
}
