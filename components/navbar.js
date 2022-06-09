import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav role='navigation' className={styles.Navbar} aria-label='Main'>
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
    </nav>
  )
}