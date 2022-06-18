import Head from "next/head";
import { IMeta } from "../../shared/interfaces";
import Header from "./Header/Header";
import Footer from "./Footer";
import type { FC } from "react";

interface ILayoutWrapper {
  meta: IMeta;
  children?: React.ReactNode;
}

const LayoutWrapper: FC<ILayoutWrapper> = ({ meta, children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-white flex flex-col">
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="googlebot" content="index,follow" />
        <meta name="og:type" content="website" />
        <meta property="og:site_name" content="NXOU" />
        <meta property="title" content={meta.title} key="title" />
        <meta
          property="description"
          content={meta.description}
          key="description"
        />
        <meta property="og:title" content={meta.title} key="title" />
        <meta
          property="og:description"
          content={meta.description}
          key="description"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
