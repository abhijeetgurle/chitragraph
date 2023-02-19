import AppNavbar from "@/components/AppNavbar";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./contactMe.module.scss";

export default function ContactMe() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNavbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <div className={styles.mainText}>Let's Talk</div>
            <div className={styles.subText}>
              I'm so happy you love the photos enough to get more information!
            </div>
            <div className={styles.subText}>
              Share your contact information, We will catch you shortly
            </div>
          </div>
          <Form className={styles.form}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className={styles.label}>Name *</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className={styles.label}>Email *</Form.Label>
              <Form.Control type="email" placeholder="Your Email Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className={styles.label}>Mobile *</Form.Label>
              <Form.Control type="text" placeholder="Your Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className={styles.label}>Message *</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your Message" />
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit" size="md">
              Contact Me
            </Button>
          </Form>
        </div>
      </main>
    </>
  );
}
