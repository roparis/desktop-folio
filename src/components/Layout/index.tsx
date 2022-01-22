import React from 'react';
import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav>
        <ul>
          <li>Folio</li>
        </ul>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer />
    </div>
  );
};
export default Layout;
