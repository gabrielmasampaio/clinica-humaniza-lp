import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Schedule from "../components/sections/schedule";
import Comparison from "../components/sections/comparison";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="w-full">
        <Schedule/>
      </section>
      <section className="flex flex-col items-center mt-4">
        <Comparison/>
      </section>
    </Layout>
  );
}
