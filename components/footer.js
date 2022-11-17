import Image from 'next/image';
import Link from 'next/link';
import logoMark from '../public/centerville-barbers-logomark.png'
import styles from './styles/footer.module.css';

export default function Footer() {
  return (
    <footer role='footer' className={styles.footer}>
      <div className={styles.copyright}>
        <Image
          src={logoMark}
          width={24}
          height={24}
          alt='Logomark'
        />
        &nbsp;&copy;{' '}2022
      </div>
      <div>
        <h3 className={styles.listCategory}>About</h3>
        <ul className={styles.list}>
          <li>
            <Link href='/meet-the-team' passHref>
              <a>Meet The Team</a>
            </Link>
          </li>
          <li>  
            <Link href='https://www.facebook.com/CentervilleBarbers/'>
              <a target="_blank" rel="noopener noreferrer">Facebook</a>
            </Link>
          </li>
          <li>  
            <Link href='https://www.yelp.com/biz/centerville-barbers-a-little-off-the-top-centerville-3'>
              <a target="_blank" rel="noopener noreferrer">Yelp</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles.listCategory}>Legal</h3>
        <ul className={styles.list}>
          <li>
            <Link href='/privacy-policy' passHref>
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}