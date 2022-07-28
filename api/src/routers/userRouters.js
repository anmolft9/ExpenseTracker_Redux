import express from "express";
const router = express.Router();
import { getOneUser, insertUser } from "./model/userModel.js";

//// METHOD
router.post("/login", async (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;

  try {
    const { email, password } = req.body;
    const user = await getOneUser({ email });

    if (user?.password === password) {
      user.password = undefined;
      return res.json({
        status: "success",
        message: "logged in successfully",
        user,
      });
    }
    res.json({
      status: "failed",
      message: "mission failed",
    });
  } catch (error) {
    next(error);
  }
});

// POST METHOD
router.post("/", async (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;

  try {
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Please go to you email for confirmation",
          result,
        })
      : res.json({
          status: "failed",
          message: "sorry",
          result,
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "The email is already taken";
    }
    next(error);
  }
});
export default router;
