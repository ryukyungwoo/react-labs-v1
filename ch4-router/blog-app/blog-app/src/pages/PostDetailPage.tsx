import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetailPage() {
  const { id } = useParams();
  const post = posts.find((post) => post.id == Number(id));
  if (!post) return <p>cant find</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">to list ...</Link>
    </div>
  );
}
