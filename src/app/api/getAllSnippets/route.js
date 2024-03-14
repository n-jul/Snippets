"use server";
import { Snippet } from "@/db/snippet-model.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function GET(req, res) {
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
  let result = await Snippet.find();
  return NextResponse.json(result);
}
