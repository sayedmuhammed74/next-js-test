import Link from 'next/link';
import styles from './../../styles/posts.module.css';
const Posts = (props) => {
  return (
    <ul
      className={styles.posts}
      style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
    >
      {props.posts.map((post) => (
        <li className={styles.li} key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

export default Posts;
