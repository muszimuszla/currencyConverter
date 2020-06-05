export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const REMOVE_TRANSACTION = "REMOVE_TRANSACTION";
export const CHANGE_EXCHANGE_RATE = "CHANGE_EXCHANGE_RATE";
export const ADD_TO_SUM = "ADD_TO_SUM";

export function addTransaction(title, euro) {
  return { type: ADD_TRANSACTION, title, euro };
}

export function removeTransaction(id, euro) {
  return { type: REMOVE_TRANSACTION, id, euro };
}

export function changeExchangeRate(rate) {
  return { type: CHANGE_EXCHANGE_RATE, rate };
}

export function addToSum(euro) {
  return { type: ADD_TO_SUM, euro };
}
