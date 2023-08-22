import markdownStyles from "../styles/markdown.module.css";

export default function ContentWrapper({ children }) {
  return (
    <div className="mx-auto py-6 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 ${markdownStyles["markdown"]}`}
      >
        {children}
      </div>
    </div>
  );
}
