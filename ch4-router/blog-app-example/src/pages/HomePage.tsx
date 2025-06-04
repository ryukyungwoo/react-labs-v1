import { posts } from "../data/posts";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h2>최근 게시글</h2>
      <ul>
        {posts.slice(0, 2).map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 