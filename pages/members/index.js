import Link from 'next/link';

const Members = (props) => {
  return (
    <div className="vh-80 card">
      {props.members.map((member) => (
        <li
          style={{
            padding: '10px',
            display: 'flex',
            gap: '10px',
          }}
          key={member.id}
        >
          <Link href={`/members/${member.id}`}>
            <span>{member.name}</span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();

  return {
    props: {
      members: data,
    },
  };
}
export default Members;
