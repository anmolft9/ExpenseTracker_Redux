import axios from "axios";
const rootURL = "http://localhost:8000";
const userEP = rootURL + "/api/v1/user";
const transactionEP = rootURL + "/api/v1/transaction";

/////USER API
export const postNewUser = async (obj) => {
  try {
    const response = await axios.post(userEP, obj);
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (obj) => {
  try {
    const response = await axios.post(userEP + "/login", obj);
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

////TRANSACTION API

export const postTransactions = async (obj) => {
  try {
    const response = await axios.post(transactionEP, obj);
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getTransaction = async (obj) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user")); //to parse json file
    const userId = user._id; //c
    // console.log(response);
    const response = await axios.get(transactionEP, {
      headers: {
        authorization: userId,
      },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

///deleteTransaction
export const deleteTransaction = async (_id) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user")); //to parse json file
    const userId = user._id; //c
    // console.log(response);
    const response = await axios.delete(transactionEP + "/" + _id, {
      headers: {
        authorization: userId,
      },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
