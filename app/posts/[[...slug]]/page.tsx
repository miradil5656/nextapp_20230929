interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const Posts = ({ params: { slug },searchParams: {sortOrder} }: Props) => {
  return <div>Posts {slug} {sortOrder}</div>;
};

export default Posts;
