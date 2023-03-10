import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onViewGalleryClicked = () => router.push("/gallery");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.highlight}>Love Stories Elegantly Told</div>
          <div className={styles.btnContainer}>
            <Button variant="primary" size="lg" onClick={onViewGalleryClicked}>
              VIEW GALLERY
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
