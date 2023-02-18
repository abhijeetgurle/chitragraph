import AppNavbar from "@/components/AppNavbar";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavbar />
      <main>About Me</main>
    </>
  );
}