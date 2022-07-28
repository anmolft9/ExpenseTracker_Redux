import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransaction,
} from "./model/transaction/TransactionModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // console.log("hunter");
    // console.log(req.body);
    const result = await addTransaction(req.body);
    // console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "posted",
        })
      : res.json({
          status: "failed",
          message: "not posted",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    // console.log(authorization);

    const filter = { userId: authorization };

    const trans = await getTransaction(filter);
    res.json({
      status: "success",
      message: "todo",
      trans,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { authorization } = req.headers;
    const { _id } = req.params;
    // console.log(authorization);

    if (authorization && _id) {
      const filter = {
        userId: authorization,
        _id,
      };

      const result = await deleteTransaction(filter);

      if (result._id) {
        return res.json({
          status: "success",
          message: "deleted",
        });
      }
    }
    res.json({
      status: "error",
      message: "invalid request",
    });

    // console.log(result);
    // console.log();
  } catch (error) {
    next(error);
  }
});

export default router;
