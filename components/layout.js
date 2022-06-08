import Head from 'next/head';
import Navbar from './navbar';
import styles from './styles/layout.module.css';

const name ='Carter Stanton'
export const siteTitle = 'Centerville Barbers'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content={name} />
        <meta name='description' content='Reserve a room at the Cosmic Hotel now!' />
        <meta
          property="og:image"
          content='/centerville-barbers-logo.png'
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='cosmic-reservations-full.svg' />
      </Head>
      <Navbar/>
      <main>{children}</main>
    </div>  
  )
}