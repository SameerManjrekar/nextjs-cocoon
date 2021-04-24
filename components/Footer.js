import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Cocoon 2021</p>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
