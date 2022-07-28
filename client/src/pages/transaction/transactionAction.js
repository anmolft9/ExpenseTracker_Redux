import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";

import {
  deleteTransaction,
  getTransaction,
  postTransactions,
} from "../../helpers/axiosHelper";
import { setTransaction } from "./transactionSlice";

/////////////////

export const fetchDataAction = () => async (dispatch) => {
  const { status, message, trans } = await getTransaction();
  status === "success" && dispatch(setTransaction(trans));
};

/////////////////

export const postDataAction = (form) => async (dispatch) => {
  const user = JSON.parse(sessionStorage.getItem("user")); //to parse json file
  // console.log(user._id);
  const userId = user._id;
  // console.log(userId);
  const { status, message } = await postTransactions({ ...form, userId });
  toast[status](message);

  status === "success" && dispatch(fetchDataAction());
};

//////////////
export const handleOnDeleteAction = (_id) => async (dispatch) => {
  if (!window.confirm("Are you sure you want to delete this transaction")) {
    return;
  }
  // console.log(_id);
  const { status, message } = await deleteTransaction(_id);
  console.log(status, message);
  toast[status](message);
  status === "success" && dispatch(fetchDataAction());
};
