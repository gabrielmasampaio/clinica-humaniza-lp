import Layout, {siteTitle} from "../components/layout";
import Schedule from "../components/sections/schedule";
import Comparison from "../components/sections/comparison";
import TextGrid from "../components/sections/textGrid";
import TextSidePicture from "../components/sections/textSidePicture";
import {Image} from "@nextui-org/react";
import {useEffect, useState} from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import ScrollUpButton from "../components/media/scrollUpButton";

const DynamicVideoBackground = dynamic(() => import('../components/media/videoBackground'), {
  ssr: false, // Prevent SSR for this component
});
export default function Home() {

  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past 100vh
      if (window.scrollY > window.innerHeight/3) {
        setShowScrollUpButton(true);
      } else {
        setShowScrollUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="top" className="w-full px-5">
        <Image src='/images/white-text-logo.png' className="max-w-[14vw]" width="100%" height="100%" alt="logo" />
        <DynamicVideoBackground />
        <Schedule/>
      </section>
      <section className="flex flex-col items-center mt-4 px-5">
        <Comparison/>
      </section>
      <section className="flex flex-col items-center mt-4 px-5">
        <TextGrid/>
      </section>
      <section className="flex items-center mt-4">
        <TextSidePicture/>
      </section>
      {showScrollUpButton && <ScrollUpButton />}
    </Layout>
  );
}
