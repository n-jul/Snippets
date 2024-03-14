import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export async function createSnippet(formState, formData) {
  // e.preventDefault();

  try {
    const title = formData.get("title");
    const code = formData.get("code");
    console.log(title, code);
    if (!title || !code) {
      return { message: "All fields are necessary...." };
    } else {
      let result = await fetch("http://localhost:3000/api/createSnippet", {
        method: "POST",
        body: JSON.stringify({ title, code }),
      });
      result = await result.json();
      if (result.error) {
        throw new error();
      } else {
        toast.success("Snippet sucessfully created....");
      }
    }
  } catch (error) {
    return { message: "Snippet can't be saved. Please try again...." };
  }
  redirect("/");
}

export async function editSnippet(id, code) {
  const data = await fetch(`http://localhost:3000/api/updateSnippet`, {
    method: "PUT",
    body: JSON.stringify({ id, code }),
    cache: "no-cache",
  });
  const res = await data.json();
  toast.success("Successfully updated....");
  redirect(`/`);
}

export async function deleteSnippet(id) {
  const data = await fetch(`http://localhost:3000/api/deleteSnippet`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
    cache: "no-cache",
  });

  toast.success("Successfully deleted......");
  redirect(`/`);
}
