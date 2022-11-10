import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Schedule.module.css";

export default function Schedule() {
  return (
    <Layout>
      <Head>
        <title>Centerville Barbers | Schedule</title>
      </Head>
      <div className='row no-gutters'>
        <div className='col-md-12 justify-content-center align-items-center d-flex flex-column'>
          <h1 className={styles.title}>Schedule</h1>
          <p className={styles.description}>Schedule your haircut appointment today!</p>
          <div className='container-fluid d-flex'>
            <iframe 
              src="https://centervillebarbers.resurva.com/book?embedded=true"
              name="resurva-frame"
              style={{maxWidth: 400 + 'px', maxHeight: 400 + 'px'}}
              width="450"
              height="450"
              frameBorder="0">
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}