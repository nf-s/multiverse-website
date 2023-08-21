import { Roboto_Mono } from "next/font/google";
import Layout from "../components/Layout";
import Test from "../content/info.mdx";
import markdownStyles from "../styles/markdown.module.css";

export default function Info() {
  return (
    <Layout>
      <div className="mx-auto py-6 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 ${markdownStyles["markdown"]}`}
        >
          <Test />
        </div>
      </div>
    </Layout>
  );
}
