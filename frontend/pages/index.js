import Layout, {siteTitle} from "../components/layout";
import Schedule from "../components/sections/schedule";
import Comparison from "../components/sections/comparison";
import TextGrid from "../components/sections/textGrid";
import TextSidePicture from "../components/sections/textSidePicture";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Image} from "@nextui-org/react";
import { Skeleton } from '@nextui-org/react';
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
      <div id="top" className="min-w-full px-5 max-h-[15vh]">
        <Image src='/images/white-text-logo.png' width={175} height={66} alt="logo" />
      </div>
      <section className="w-full px-5">
        <DynamicVideoBackground />
        <Schedule/>
      </section>
      <section className="flex flex-col items-center mt-4 px-5">
        <Comparison/>
      </section>
      <section className="flex flex-col items-center mt-4 px-5">
        <TextGrid/>
      </section>
      <section className="flex flex-col items-center mt-4 ">
        <TextSidePicture/>
      </section>
      {showScrollUpButton && <ScrollUpButton />}
    </Layout>
  );
}
