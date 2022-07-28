import userSchema from "./userSchema.js";

export const insertUser = (addUser) => {
  return userSchema(addUser).save();
};

export const getOneUser = (filter) => {
  return userSchema.findOne(filter);
};
