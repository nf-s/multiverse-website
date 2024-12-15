import { Roboto, Roboto_Mono } from "next/font/google";
import "../styles/global.css";

const robotoMonoFont = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  style: ["italic", "normal"],
  variable: "--font-roboto-mono",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }

        .font-mono {
          font-family: ${robotoMonoFont.style.fontFamily};
        }
      `}</style>
      <main
        className={`${roboto.variable} ${robotoMonoFont.variable} font-sans text-white `}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
