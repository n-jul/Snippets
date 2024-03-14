"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [allSnippets, setAllSnippets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/getAllSnippets", {
      method: "GET",
    })
      .then((views) => views.json())
      .then((views) => setAllSnippets([...views]));
  }, []);
  console.log(allSnippets);

  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {allSnippets.map((item) => {
          return (
            <Link
              key={item._id}
              href={`/snippets/${item._id}`}
              className="flex justify-between items-center p-2 border rounded"
            >
              <div className="flex m-4 justify-between items-center">
                {item.title}
              </div>
              <div>View</div>
            </Link>
          );
        })}
      </div>
    </>
    // <div>
    //   <Link href={"/"}>HOME</Link>
    //   <br />
    //   <Link href={"snippets/view"}>VIEW ALL SNI</Link>
    //   <br />
    //   <Link href={"snippets/edit"}>EDIT</Link>
    // </div>
  );
}
