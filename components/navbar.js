import Link from 'next/link';
import Image from 'next/image';
import Modal from './modal';
import { useState } from 'react';
import styles from './styles/navbar.module.css';
import BusinessHours from './businessHours';


export default function Navbar() {
  const [show, setShow] = useState(false)

  return (
    <nav role='navigation' className={styles.Navbar} aria-label='navigation'>
      <Link href='/' passHref>
        <a className={styles.NavLink}>
          <Image
            src="/centerville-barbers-logo.png"
            height={53}
            width={200}
            alt="Centerville Barbers"
          />
        </a>
      </Link>
      <Link href='/' passHref>
        <a className={styles.NavLink}>
          Home
        </a>
      </Link>
      <Link href='/pricing' passHref>
        <a className={styles.NavLink}>
          Pricing
        </a>
      </Link>
      <Link href='/schedule' passHref>
        <a className={styles.NavLink}>
          Schedule
        </a>
      </Link>
      <a onClick={() => setShow(true)} className={styles.NavLink} role='button'>Hours</a>
      <Modal title="Hours of Operation" onClose={() => setShow(false)} show={show}>
        <BusinessHours />
      </Modal>
      <Link href='/schedule' passHref>
        <a className={styles.NavLink}>
          Schedule
        </a>
      </Link>
    </nav>
  )
}