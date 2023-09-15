import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import caca1 from "../public/caca.jpg";
import caca3 from "../public/caca-3.jpg";
import caca4 from "../public/caca-4.jpg";
import caca5 from "../public/caca-5.jpg";
import caca6 from "../public/caca-6.jpg";
import selfie from "../public/trevortwomeyselfie.jpeg";
import pic1 from "../public/ head-korn-jones-beach-2022_trevortwomey.jpg";
import pic2 from "../public/ head-korn-jones-beach-2022_trevortwomey-2.jpg";
import pic3 from "../public/davey-oberline-ftl20-trevortwomey.jpg";
import pic4 from "../public/IAMX_NYC_2023_trevortwomey.jpg";
import pic5 from "../public/morgan-rose-7dust-nyc-2022-trevortwomey.jpg";
import pic6 from "../public/IAMX_NYC_2023_trevortwomey-2.jpg";
import pic7 from "../public/jonathan-davis-korn-jones-beach-2022-trevortwomey.jpg";


import { useRef } from "react";

type photos = {
  src: string;
  thumb: string;
};
const tabs = [
  {
    key: "All",
    display: "All",
  },
  {
    key: "Music photos",
    display: "Music photos",
  },
  {
    key: "Other stuff",
    display: "Other stuff",
  },
];

type HomeProps = {
  photos: {
    src: string;
  }[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const photos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  return Promise.resolve({
    props: {
      photos,
    },
  });
};

export default function Home({ photos }: HomeProps) {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by Create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        priority
        className="fixed left-0 top-0 z-0"
        src={selfie}
        alt="background-image"
        placeholder="blur"
      />
      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10">
        <span>
          <img
            src="/waterlogo.PNG"
            alt="Logo"
            width="150"
            height="50"
            px-3
            py-2
          />
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90">
          Get in touch
        </Link>
      </header>

      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg",
                        selected ? "text-white" : "text-stone-600"
                      )}>
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className=" h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel className="overflow-auto">
              
<Masonry
  breakpointCols={{ default: 3, 900: 2, 600: 1 }}
  className="flex gap-4"
  columnClassName=""
>
  {photos.map((photo, index) => (
    <div className="relative">
      <Image
      key={photo.src}
        src={photo.src}
        alt="caca1"
        width={500}
        height={750}
        className="relative my-4 cursor-pointer"
        
        
      />
      <div
        className="absolute w-full h-full inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10 cursor-pointer"
        onClick={() => {
          lightboxRef.current?.openGallery(index);
        }}
      ></div>
    </div>
  ))}
</Masonry>


                {/*}  <Image src={caca1} alt="caca1" className="my-4" placeholder="blur"/>
                  <Image src={caca3} alt="caca3" className="my-4" placeholder="blur" />
                  <Image src={caca4} alt="caca4" className="my-4" placeholder="blur"/>
                  <Image src={caca5} alt="caca5" className="my-4" placeholder="blur"/>
                    <Image src={caca6} alt="caca6" className="my-4" placeholder="blur"/> */}

                {/*} <img src="/caca.jpg" alt="caca-1" className="my-4" />
                  <img src="/caca-3.jpg" alt="caca-3" className="my-4" />
                  <img src="/caca-4.jpg" alt="caca-4" className="my-4" />
                  <img src="/caca-5.jpg" alt="caca-5" className="my-4" />
                <img src="/caca-6.jpg" alt="caca-6" className="my-4" /> */}
                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={photos.map((photo) => ({
                    src: photo.src,
                    thumb: photo.src,
                  }))}
                />
              </Tab.Panel>
              <Tab.Panel>Music Photos</Tab.Panel>
              <Tab.Panel>Other stuff</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[90px] flex justify-center items-center uppercase text-lg font-medium z-20">
        <p>©Trevor Twomey Photography 2023</p>
      </footer>
    </div>
  );
}
