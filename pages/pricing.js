import Head from 'next/head';
import Layout from '../components/layout';
import PricingCard from '../components/pricingCard';
import styles from '../styles/Pricing.module.css';

export default function Pricing() {
  const pricedItems = [
    {id: 1,title: 'Haircut', price: 15, includes: ['Haircut', 'Back of Neck Shave', 'Hot Towel Head Wrap'], status: 'available'},
    {id: 2, title: 'Face Shave', price: 25, includes: ['Full Face Shave (razor)', 'Hot Towel Head Wrap'], status: 'unavailable'},
    {id: 3, title: 'Head Shave', price: 15, includes: ['Full Head Shave (razor)', 'Hot Towel Head Wrap'], status: 'available'},
    {id: 4, title: 'Beard Trim', price: 5, includes: ['Beard Trim (no razor)'], status: 'unavailable'},
    {id: 5, title: 'Facial', price: 10, includes: ['Rolling Cream', 'Cold Cream', 'Facial Massage'], status: 'available'},
    {id: 6, title: 'Package', price: 45, includes: ['Haircut', 'Face Shave', 'Facial'], status: 'available'},
  ]

  return (
    <Layout>
      <Head>
        <title>Centerville Barbers | Pricing</title>
        <meta name='description' content='Check out our prices for haircuts and more!' />
      </Head>
      <div className='row'>
        <div className='col-md-12 justify-content-center align-items-center d-flex flex-column'>
          <h1 className={styles.title}>Pricing</h1>
          <p className={styles.description}>Here is a pricing list of our haircuts, beard trims, and more.</p>
          <section className={styles.grid}>
            <PricingCard items={pricedItems}/>
          </section>
        </div>
      </div>
    </Layout>
  )
}