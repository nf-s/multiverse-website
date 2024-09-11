import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:image"
          content="https://multiverse.technobrats.com.au/images/placeholder-background.jpg"
        />
        <meta
          property="og:title"
          content="Technobrats presents Multiverse 2025"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f7335984-c207-4b00-a12c-8120ae728b43"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
