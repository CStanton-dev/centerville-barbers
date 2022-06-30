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
    </Layout>
  )
}