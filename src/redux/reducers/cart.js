const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDCART":
      return [...state, action.payload];
    case "REMOVECART":
      return (state = action.payload);
    default:
      return state;
  }
};

export default cartReducer;
