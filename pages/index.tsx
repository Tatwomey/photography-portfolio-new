import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

import caca1 from "../public/caca.jpg";
import caca3 from "../public/caca-3.jpg";
import caca4 from "../public/caca-4.jpg";
import caca5 from "../public/caca-5.jpg";
import caca6 from "../public/caca-6.jpg";

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

const images = [];
export default function Home() {
  return (
    <div className="h-full bg-[url('/trevortwomeyselfie.jpeg')] bg-top bg-cover overflow-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by Create next app" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <header className="fixed bg-stone-900 top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
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
      <main className="pt-[110px]">
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
            <Tab.Panels className="h-full h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName="">

                  <Image src={caca1} alt="caca1" className="my-4"/>
                  <Image src={caca3} alt="caca3" className="my-4" />
                  <Image src={caca4} alt="caca4" className="my-4"/>
                  <Image src={caca5} alt="caca5" className="my-4"/>
                  <Image src={caca6} alt="caca6" className="my-4"/>

                   
                  {/*} <img src="/caca.jpg" alt="caca-1" className="my-4" />
                  <img src="/caca-3.jpg" alt="caca-3" className="my-4" />
                  <img src="/caca-4.jpg" alt="caca-4" className="my-4" />
                  <img src="/caca-5.jpg" alt="caca-5" className="my-4" />
                      <img src="/caca-6.jpg" alt="caca-6" className="my-4" /> */}
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Music Photos</Tab.Panel>
              <Tab.Panel>Other stuff</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium">
        <p>Trevor Twomey Photography</p>
      </footer>
    </div>
  );
}
