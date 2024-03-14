import mongoose, { Schema } from "mongoose";
const snippetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

export const Snippet =
  mongoose.models.Snippet || mongoose.model("Snippet", snippetSchema);
