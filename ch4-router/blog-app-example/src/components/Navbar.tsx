import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ borderBottom: "1px solid #ccc", marginBottom: 16, paddingBottom: 8 }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/posts" style={{ marginRight: 12 }}>Posts</Link>
      <Link to="/about">About</Link>
    </nav>
  );
} 