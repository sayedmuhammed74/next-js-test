const Details = (props) => {
  return (
    <div className="vh-80 card">
      <span>{props.member.name}</span>
      <span>{props.member.age}</span>
      <span>{props.member.place}</span>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/posts`);
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
  const id = context.params.id;
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      member: data,
    },
  };
}

export default Details;
