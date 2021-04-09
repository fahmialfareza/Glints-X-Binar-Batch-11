import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import goodReducer from "./goodReducer";
import customerReducer from "./customerReducer";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  transaction: transactionReducer,
  good: goodReducer,
  customer: customerReducer,
  user: authReducer,
  alert: alertReducer,
});
