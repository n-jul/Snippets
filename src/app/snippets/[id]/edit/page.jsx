import EditSnippetForm from "@/app/components/editSnippetForm";
export default async function editSnippetPage(req, res) {
  const id = req.params.id;

  const data = await fetch(`http://localhost:3000/api/getSingleSnippet`, {
    method: "PUT",
    body: JSON.stringify({ id }),
    cache: "no-cache",
  });
  const result = await data.json();

  return (
    <div>
      <EditSnippetForm snippet={result} />
    </div>
  );
}
