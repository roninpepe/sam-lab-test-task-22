import { FC } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import styles from 'styles/components/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles._}>
      <Logo className={styles.logo} />
      <h2 className={styles.title}>Shop NAME</h2>
    </header>
  );
};

export default Header;
