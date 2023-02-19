import AppNavbar from "@/components/AppNavbar";
import Head from "next/head";
import Image from "next/image";
import styles from "./About.module.scss";

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
      <main className={styles.main}>
        <div className={styles.container}>
          <Image
            src="https://cdn.myportfolio.com/079f56cd-056f-4eed-9dc7-65755f153836/d3194f37-8a3c-42dc-a454-fa8845d67502.png?h=e8a0387c8b36773af5ca33d16a541102"
            alt="Profile Picture"
            width={500}
            height={500}
          />
          <div className={styles.name}>Abhishek Shelar</div>
          <div className={styles.mainQuote}>
            <blockquote>
              I’m here to capture your life story and document your memories.
            </blockquote>
          </div>
          <div className={styles.description}>
            Before creating a dreamland, you have to live in it. Same law is
            applicable in "photography." Before my camera, I sense to capture
            the images. In India, Abhishekh means blessings, and I'm truly
            blessed from above to capture moments. This is how ABHISHEK R.SHELAR
            says and is passionate about. After pursuing all essential knowledge
            and degrees, Abhishek is all set with his beautiful guns, which has
            now covered more than 100 happy weddings across India, publicity
            stills in every regional films, industrial documentaries and did
            with his directorial in various short films since 2014. Abhishek
            tries to deliver what other can't. His planning, concepts and team
            work bring smiles to all, when the photo recipe is ready. Being a
            Chef in Photography, Abhishek is conditioned to freeze the wedding
            moments of Maharashtrian, Rajasthani, Christian, North Indian and
            South Indian culture. Having a strong portfolio of travel diaries,
            Abhishek has a great understanding of environment and it's impacts,
            because it's all about "colours." Rather degree education in
            photography, the receipt of smiles from the client it utmost
            valuable. So, Abhishek and his team works tirelessly to capture
            special moments and then his amazing composition and brilliant
            mixing adds cherry on the top. With years of experience and field
            work has made him the number one choice in the profession. Being a
            Film maker, Abhishek knows the start, climax and the happy end. All
            you have to do is, be ready for the "action." His successful
            experiments and working with the international standards is all
            which makes him empower to bring out his best. The collection of his
            equipment set-up includes high end gadgets and accessories. Abhishek
            and his team is all set to capture the series of happy smiles.
          </div>
          <div className={styles.subQuote}>
            <blockquote>
              I love creating luxurious, editorial and fun photo-journalistic
              images
            </blockquote>
          </div>
        </div>
      </main>
    </>
  );
}
