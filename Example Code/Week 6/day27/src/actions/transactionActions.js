import {
  GET_ALL_TRANSACTIONS,
  GET_ONE_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR,
} from "./types";

import axios from "axios";

export const getAllTransactions = () => async (dispatch) => {
  let config = {
    method: "get",
    url: "/transaksi",
  };

  try {
    let response = await axios(config);

    dispatch({
      type: GET_ALL_TRANSACTIONS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
};

export const getOneTransaction = (id) => async (dispatch) => {
  let config = {
    method: "get",
    url: `/transaksi/${id}`,
  };

  try {
    let response = await axios(config);

    dispatch({
      type: GET_ONE_TRANSACTION,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
};

export const deleteTransaction = (id) => async (dispatch) => {
  let config = {
    method: "delete",
    url: `/transaksi/${id}`
  }

  try {
    await axios(config);

    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: e.response,
    });
  }
}
