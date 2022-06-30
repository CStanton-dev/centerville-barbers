import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Schedule.module.css'

export default function Schedule() {
  return (
    <Layout>
      <Head>
        <title>Centerville Barbers | Schedule</title>
      </Head>

      <h1 className={styles.title}>Schedule</h1>
      <p className={styles.description}>Here you can schedule a haircut with us</p>

			<div class="container scheduleContainer">
        <div class="d-flex justify-content-center">
					<iframe class="embed-responsive-item" src="https://centervillebarbers.resurva.com/book?embedded=true" name="resurva-frame" frameborder="0" width="450" height="450" style={{maxWidth: '450px', maxHeight: '450px',}}></iframe>
				</div>
      </div>  
    </Layout>
  )
}