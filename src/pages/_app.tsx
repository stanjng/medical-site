import type { Metadata } from "next";
import { AppProps } from "next/app";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Mosher Center",
  description: "Skin Cancer Center in Wellesley Hills, MA",
};

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default RootApp;
