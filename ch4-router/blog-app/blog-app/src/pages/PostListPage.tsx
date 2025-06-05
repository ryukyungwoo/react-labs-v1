import { Link, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostListPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="mb-4">Whole Post</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/posts/new")} className="pt-5">
        new post
      </button>
    </div>
  );
}
