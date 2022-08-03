import { getOneUser } from "../model/userModel.js";

export const authMiddleWare = async (req, res, next) => {
  try {
    //db authorixation header available
    const { authorization } = req.headers;
    if (authorization) {
      //do user exist in the db
      const user = await getOneUser({ _id: authorization });
      if (user?._id) {
        req.userInfo = user;
        return next();
      }
    }

    res.status(403).json({
      status: "error",
      message: "Unauthorised",
    });
  } catch (error) {
    next(error);
  }
};
