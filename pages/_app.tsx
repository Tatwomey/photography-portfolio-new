import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Expletus_Sans } from "next/font/google";

const expletusSans = Expletus_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component
      {...pageProps}
      className={`${expletusSans.className} font-sans`}
    />
  );
}
