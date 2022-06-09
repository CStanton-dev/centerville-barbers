import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout Home>
      <Head>
        <title>Centerville Barbers</title>
        <meta name="description" content="Centerville Barbers, a barbershop located in the heart of Centerville. Schedule an appointment and stop by today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Centerville Barbers
        </h1>
        <p className={styles.description}>A high quality barbershop for the highest quality of customers.</p>
      </main>
    </Layout>
  )
}
