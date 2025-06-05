import { useSearchParams } from "react-router-dom";

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  return (
    <div>
      <h2>result ...</h2>
      <p>search item : {q}</p>
    </div>
  );
}
