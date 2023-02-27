import Link from 'next/link';
import styles from './../styles/Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/members">Members</Link>
    </div>
  );
};

export default Nav;
