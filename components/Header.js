import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Header.module.css';

const Header = () => {
  let { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Cocoon</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
