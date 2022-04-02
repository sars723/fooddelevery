export const initialState = {
  cart: null,
  total: null,
};
export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CART:
      return { ...state, cart: action.payload };
    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
