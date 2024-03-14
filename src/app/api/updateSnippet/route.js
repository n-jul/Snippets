"use server";

import { Snippet } from "@/db/snippet-model.js";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function PUT(req) {
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
  console.log(payload);
  let result = await Snippet.findByIdAndUpdate(payload.id, payload, {
    new: true,
  });
  console.log("res", result);
  if (!result) {
    const res = { result: " Code snipper doesn't exist" };
    return NextResponse.json(res);
  }
  return NextResponse.json(result);
}
