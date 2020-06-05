import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
  CHANGE_EXCHANGE_RATE,
  ADD_TO_SUM,
} from "./actions";

const initialState = {
  transactions: [
    { title: "Transaction no. 2514526586", euro: 35.2 },
    { title: "Transaction no. 4875148695", euro: 44.5 },
    { title: "Transaction no. 5248625931", euro: 120.25 },
    { title: "Transaction no. 9623584158", euro: 50 },
    { title: "Transaction no. 3675481259", euro: 150 },
    { title: "Transaction no. 9624851593", euro: 26 },
    { title: "Transaction no. 5481726983", euro: 185 },
  ],
  rate: 4.4,
  sum: 610.95,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            title: action.title,
            euro: action.euro,
          },
        ],
      };
    case REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction, index) => index !== action.id
        ),
        sum: state.sum - action.euro,
      };
    case CHANGE_EXCHANGE_RATE:
      return {
        ...state,
        rate: action.rate,
      };
    case ADD_TO_SUM:
      return {
        ...state,
        sum: state.sum + action.euro,
      };
    default:
      return state;
  }
}

export default rootReducer;
