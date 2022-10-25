import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Schedule.module.css";

export default function Schedule() {
  return (
    <Layout>
      <Head>
        <title>Centerville Barbers | Schedule</title>
      </Head>
      <h1 className={styles.title}>Schedule</h1>
      <p className={styles.description}>Schedule your haircut appointment today!</p>
      <div className={styles.wrapper}>
        <iframe 
          src="https://centervillebarbers.resurva.com/book?embedded=true"
          name="resurva-frame"
          style={{maxWidth: 450 + 'px', maxHeight: 450 + 'px'}}
          width="450"
          height="450"
          frameBorder="0">
        </iframe>
      </div>
    </Layout>
  )
}