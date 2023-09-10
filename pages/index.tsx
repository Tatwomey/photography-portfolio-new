import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App </title>
        <meta name="description" content="Generated by Create next app" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <main className="text-red-500">
        <p>Placeholder for main</p>
      </main>

      <footer>
        <p> Placeholder for footer </p>
      </footer>
    </div>
  );
}
