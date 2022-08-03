// import { loginUser } from "../helpers/axiosHelper";

import { loginUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";
import { setUser } from "./userSlice";
// import { useDispatch } from "react-redux";

export const loginAction = (obj) => async (dispatch) => {
  //first call axios and get data from the server

  const { status, message, user } = await loginUser(obj);
  toast[status](message);
  //   const dispatch = useDispatch();

  if (status === "success") {
    window.sessionStorage.setItem("user", JSON.stringify(user));

    dispatch(setUser(user));
  }

  //dispatch the incomoing data to the slice
};

export const userLogoutAction = () => (dispatch) => {
  //   const dispatch = useDispatch();

  dispatch(setUser({}));
  window.sessionStorage.removeItem("user");
};
