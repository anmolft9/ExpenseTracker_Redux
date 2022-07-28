import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    ///for verification
    status: {
      type: String,
      default: "inactive",
    },

    firstName: {
      type: String,
      require: true,
      maxlength: 100,
    },
    lastName: {
      type: String,
      require: true,
      maxlength: 100,
    },
    email: {
      type: String,
      require: true,
      maxlength: 100,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      require: true,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema); ///users
