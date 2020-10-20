const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDCART":
      return [...state, action.payload];
    case "REMOVE":
      return [action.payload];
    default:
      return state;
  }
};

export default cartReducer;
