"use server";
import { Snippet } from "@/db/snippet-model.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  try {
    const connection = await mongoose.connect(process.env.mongoDbUrl);
    if (connection) {
      console.log("connected");
    } else {
      console.log("could not connect");
    }
  } catch (error) {
    console.log(error);
  }
  const payload = await req.json();
  let snippet = new Snippet(payload);
  const result = await snippet.save();
  return NextResponse.json({ result, result: true });
}


