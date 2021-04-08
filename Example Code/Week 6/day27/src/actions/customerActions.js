import { GET_ALL_CUSTOMERS, CUSTOMER_ERROR } from "./types";
import axios from "axios";

export const getAllCustomers = () => async (dispatch) => {
  let config = {
    method: "get",
    url: "/pelanggan",
  };

  try {
    let response = await axios(config);

    dispatch({
      type: GET_ALL_CUSTOMERS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: e.response,
    });
  }
};
