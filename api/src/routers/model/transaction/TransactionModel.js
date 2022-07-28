import transactionSchema from "./TransactionSchema.js";

export const addTransaction = (obj) => {
  return transactionSchema(obj).save();
};
export const getTransaction = (filter) => {
  return transactionSchema.find(filter);
};

export const deleteTransaction = (filter) => {
  return transactionSchema.findOneAndDelete(filter);
};
