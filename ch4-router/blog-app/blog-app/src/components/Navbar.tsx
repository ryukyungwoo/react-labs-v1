import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-500 mb-4 pb-2 flex gap-3 items-center ">
      <Link to="/" className="hover:text-blue-500 transition-all">
        home
      </Link>
      <Link to="/about" className="hover:text-blue-500 transition-all">
        about
      </Link>
      <Link to="/posts" className="hover:text-blue-500 transition-all">
        posts
      </Link>
      <Link to="/login" className="hover:text-blue-500 transition-all">
        login
      </Link>
      <Link to="/search" className="hover:text-blue-500 transition-all">
        search
      </Link>
    </nav>
  );
}
