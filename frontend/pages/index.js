import Layout, {siteTitle} from "../components/layout";
import Schedule from "../components/sections/schedule";
import Comparison from "../components/sections/comparison";
import TextGrid from "../components/sections/textGrid";
import TextSidePicture from "../components/sections/textSidePicture";
import {useEffect, useState} from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import ScrollUpButton from "../components/media/scrollUpButton";
import {useResponsive} from "../components/providers/context";

const DynamicHorizontalVideoBackground = dynamic(() => import('../components/media/horizontalVideoBackground'), {
  ssr: false, // Prevent SSR for this component
});
export default function Home() {

  const [showScrollUpButton, setShowScrollUpButton] = useState(false);
  const { isVertical } = useResponsive();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past 100vh
      if(isVertical){
        setShowScrollUpButton((window.scrollY > window.innerHeight));
      } else {
        setShowScrollUpButton(window.scrollY > window.innerHeight/3);
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
      {(!isVertical) ? <DynamicHorizontalVideoBackground /> : <section className="z-[-1] fixed bg-main-dark min-h-[100vh] min-w-[100vw]"></section>}
      <section  className="w-full px-5 min-h-[100vh]">
        <Schedule/>
      </section>
      <section className="flex flex-col items-center mt-4 px-5 min-h-[100vh]">
        <Comparison/>
      </section>
      <section className="flex flex-col items-center mt-4 px-5 min-h-[100vh]">
        <TextGrid/>
      </section>
      <section className="flex items-center mt-4">
        <TextSidePicture/>
      </section>
      {showScrollUpButton && <ScrollUpButton />}
    </Layout>
  );
}
