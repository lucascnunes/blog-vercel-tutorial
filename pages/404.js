// pages/404.js
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - {siteTitle}</title>
      </Head>

      <h1>404</h1>
      <br />
      <p>The page you're looking for wasn't found.</p>
    </Layout>
  );
}
