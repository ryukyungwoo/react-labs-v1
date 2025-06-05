import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404 - not found</h2>
      <p>no page in here</p>
      <Link to="/">to home</Link>
    </div>
  );
}
