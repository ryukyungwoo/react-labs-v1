import { useState } from "react";

interface Content {
  id: number;
  title: string;
}
export default function PostLoader() {
  const [content, setContent] = useState<Content | null>(null);

  const data = fetch("https://jsonplaceholder.typicode.com/posts/1");
  data.then((res) => res.json()).then((data) => setContent(data));

  return (
    <div>
      {!content ? (
        <div>loading ...</div>
      ) : (
        <li>
          {content?.id} : {content?.title}
        </li>
      )}
    </div>
  );
}
