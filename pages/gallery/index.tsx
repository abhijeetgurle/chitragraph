import Head from "next/head";
import styles from "@/styles/Gallery.module.scss";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={`${styles.section} ${styles.preWedding}`}>
          <div className={styles.heading}>PRE-WEDDING</div>
          <div className={styles.subText}>Make A Statement Through Photos</div>
        </div>
        <div className={`${styles.section} ${styles.wedding}`}>
          <div className={styles.heading}>WEDDING PHOTOGRAPHY</div>
          <div className={styles.subText}>
            Every picture tells a strory. Let me help you tell yours
          </div>
        </div>
        <div className={`${styles.section} ${styles.portrait}`}>
          <div className={styles.heading}>PORTRAITS</div>
          <div className={styles.subText}>Put Your Best Face Forward</div>
        </div>
        <div className={`${styles.section} ${styles.modeling}`}>
          <div className={styles.heading}>MODELING</div>
          <div className={styles.subText}>Take Your Career To Next Level</div>
        </div>
      </main>
    </>
  );
}
