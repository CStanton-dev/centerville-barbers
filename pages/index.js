import Head from 'next/head'
import Layout from '../components/layout'
import IsOpen from '../components/isOpen'
import styles from '../styles/Home.module.css'
import ScheduleButton from '../components/scheduleButton'
import StructedData from '../components/structuredData'

export default function Home() {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Centerville Barbers",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "62 W Franklin St",
      "addressLocality": "Centerville",
      "addressRegion": "OH",
      "postalCode": "45459",
      "addressContry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.627960477520595,
      "longitude": -84.16481648562284
    },
    "telephone" : "+19372605103",
    "url": "https://centervillebarbers.net"
  }

  return (
    <Layout Home>
      <Head>
        <title>Centerville Barbers</title>
        <meta name="description" content="Centerville Barbers, a barbershop located in the heart of Centerville. Schedule an appointment and stop by today!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <StructedData data={structuredData}/>
      <main className={`${styles.main} row`}>
        <div className='col-md-12 justify-content-center align-items-center d-flex flex-column'>
        <h1 className={styles.title}>
          Centerville Barbers
        </h1>
        <p className={styles.description}>A high quality barbershop for the highest quality of customers.</p>
        <p className={styles.description}>Find us at 62 W Franklin St, Centerville, OH 45459</p>
        <IsOpen />
        <div className={styles.wrapper}>
          <ScheduleButton />
        </div>
        </div>
      </main>
    </Layout>
  )
}
