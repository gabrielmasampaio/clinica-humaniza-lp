import Head from "next/head";
import { Image } from "@nextui-org/react";

export const siteTitle = "Clínica Humaniza";

export default function Layout({ children }) {
  return (
    <div className="bg-main-dark min-h-[100vh] text-white flex flex-col items-center px-5 text-justify">
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
        />
        <meta
          name='description'
          content="Clinica Humaniza landing page"
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div className="min-w-full max-h-[15vh]">
        <Image src='/images/white-text-logo.png' width={175} alt="logo"/>
      </div>
      <main className="min-w-full">{children}</main>
    </div>
  );
}
