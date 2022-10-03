import "../styles/layout.css";
import type { AppProps } from "next/app";

import Layout from "../Components/HeadComp/layout";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
