const Details = (props) => {
  return (
    <div className="vh-80 card">
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  const data = await res.json();

  const paths = data.map((d) => {
    return {
      params: {
        id: `${d.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}

export default Details;
