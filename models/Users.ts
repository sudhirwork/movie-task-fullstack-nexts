import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: String,
    password: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
