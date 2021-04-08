import {
  GET_ALL_TRANSACTIONS,
  GET_ONE_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTION_ERROR,
} from "../actions/types";

const initialState = {
  allTransactions: null,
  currentTransaction: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        allTransactions: action.payload,
      };
    case GET_ONE_TRANSACTION:
      return {
        ...state,
        loading: false,
        currentTransaction: action.payload,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        loading: false,
        allTransactions: state.allTransactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
