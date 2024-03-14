"use client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import * as actions from "@/actions/index.js";
const editSnippetForm = ({ snippet }) => {
  const [code, setCode] = useState("");
  const handleChange = (value) => {
    setCode(value);
  };
  const editSnippetAction = actions.editSnippet.bind(null, snippet._id, code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default editSnippetForm;
