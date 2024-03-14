"use client";
import React, { useEffect, useState } from "react";
import Item from "./item";
const page = () => {
  
  async function viewSnippet() {}
  
  return (
    <div>
      {allSnippets.map((e) => {
        return (
          <div key={e.id}>
            <Item title={e.title} code={e.code} />
            {/* <button className="border-2 bg-gray-100" onClick={handleEdit}>Edit code</button> */}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default page;
