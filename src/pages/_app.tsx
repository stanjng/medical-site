import type { Metadata } from "next";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mosher Center",
  description: "Skin Cancer Center in Wellesley Hills, MA",
};

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default RootApp;
