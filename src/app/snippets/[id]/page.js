"use client";
import Link from "next/link";
import * as actions from "@/actions";
export default async function (props) {
  const id = props.params.id;
  const deleteSnippetAction = actions.deleteSnippet.bind(null, id);

  console.log(id);
  const data = await fetch(`http://localhost:3000/api/getSingleSnippet`, {
    method: "PUT",
    body: JSON.stringify({ id }),
    cache: "no-cache",
  });
  const result = await data.json();
  if (!result) {
    return <div>Can't found the snippet</div>;
  } else {
    return (
      <div>
        <div className="flex m-4 justify-between items-center">
          <h1 className="text-xl font-bold">{result.title}</h1>
          <div className="flex gap-4">
            <Link className="p-2 border rounded" href={`${id}/edit`}>
              Edit
            </Link>
            <form action={deleteSnippetAction}>
              <button className="p-2 border rounded">Delete</button>
            </form>
          </div>
        </div>
        <pre className="p-3 border rounded bg-gray-200 border-gray-200">
          <code>{result.code}</code>
        </pre>
      </div>
    );
  }
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/getAllSnippets");
  const snippets = await res.json();
  return snippets.map((snippet) => {
    return {
      id: snippet._id.toString(),
    };
  });
}
