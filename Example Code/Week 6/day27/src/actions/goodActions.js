import { GET_ALL_GOODS, GOOD_ERROR } from "./types";
import axios from "axios";

export const getAllGoods = () => async (dispatch) => {
  let config = {
    method: "get",
    url: "/barang",
  };

  try {
    let response = await axios(config);

    dispatch({
      type: GET_ALL_GOODS,
      payload: response.data.data,
    });
  } catch (e) {
    dispatch({
      type: GOOD_ERROR,
      payload: e.response,
    });
  }
};
